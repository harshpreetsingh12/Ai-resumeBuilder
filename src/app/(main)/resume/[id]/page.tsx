import React from 'react'
import { getUserResume } from '../../../../../actions/resume';
import Resume_template from './_components/resume_template';

type ResumePageParamType = {
  id: string;
};

type ResumePageProps = {
  params: Promise<ResumePageParamType>;
};

const ResumePage= async ({ params }:ResumePageProps) => {
  const resolved= await params
  const resumeData = await getUserResume(resolved.id);
  return (
    <div>
      <Resume_template
          resumeData={resumeData}
      />
    </div>
  )
}

export default ResumePage
