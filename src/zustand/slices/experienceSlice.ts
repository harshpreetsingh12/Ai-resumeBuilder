import { StateCreator } from "zustand";

type ExperienceType = {
  position: string;
  companyName: string;
  startDate: Date | string;
  endDate: Date | string;
  content: string;
  location:string;
};

export interface ExperienceState {
    experiences: ExperienceType[];
    updateExperienceData: (data: ExperienceType[]) => void;
}

export const experienceSlice: StateCreator<ExperienceState> = (set) => ({
  experiences: DefaultState,
  updateExperienceData: (data) =>
    set((state) => ({
      ...state,
      experiences: data, 
    })),
});

const DefaultState=[
  {
    position: "Software Engieer",
    companyName: "i-Resonate",
    startDate: "2025-03-10",
    endDate: "2022-05-10",
    content: `- Engineered and integrated live marketing applications with major social media 
      - platforms (Facebook, LinkedIn, Instagram), streamlining user interactions and enhancing
      - Designed and build a dynamic organization admin dashboard featuring advanced graphical data visualization.`,
    location:'IN'
  },
  {
    position: "Software Engieer",
    companyName: "i-Resonate",
    startDate:"2025-03-10",
    endDate: "Present",
    content: `- Engineered and integrated live marketing applications with major social media 
    - platforms (Facebook, LinkedIn, Instagram), streamlining user interactions and enhancing
    - Designed and build a dynamic organization admin dashboard featuring advanced graphical data visualization.`,
    location:'IN'
  },
]