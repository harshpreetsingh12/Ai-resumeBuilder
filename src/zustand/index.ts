import { create } from "zustand";
import { createResumeSlice, resumeState } from "./slices/titleSlice";

type AppState = resumeState;

export const useAppStore = create<AppState>()((...a) => ({
  ...createResumeSlice(...a),
}));
