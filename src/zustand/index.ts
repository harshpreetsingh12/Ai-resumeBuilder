import { create } from "zustand";
import { createResumeSlice, ResumeState } from "./slices/resumeSlice";

type AppState = ResumeState;

export const useAppStore = create<AppState>()((...a) => ({
  ...createResumeSlice(...a),
}));
