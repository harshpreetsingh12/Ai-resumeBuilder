"use client";

import { useAppStore } from "@/zustand";
import React, { useEffect } from "react";

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

const Resume_template = ({ resumeData }: ResumePageProps) => {
  const resumeState = useAppStore((state) => state.resumeState);

  return <div className="">right</div>;
};

export default Resume_template;
