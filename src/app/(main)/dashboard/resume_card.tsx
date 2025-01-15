'use client';

import React from 'react'
import { Button } from '@/components/ui/button';
import { Dock } from 'lucide-react';
import { useRouter } from 'next/navigation';

type Resume = {
  id: string;
  title: string; 
};

type ResumeCardProps = {
  resume: Resume;
};

const Resume_card = ({resume}:ResumeCardProps) => {
  const router = useRouter()

  const handleNavigate=(id:string)=>{
    router.push(
        `/resume/${id}`
    )
  }
  return (
    <Button className='mr-3' variant="outline" onClick={()=>handleNavigate(resume.id)}>
        {resume.title}
        <Dock  className="h-4 w-4" />
    </Button>
  )
}

export default Resume_card
