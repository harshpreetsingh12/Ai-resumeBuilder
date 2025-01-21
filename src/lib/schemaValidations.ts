import { z } from "zod"

export const experienceSchema = z
  .object({
    position: z.string().min(1, "Position is required"),
    companyName: z.string().min(1, "Company Name is required"),
    location: z.string().optional(),
    startDate: z.string({ required_error: "Start Date is required" }),
    endDate: z
    .union([z.string(), z.literal("Present")]) // Allows either a date or "Present"
    .optional(),
    content: z.string({ required_error: "Details is required" })
    })
;

export const projectSchema = z.object({
  projectName: z.string().min(1, "Project Name is required"),
  projectLink: z.string().url("Invalid URL").optional(), 
  content: z.string().min(1, "Details are required"),
  skillsUsed: z.array(z.string()).optional(),
});


export type ExperienceType = {
  position: string;
  companyName: string;
  startDate: Date | string;
  endDate: Date | string;
  content: string;
  location: string;
};

export type EducationType = {
  school: string;
  field: string;
  graduation: string;
  location: string;
  achievement: string;
};

export type ProjectType = {
  projectName: string;
  projectLink: string;
  content: string;
  skillsUsed:string[]
};

export type ResumeType = {
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

export type AutoResumeType = {
  educations: EducationType[];
  resumeData: ResumeType; // Assuming ResumeType has basic resume details
  projectData: ProjectType[];
  experienceData: ExperienceType[];
  skills: string[];
};