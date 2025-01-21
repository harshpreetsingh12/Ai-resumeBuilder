'use client'; 
import { useAppStore } from '@/zustand';
import React, { useEffect } from 'react'
import ResumeHead from './ResumeHead';
import ExperienceTab from './ExperienceTab';
import SkillSection from './SkillSection';
import EducationSection from './EducationSection';
import ProjectSection from './ProjectSection';
import SummarySection from './SummarySection';
import { ResumeType } from '@/lib/schemaValidations';

 
type ResumePageProps = {
  resumeData:ResumeType;
};
  
const Resume_template = ({resumeData}:ResumePageProps) => {
  const updateResumeData = useAppStore((state) => state.updateResumeData);

  useEffect(() => {
    if (resumeData) {
      updateResumeData(resumeData);
    }
  }, [resumeData]);
  
  return (
    <div className='py-6 bg-gray-100 px-3 xl:px-10 h-screen overflow-scroll scrollbar-none'>
      <div className='bg-white rounded-md px-2 lg:px-6 py-2 shadow-gray-400 shadow-sm mb-24'> 
        <ResumeHead/> 
        <SummarySection/> 
        <ExperienceTab/> 
        <ProjectSection/> 
        <SkillSection/> 
        <EducationSection/> 
      </div>
    </div>
  )
}

export default Resume_template;
