"use client";
import { useAppStore } from '@/zustand';
import React from 'react'

const SummarySection = () => {
    const resumeState = useAppStore((state) => state.resumeState);
    const { summary } = resumeState

    return (
        <div className='flex w-full flex-col relative justify-between border-b-2 border-b-gray-400 py-3'>
        <h1 className='text-black text-sm font-bold'>Summary</h1>
        <div className='flex flex-wrap gap-2 py-2'>
            <p className='text-black text-xs rounded-lg'>{summary}</p>
        </div>
        </div>
    )
}

export default SummarySection
