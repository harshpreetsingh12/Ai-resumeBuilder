"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Dock } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Resume = {
  id: string;
  title: string;
};

type ResumeCardProps = {
  resume: Resume;
  image: string;
};

const Resume_card = ({ resume, image }: ResumeCardProps) => {
  const router = useRouter();

  const handleNavigate = (id: string) => {
    router.push(`/resume/${id}`);
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-64 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200 mb-10 py-2 cursor-pointer"
      onClick={() => handleNavigate(resume.id)}
    >
      <Image
        src={image}
        alt={resume.title}
        width={300}
        height={100}
        className=" rounded-md object-cover mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {resume.title}
      </h2>
      {/* <Button
        className="text-white bg-gray-600 hover:bg-gray-900 rounded-md px-4 py-2"
        onClick={() => handleNavigate(resume.id)}
      >
        View Resume
        <Dock className="h-4 w-4 ml-2" />
      </Button> */}
    </div>
  );
};

export default Resume_card;
