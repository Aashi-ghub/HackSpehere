import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "./TeamMembersSection";
import { Card } from "./ui/card";

interface TeamNameInputProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  customStyles?: {
    cardStyle: string;
    inputField: string;
  };
}

const TeamNameInput: React.FC<TeamNameInputProps> = ({ register, errors, customStyles }) => {
  // Local styling instead of using global classes
  const localStyles = {
    input: customStyles?.inputField || `
      w-full bg-[#1E1E1E] border border-[#333333] rounded-md px-4 py-3
      text-white placeholder-gray-400 focus:outline-none focus:ring-2
      focus:ring-[#FF0000]/50 focus:border-[#FF0000]
      transition-all duration-300
    `,
    errorText: `
      text-[#FF0000] text-sm mt-1 animate-[fadeIn_0.3s_ease-in-out]
    `
  };

  return (
    <Card className={customStyles?.cardStyle || "bg-[#1A1A1A] border-[#333333] p-6 mb-6 gap-4 rounded-lg"}>
      <div className="relative">
        <input
          {...register("teamName", {
            required: "Team name is required",
          })}
          placeholder="Team Name *"
          className={localStyles.input}
        />
        {errors.teamName && (
          <p className={localStyles.errorText}>
            {errors.teamName.message}
          </p>
        )}
      </div>
    </Card>
  );
};

export default TeamNameInput;