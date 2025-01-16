'use client';

import { Button } from '@/components/ui/button';
import useFetch from '@/hooks/useFetch';
import { Dock, Plus } from 'lucide-react';
import React, { useEffect } from 'react'
import { createResume } from '../../../../actions/resume';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Resume_card from './resume_card';

interface ResumeData {
  name: string;
  experience: number;
  skills: string[];
}


type Resume = {
  id: string;
  title: string; 
};

type DashBoardPageProps = {
  resumes: Resume[];
};

const DashboardPage = ({resumes}:DashBoardPageProps) => {
 
  const { 
      data: resumeData,
      error,
      fn: createFuncFunction,
      loading: updateDefaultLoading
  } =useFetch(createResume);
  const router = useRouter()


  useEffect(()=>{
    if(resumeData && !updateDefaultLoading ){
        if(resumeData.data?.id){
          router.push(
            `/resume/${resumeData.data?.id}`
          )
        }
        toast.success('Resume Setup successful')
    }
  },[resumeData, updateDefaultLoading])

  useEffect(()=>{
    if(error){
      const errorMessage = error instanceof Error ? error.message : error;
      toast.error(errorMessage || "Failed to create resume" )
    }
  },[error])

  return (
    <div>
       <Button disabled={updateDefaultLoading} variant="outline" onClick={()=>createFuncFunction()}>
          New Resume
        <Plus  className="h-4 w-4" />
      </Button>
      <div className='my-12 mx-2'>

        {resumes.map(resume=>{
          return (
            <Resume_card key={resume.id} resume={resume}/>
          )
        })}
      </div>
    </div>
  )
}

export default DashboardPage
