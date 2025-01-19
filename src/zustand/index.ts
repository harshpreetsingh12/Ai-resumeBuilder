import { create } from "zustand";
import { createResumeSlice, ResumeState } from "./slices/resumeSlice";
import { ResumeSkillState, skillsSlice } from "./slices/skillsSlice";
import { experienceSlice, ExperienceState } from "./slices/experienceSlice";

type AppState = ResumeState & ResumeSkillState & ExperienceState;

export const useAppStore = create<AppState>()((...a) => ({
  ...createResumeSlice(...a),
  ...skillsSlice(...a),
  ...experienceSlice(...a),
}));
