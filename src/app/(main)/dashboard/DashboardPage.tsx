'use client';

import { Button } from '@/components/ui/button';
import useFetch from '@/hooks/useFetch';
import { Plus } from 'lucide-react';
import React, { useEffect } from 'react'
import { createResume } from '../../../../actions/resume';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface ResumeData {
  name: string;
  experience: number;
  skills: string[];
}

const DashboardPage = () => {
  const { 
      data: resumeData,
      error,
      fn: createFuncFunction,
      loading: updateDefaultLoading
  } =useFetch(createResume);
  const router = useRouter()


  useEffect(()=>{
    if(resumeData && !updateDefaultLoading ){
        if(resumeData.data?._id){
          router.push(
            `/resume/${resumeData.data?._id}`
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
       <Button variant="outline" onClick={()=>createFuncFunction()}>
          New Resume
        <Plus  className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default DashboardPage
