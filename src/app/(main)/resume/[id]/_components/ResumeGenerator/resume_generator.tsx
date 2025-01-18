"use client";

import { useAppStore } from "@/zustand";
import React, { useEffect } from "react";
import ResumeTitle from "../ResumeTitle";

type ResumeType = {
  id: string;
  userId: string;
  title: string;
  description: string;
  photoUrl: string;
  colorHex: string;
  boarderStyle: string;
  summary: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  city: string;
  country: string;
  phone: string;
  email: string;
};

type ResumePageProps = {
  resumeData: ResumeType;
};

const Resume_Generator = ({ resumeData }: ResumePageProps) => {
  const updateResumeData = useAppStore((state) => state.updateResumeData);
  const resumeState = useAppStore((state) => state.resumeState);
  
  return <div className=" px-3 xl:px-10">
     <ResumeTitle/>
  </div>;
};

export default Resume_Generator;
