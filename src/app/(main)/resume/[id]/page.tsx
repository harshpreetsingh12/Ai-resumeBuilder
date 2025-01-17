import React from "react";
import { getUserResume } from "../../../../../actions/resume";
import Resume_template from "./_components/resume_template";
import Resume_Generator from "./_components/resume_generator";
import ResumeTitle from "./_components/ResumeTitle";

type ResumePageParamType = {
  id: string;
};

type ResumePageProps = {
  params: Promise<ResumePageParamType>;
};

const ResumePage = async ({ params }: ResumePageProps) => {
  const resolved = await params;
  const resumeData = await getUserResume(resolved.id);
  return (
    <div>
      <ResumeTitle/>
      <div className="grid grid-cols-2 w-full gap-2 mt-3">
        <Resume_Generator resumeData={resumeData} />
        <Resume_template resumeData={resumeData} />
      </div>
    </div>
  );
};

export default ResumePage;
