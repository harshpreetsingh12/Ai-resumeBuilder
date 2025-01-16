import { StateCreator } from "zustand";

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

export interface resumeState {
  state: ResumeType;
  updateResumeData: (data: object) => void;
}

export const createResumeSlice: StateCreator<resumeState> = (set) => ({
  state: {
    id: "",
    userId: "",
    title: "",
    description: "",
    photoUrl: "",
    colorHex: "",
    boarderStyle: "",
    summary: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    city: "",
    country: "",
    phone: "",
    email: "",
  },
  updateResumeData: (data) => set((state) => ({ ...state, ...data })),
});
