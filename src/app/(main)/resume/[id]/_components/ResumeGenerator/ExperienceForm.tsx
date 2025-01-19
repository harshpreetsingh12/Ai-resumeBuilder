import { generateExperience } from "#/generators";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type ExperienceProps = {
  position: string;
  companyName: string;
  startDate: Date;
  endDate: Date | string;
  content: string[];
};

const ExperienceForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [experiences, setExperiences] = useState<ExperienceProps>([]); // Store multiple experiences
  const [generatedExperience, setGeneratedExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (data: any) => {
    setExperiences((prev) => [...prev, data]); // Add new experience to the list
    reset(); // Clear form fields
    setGeneratedExperience(""); // Clear AI-generated content
  };

  const handleGenerateExperience = async () => {
    setLoading(true);
    setError(""); // Clear previous error
    try {
      const input = watch(); // Collect all form inputs
      const userInput = `
      Company Name: ${input.companyName || "N/A"}
      Job Title: ${input.jobTitle || "N/A"}
      Location: ${input.location || "N/A"}
      Start Date: ${input.startDate || "N/A"}
      End Date: ${input.endDate || "N/A"}
      Currently Working Here: ${input.currentlyWorking ? "Yes" : "No"}
      Details: ${input.details || ""}
      `;
      const output = await generateExperience(userInput);
      setGeneratedExperience(output);
      setValue("details", output); // Populate the Textarea with AI-generated output
    } catch (err) {
      console.error("Error generating experience:", err);
      setError("Failed to generate experience. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-md rounded-md overflow-y-scroll">
      <h1 className="text-2xl font-bold mb-2">
        Tell us about your experiences
      </h1>
      <h2 className="text-gray-600 mb-6">
        You can add multiple job experiences.
      </h2>

      {/* Scrollable Experience List */}
      <div className="max-h-96 overflow-y-auto mb-4 border rounded-md p-4 bg-gray-100">
        {experiences.length > 0 ? (
          experiences.map((exp, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <h3 className="font-semibold">
                {exp.jobTitle} at {exp.companyName}
              </h3>
              <p>{exp.location}</p>
              <p>
                {exp.startDate} -{" "}
                {exp.currentlyWorking ? "Present" : exp.endDate}
              </p>
              <p>{exp.details}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No experiences added yet.</p>
        )}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Company Name */}
        <div className="mb-4">
          <label className="block font-medium">Company Name:</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            {...register("companyName", {
              required: "Company name is required",
            })}
            placeholder="e.g., Acme Corp"
          />
          {errors.companyName && (
            <p className="text-red-500">{errors.companyName.message}</p>
          )}
        </div>

        {/* Job Title */}
        <div className="mb-4">
          <label className="block font-medium">Job Title:</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            {...register("jobTitle", { required: "Job title is required" })}
            placeholder="e.g., Software Engineer"
          />
          {errors.jobTitle && (
            <p className="text-red-500">{errors.jobTitle.message}</p>
          )}
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block font-medium">Location:</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            {...register("location", { required: "Location is required" })}
            placeholder="e.g., New York, NY"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>

        {/* Start Date */}
        <div className="mb-4">
          <label className="block font-medium">Start Date:</label>
          <input
            type="date"
            className="w-full border rounded-md p-2"
            {...register("startDate", { required: "Start date is required" })}
          />
          {errors.startDate && (
            <p className="text-red-500">{errors.startDate.message}</p>
          )}
        </div>

        {/* End Date or Currently Working */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            {...register("currentlyWorking")}
            onChange={(e) =>
              setValue("endDate", e.target.checked ? "" : watch("endDate"))
            }
          />
          <label className="font-medium">I currently work here</label>
        </div>
        {!watch("currentlyWorking") && (
          <div className="mb-4">
            <label className="block font-medium">End Date:</label>
            <input
              type="date"
              className="w-full border rounded-md p-2"
              {...register("endDate")}
            />
          </div>
        )}

        {/* Work Details */}
        <div className="mb-4">
          <label className="block font-medium">Details:</label>
          <Textarea
            className="w-full border rounded-md p-2"
            {...register("details")}
            value={generatedExperience}
            onChange={(e) => setGeneratedExperience(e.target.value)}
            placeholder="Describe your responsibilities, achievements, etc."
          />
          <button
            type="button"
            className="mt-2 text-white bg-blue-500 px-4 py-2 rounded-md"
            onClick={handleGenerateExperience}
            disabled={loading}
          >
            {loading ? "Generating..." : "AI Assist"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full text-white bg-green-500 px-4 py-2 rounded-md"
          >
            Add Experience
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExperienceForm;
