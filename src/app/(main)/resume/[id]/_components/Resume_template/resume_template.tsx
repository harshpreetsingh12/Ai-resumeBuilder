"use client";

import { useAppStore } from "@/zustand";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ResumeHead from "./ResumeHead";
import ExperienceTab from "./ExperienceTab";
import SkillSection from "./SkillSection";
import EducationSection from "./EducationSection";
import ProjectSection from "./ProjectSection";
import SummarySection from "./SummarySection";
import { AutoResumeType } from "@/lib/schemaValidations";
import useAutoSaveResume from "@/hooks/useSaveResume";
import { useReactToPrint } from "react-to-print";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import ColorPicker from "./ColorComponent";

type ResumePageProps = {
  WholeResumeData: AutoResumeType;
};

const Resume_template = ({ WholeResumeData }: ResumePageProps) => {
  const {
    education: educations,
    updateEducationData,
    skillsState: skills,
    updateSkillsData,
    projects,
    updateProjectData,
    experiences,
    updateExperienceData,
    resumeState,
    updateResumeData,
  } = useAppStore((state) => state);

  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const isInitialLoad = useRef(true);

  const [isPickerVisible, setPickerVisible] = useState(false); // Manage visibility of the color picker
  const [colorHex, setColorHex] = useState("#000000"); // Manage the current selected color

  useEffect(() => {
    if (WholeResumeData) {
      udpateRedux();
      setTimeout(() => {
        isInitialLoad.current = false;
      }, 0);
    }
  }, [WholeResumeData]);

  const udpateRedux = () => {
    const { educations, resumeData, projectData, experienceData, skills } =
      WholeResumeData;
    updateEducationData(educations);
    updateSkillsData(skills);
    updateProjectData(projectData);
    updateExperienceData(experienceData);
    updateResumeData(resumeData);
  };

  const AutoSaveResumeData = useMemo(
    () => ({
      educations: educations,
      resumeData: resumeState,
      projectData: projects,
      experienceData: experiences,
      skills: skills,
    }),
    [educations, resumeState, projects, experiences, skills],
  );

  const { isSaving } = useAutoSaveResume({
    resumeData: AutoSaveResumeData,
    skipFirstSave: isInitialLoad.current,
  });

  return (
    <div className="py-6 bg-gray-100 px-3 xl:px-10 h-screen overflow-scroll scrollbar-none relative">
      {isPickerVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="p-4 bg-white rounded-md shadow-lg">
            <ColorPicker color={colorHex} setColor={setColorHex} />
            <Button
              onClick={() => setPickerVisible(false)}
              className="mt-4 w-full"
            >
              Close
            </Button>
          </div>
        </div>
      )}

      <div className="fixed right-2 bottom-2">
        <Button
          title="Print Resume"
          onClick={() => reactToPrintFn()}
          variant={"outline"}
          className="rounded-md"
        >
          <Printer size={12} />
        </Button>
      </div>

      {/* Open Color Picker Button */}
      <Button
        onClick={() => setPickerVisible(true)}
        className="absolute bg-gray-50 rounded-full"
      >
        🎨
      </Button>

      <div
        ref={contentRef}
        className="bg-white rounded-md px-2 lg:px-6 py-2 mb-24"
      >
        <ResumeHead />
        <SummarySection />
        <ExperienceTab />
        <ProjectSection />
        <SkillSection />
        <EducationSection />
      </div>
    </div>
  );
};

export default Resume_template;
