import { create } from "zustand";
import { createResumeSlice, ResumeState } from "./slices/resumeSlice";
import { ResumeSkillState, skillsSlice } from "./slices/skillsSlice";

type AppState = ResumeState & ResumeSkillState;

export const useAppStore = create<AppState>()((...a) => ({
  ...createResumeSlice(...a),
  ...skillsSlice(...a),
}));
