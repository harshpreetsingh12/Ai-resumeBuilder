import React from "react";
import { getUserResume } from "../../../../../actions/resume";
import Resume_Generator from "./_components/resume_generator";
import ResumeTitle from "./_components/ResumeTitle";
import Resume_template from "./_components/Resume_tem[;ate/resume_template";

type ResumePageParamType = {
  id: string;
};

type ResumePageProps = {
  params: Promise<ResumePageParamType>;
};

const TempresumeData= {
  id: 'asdsad',
  userId: 'asdsad',
  title: 'untitled',
  description: 'Implemented a flexible voucher-based subscription model within the existing payment integration, and contributed to the design and troubleshooting of comprehensive system architectures, including database structures.',
  photoUrl: "https://harshpreetsingh-portfolio.netlify.app/assets/imgv/me2.webp",
  colorHex: 'red',
  summary: "Developed workflow management features allowing teams to collaborate on tasks within a shared document environment. Enabled admins to assign and track tasks, leveraging React.js for dynamic UI updates and Redux for state management.Applied learning and reward system where users received weekly tasks and earned points based on AI algorithms. Designed the feature to boost user engagement",
  firstName: "Harshpreet",
  lastName: "Singh",
  jobTitle: "Software Engineer",
  city: "Dehradun",
  country: "IN",
  phone: "+91 8630228697",
  email: "harshpreets362@gmail.com",
}
const ResumePage = async ({ params }: ResumePageProps) => {
  const resolved = await params;
  const resumeData = await getUserResume(resolved.id);
  return (
      <div className="grid grid-cols-2 w-full gap-2 mt-3">
        <Resume_Generator resumeData={resumeData} />
        <Resume_template resumeData={TempresumeData} />
      </div>
  );
};

export default ResumePage;
