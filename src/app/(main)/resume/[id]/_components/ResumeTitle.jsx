"use client";

import React from 'react'
import { Input } from "@/components/ui/input";
import { useAppStore } from '@/zustand';

const ResumeTitle = () => {
    const resumeState = useAppStore((state) => state.resumeState);
    
    return (
        <div>
            <Input className='px-0 border-b-2 border-none' value={resumeState.title} />
        </div>
    )
}

export default ResumeTitle
