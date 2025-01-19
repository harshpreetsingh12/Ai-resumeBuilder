import { StateCreator } from "zustand";

type ProjectType = {
    projectName: string;
    projectLink: string;
    content: string;
    skillsUsed:string[]
};

export interface ProjectState {
    projects: ProjectType[];
    updateProjectData: (data: ProjectType[]) => void;
}

export const projectSlice: StateCreator<ProjectState> = (set) => ({
    projects: DefaultState,
    updateProjectData: (data) =>
        set((state) => ({
            ...state,
            projects: data, 
        })),
});

const DefaultState=[
    {
        projectName: "Uber Clone",
        projectLink: "https://yoursavior.netlify.app/",
        content:`-Developed workflow management features allowing teams to collaborate
            -Designed and build a dynamic organization admin dashboard featuring advanced graphical data visualization.
        `,
        skillsUsed:['Javacript', "React", "Next"]
    },
    {
        projectName: "Loom 2.0",
        projectLink: "https://yoursavior.netlify.app/",
        content:`-Developed workflow management features allowing teams to collaborate
            -Designed and build a dynamic organization admin dashboard featuring advanced graphical data visualization.
        `,
        skillsUsed:['Javacript', "React", "Next"]
    },
]