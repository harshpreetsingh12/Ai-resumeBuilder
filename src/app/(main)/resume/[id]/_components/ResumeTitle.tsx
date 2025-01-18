"use client";

import React from 'react'
import { Input } from "@/components/ui/input";
import { useAppStore } from '@/zustand';

const ResumeTitle = () => {
    const resumeState = useAppStore((state) => state.resumeState);
    
    const handleTitleChange =()=>{

    }
    return (
        <div className=''>
            <Input className='px-0 border-b-2 border-black border-none' value={resumeState.title} onChange={handleTitleChange} />
        </div>
    )
}

export default ResumeTitle
