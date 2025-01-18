import React from "react";
import { getUserResume } from "../../../../../actions/resume";
import Resume_Generator from "./_components/ResumeGenerator/resume_generator";
import Resume_template from "./_components/Resume_template/resume_template";

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
  colorHex: 'black',
  summary: "I am a Frontend Engineer with nearly 2 years of experience working closely with a wide range of tech stacks. I believe I would be a great fit for this role because I have been deeply involved in various phases of the development lifecycle. I am capable of both leading a team and continuously improving my own skills.",
  firstName: "Harshpreet",
  lastName: "Singh",
  jobTitle: "Software Engineer",
  city: "Dehradun",
  country: "IN",
  phone: "+91 8630228697",
  email: "harshpreets362@gmail.com",
  boarderStyle:"full"
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
