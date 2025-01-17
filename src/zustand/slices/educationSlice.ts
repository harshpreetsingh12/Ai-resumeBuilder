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

export interface ResumeState {
    educationState: ResumeType;
    updateEducaitonData: (data: object) => void;
}

export const createResumeSlice: StateCreator<ResumeState> = (set) => ({
  educationState: DefaultState,
  updateEducaitonData: (data) =>
    set((state) => ({
      ...state,
      educationState: { ...state.educationState, ...data }, 
    })),
});

const DefaultState={
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
}