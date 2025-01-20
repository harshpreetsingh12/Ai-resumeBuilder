import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAppStore } from "@/zustand";
import { AudioLines, Trash } from "lucide-react";

type EducationType = {
  school: string;
  field: string;
  graduation: string;
  location: string;
  achievement: string;
};

const MultiEducationForm = () => {
  const education = useAppStore((state) => state.education);
  const updateEducationData = useAppStore((state) => state.updateEducationData);

  const addNewEducation = () => {
    const defaultEducation: EducationType = {
      school: "",
      field: "",
      graduation: "",
      location: "",
      achievement: "",
    };
    updateEducationData([...education, defaultEducation]);
  };

  const handleUpdate = (
    index: number,
    key: keyof EducationType,
    value: string,
  ) => {
    const updatedEducation = [...education];
    updatedEducation[index] = { ...updatedEducation[index], [key]: value };
    updateEducationData(updatedEducation);
  };

  const deleteEducation = (index: number) => {
    const updatedEducation = education.filter((_, idx) => idx !== index);
    updateEducationData(updatedEducation);
  };

  return (
    <div className="w-full text-sm py-4 grid gap-6">
      {education.map((edu, idx) => (
        <EducationSection
          key={idx}
          index={idx}
          data={edu}
          onUpdate={handleUpdate}
          onDelete={deleteEducation}
        />
      ))}
      <Button
        onClick={addNewEducation}
        className="mt-4 w-[20%] px-4 py-2 bg-black text-white font-semibold rounded-md  transition mb-2"
      >
        Add New Education
      </Button>
    </div>
  );
};

const EducationSection = ({
  index,
  data,
  onUpdate,
  onDelete,
}: {
  index: number;
  data: EducationType;
  onUpdate: (index: number, key: keyof EducationType, value: string) => void;
  onDelete: (index: number) => void;
}) => {
  const handleChange =
    (key: keyof EducationType) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onUpdate(index, key, event.target.value);
    };

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-md border-gray-300 border-[1px] rounded-md text-sm relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-md font-semibold text-black text-lg">
          Education {index + 1}
        </h3>
        <span
          className="absolute top-6 right-6 cursor-pointer"
          onClick={() => onDelete(index)}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Trash size={14} color="red" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete Education</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </span>
      </div>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* School */}
        <div>
          <label className="block font-medium mb-1">School</label>
          <Input
            type="text"
            placeholder="ABC School/College"
            value={data.school}
            onChange={handleChange("school")}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Field of Study */}
        <div>
          <label className="block font-medium mb-1">Field of Study</label>
          <Input
            type="text"
            placeholder="Computer Science"
            value={data.field}
            onChange={handleChange("field")}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Graduation Period */}
        <div>
          <label className="block font-medium mb-1">Graduation Period</label>
          <Input
            type="text"
            placeholder="MM/YYYY - MM/YYYY"
            value={data.graduation}
            onChange={handleChange("graduation")}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Location */}
        <div>
          <label className="block font-medium mb-1">Location</label>
          <Input
            type="text"
            placeholder="City, State"
            value={data.location}
            onChange={handleChange("location")}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Achievements */}
        <div className="sm:col-span-2">
          <label className="block font-medium mb-1">Achievements</label>
          <Input
            type="text"
            placeholder="What are your academic achievements?"
            value={data.achievement}
            onChange={handleChange("achievement")}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2">
          <Button onClick={() => null} className="text-xs">
            {false ? "Generating..." : "Enhance With Ai"}{" "}
            <AudioLines size={12} />
          </Button>

          <Button
            type="submit"
            variant={"ghost"}
            className="py-2 rounded-md text-xs"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MultiEducationForm;
