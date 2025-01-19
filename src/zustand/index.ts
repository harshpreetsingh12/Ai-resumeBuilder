import { create } from "zustand";
import { createResumeSlice, ResumeState } from "./slices/resumeSlice";
import { ResumeSkillState, skillsSlice } from "./slices/skillsSlice";
import { experienceSlice, ExperienceState } from "./slices/experienceSlice";
import { projectSlice, ProjectState } from "./slices/projectSlice";

type AppState = ResumeState & ResumeSkillState & ExperienceState & ProjectState;

export const useAppStore = create<AppState>()((...a) => ({
  ...createResumeSlice(...a),
  ...skillsSlice(...a),
  ...experienceSlice(...a),
  ...projectSlice(...a),
}));
