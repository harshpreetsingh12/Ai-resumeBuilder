"use client";

import { useAppStore } from "@/zustand";
import React, { useMemo, useState } from "react";
import { ChevronRight } from "lucide-react";
import ResumeInfoForm from "./ResumeInfoForm";
import ExperienceForm from "./ExperienceForm";
import { Button } from "@/components/ui/button";

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

  const [currentTab, setCurrentTab] = useState(GENERATOR_STEPS[0])
  
  const FormGenerator=()=>{
    switch (currentTab.key) {
			case "resumeInfo":
				return <ResumeInfoForm/>
			case "workExperience":
				return <ExperienceForm/>
      default:
        return <div></div>
    }
  }

  const CurrentTabIndex=useMemo(()=>{
    return GENERATOR_STEPS.findIndex((el)=>el.key===currentTab.key)
  },[currentTab])

  const handlePrevTab=()=>{
    setCurrentTab(GENERATOR_STEPS[CurrentTabIndex-1])
  }
  const handleNextTab=()=>{
    setCurrentTab(GENERATOR_STEPS[CurrentTabIndex+1])
  }

  const FormUi= useMemo(()=>FormGenerator(), [currentTab])
  return (
    <div className="px-3 xl:px-10 w-full flex flex-col h-[86vh]">
      <div className="flex justify-center">
        {GENERATOR_STEPS.map((gen,index)=>{
          return (
            <div 
              key={gen.key} 
              onClick={()=>setCurrentTab(gen)}
              className={`items-center flex ${currentTab.key!=gen.key ? "text-gray-500":"text-black"} text-xs mx-2 gap-2 cursor-pointer hover:text-black`}
            >
              <span>{gen.title}</span>
              {index!==GENERATOR_STEPS.length -1 && 
              <ChevronRight  size={12}/>
              }
            </div>
          )
        })}
      </div>

      {/* Generators */}

      <div className="flex flex-col items-center pt-10">
          <h1 className="text-2xl font-bold"> {currentTab.title} </h1>
          <p className="text-xs text-gray-600 pt-1">{currentTab.description}</p>
      </div>

      {FormUi}

      <div className="flex justify-center gap-4 mt-auto w-full">
        <Button variant="ghost" className="text-xs px-4 py-2" onClick={handlePrevTab} disabled={CurrentTabIndex===0}>Previous</Button>
        <Button className="text-xs px-4 py-2" onClick={handleNextTab} disabled={CurrentTabIndex===GENERATOR_STEPS.length-1}>Next</Button>
      </div>
    </div>
  )
};

export default Resume_Generator;

const GENERATOR_STEPS=[
    {
      title:'Resume Info',
      key:'resumeInfo',
      description:'Add small resume Title'
    },
    {
      title:'Personal Info',
      key:'personalInfo',
      description:'Add your personal info'
    },
    {
      title:'Work Experience',
      key:'workExperience',
      description:'Add Your all work experiences'
    },
    {
      title:'Education',
      key:'educaton',
      description:"Add your educations"
    },
    {
      title:'Skills',
      key:"Add relevant skills according to your position"
    },
    {
      title:'Summary',
      key:'summary',
      description:'Add a small summary about you'
    },
]