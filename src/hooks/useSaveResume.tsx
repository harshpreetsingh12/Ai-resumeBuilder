'use client';

import useDebounce from "@/hooks/useDebounce";
import { EducationType, ExperienceType, ProjectType, ResumeType } from "@/lib/schemaValidations";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import db  from "@/lib/prisma";
import { saveFullResume } from "#/resume";

type AutoResumeType = {
  educations:EducationType[],
  resumeData:ResumeType,
  projectData:ProjectType[],
  experienceData:ExperienceType[],
  skills:string[]
}
type AutoResumeProps = {
  resumeData:AutoResumeType,
}

export default function useAutoSaveResume({resumeData}:AutoResumeProps) {
  const debouncedResumeData = useDebounce(resumeData, 1500);

  const [resumeId, setResumeId] = useState(resumeData.id);

  const [lastSavedData, setLastSavedData] = useState(
    structuredClone(resumeData),
  );

  const [isSaving, setIsSaving] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
  }, [debouncedResumeData]);

  async function save() {
    try {
      console.log('save call',resumeData)
      setIsSaving(true);
      setIsError(false);

      const updatedResume = await saveFullResume(resumeData);

      if(updatedResume.success){
        toast.success('Content udpate success!' ,{id:'success update'})
      }
      console.log(updatedResume)
      // setResumeId(updatedResume.id);
      // setLastSavedData(newData);

    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  }

  useEffect(() => {
    if (debouncedResumeData && !isSaving && !isError) {
      save();
    }
  }, [
    debouncedResumeData,
    isSaving,
    lastSavedData,
    isError,
    resumeId,
  ]);

  return {
    isSaving,
  };
}