import { useAppStore } from '@/zustand';
import React from 'react'

const ResumeHead = () => {
    const resumeState = useAppStore((state) => state.resumeState);

    return (
        <div>
             head
        </div>
    )
}

export default ResumeHead
