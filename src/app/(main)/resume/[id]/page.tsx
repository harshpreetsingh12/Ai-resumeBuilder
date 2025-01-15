import React from 'react'
import { getUserResume } from '../../../../../actions/resume';

type ResumePageParamType = {
  id: string;
};

type ResumePageProps = {
  params: Promise<ResumePageParamType>;
};

const ResumePage= async ({ params }:ResumePageProps) => {
  const resolved= await params
  const accountData = await getUserResume(resolved.id);

  console.log(accountData)
  return (
    <div>
      
    </div>
  )
}

export default ResumePage
