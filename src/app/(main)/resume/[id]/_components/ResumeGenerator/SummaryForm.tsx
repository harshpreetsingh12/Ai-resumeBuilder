import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useAppStore } from '@/zustand';
import { AudioLines } from 'lucide-react';
import React from 'react'

const skills = [
    "JavaScript ES6",
    "TypeScript",
    "React.js",
    "React Native",
    "Redux",
    "HTML 5",
    "CSS 3",
    "Bootstrap",
    "Tailwind CSS",
    "Material UI",
    "Github",
    "JSON Web Token",
    "RESTful APIs",
    "NPM",
    "Node.js",
];

const SummaryForm = () => {
    const updateResumeData = useAppStore((state) => state.updateResumeData);
    const resumeState = useAppStore((state) => state.resumeState);
         
    const { summary } = resumeState
      
    const handleUpdateSummary = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value= e.target.value
        updateResumeData({summary:value});
    }

  return (
    <div className='px-10 py-5'>
           <div className='space-y-2'>
               <label htmlFor='title' className='text-sm font-medium'>Summary</label>
               <Textarea 
                    rows={6}
                   id="title"
                   value={summary}
                   onChange={handleUpdateSummary}
                   placeholder='Add a summary about your professional backgroun'
               />
               <Button className='text-xs'>Enhance With Ai <AudioLines size={12}/></Button>
           </div>
       </div>
  )
}

export default SummaryForm
