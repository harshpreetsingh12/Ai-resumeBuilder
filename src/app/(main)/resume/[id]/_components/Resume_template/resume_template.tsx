'use client'; 
import { useAppStore } from '@/zustand';
import React, { useEffect, useMemo, useRef } from 'react'
import ResumeHead from './ResumeHead';
import ExperienceTab from './ExperienceTab';
import SkillSection from './SkillSection';
import EducationSection from './EducationSection';
import ProjectSection from './ProjectSection';
import SummarySection from './SummarySection';
import { AutoResumeType, ResumeType } from '@/lib/schemaValidations';
import useAutoSaveResume from '@/hooks/useSaveResume';

 
type ResumePageProps = {
  WholeResumeData:AutoResumeType;
};
  
const Resume_template = ({WholeResumeData}:ResumePageProps) => {
  const {
    education:educations,updateEducationData,
    skillsState:skills, updateSkillsData,
    projects, updateProjectData,
    experiences,updateExperienceData,
    resumeState,updateResumeData
    
  } = useAppStore((state) => state);

  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (WholeResumeData) {
      udpateRedux();
      setTimeout(() => {
        isInitialLoad.current = false;
      }, 0);
    }
  }, [WholeResumeData]);

  const udpateRedux=()=>{
    const {educations,resumeData, projectData, experienceData, skills} =WholeResumeData
    updateEducationData(educations)
    updateSkillsData(skills)
    updateProjectData(projectData)
    updateExperienceData(experienceData)
    updateResumeData(resumeData)
  }


  const AutoSaveResumeData = useMemo(
    () => ({
      educations: educations,
      resumeData: resumeState,
      projectData: projects,
      experienceData: experiences,
      skills: skills,
    }),
    [educations, resumeState, projects, experiences, skills]
  );

  const { isSaving } = useAutoSaveResume({ resumeData: AutoSaveResumeData, skipFirstSave:isInitialLoad.current });


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
