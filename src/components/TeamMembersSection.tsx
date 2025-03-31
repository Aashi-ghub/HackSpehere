
import React from "react";
import { UseFormRegister, FieldErrors, Control, UseFieldArrayReturn, FieldArrayWithId, UseFormSetValue } from "react-hook-form";
import TeamMemberForm from "./TeamMemberForm";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export interface TeamMember {
  fullName: string;
  phone: string;
  email: string;
  college: string;
  isLeader: boolean;
  rollNumber:string;
  idCard:File|null;

}

export interface FormData {
  teamName: string;
  members: TeamMember[];
  paymentMethod?: "credit_card" | "wallet" | "bank_transfer";
}

interface TeamMembersSectionProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  control: Control<FormData>;
  fields: FieldArrayWithId<FormData, "members", "id">[];
  members: TeamMember[];
  setTeamLeader: (index: number) => void;
  append: UseFieldArrayReturn<FormData, "members", "id">["append"];
  remove: UseFieldArrayReturn<FormData, "members", "id">["remove"];
  setValue: UseFormSetValue<FormData>; // Added setValue
  customStyles?: {
    glassCard: string;
    inputField: string;
  };
}

const TeamMembersSection: React.FC<TeamMembersSectionProps> = ({
  register,
  errors,
  control,
  setValue,
  fields,
  members,
  setTeamLeader,
  customStyles,
}) => {
  // Define local styles
  const localStyles = {
    container: `
      mb-6
    `,
    sectionHeader: `
      flex justify-between items-center mb-4
    `,
    title: `
      text-xl font-semibold text-white
    `,
    memberCount: `
      text-sm text-white text-opacity-70
    `,
    addButton: `
      flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-md font-medium 
      hover:opacity-90 transition-all duration-300 
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
    errorText: `
      text-[#FF0000] text-center mt-4
    `
  };
  return (
    <div className={localStyles.container}>
      <div className={localStyles.sectionHeader}>
        <h2 className={localStyles.title}>Team Members</h2>
      </div>
      
      <div className="space-y-6"> {/* <-- This is the key line */}
  {fields.map((field, index) => (
    <TeamMemberForm
      key={field.id}
      index={index}
      register={register}
      errors={errors}
      control={control}
      setValue={setValue}
      isLeader={members[index]?.isLeader || false}
      onSetLeader={setTeamLeader}
      customStyles={customStyles}
    />
  ))}
</div>
      
      {/* <div className="flex justify-center mt-6">
        <button
          type="button"
          onClick={handleAddMember}
          disabled={fields.length >= 4}
          className={localStyles.addButton}
        >
          <Plus size={18} />
          Add Member
        </button>
      </div>
      
      {fields.length < 3 && (
        <p className={localStyles.errorText}>
          Minimum 3 members required
        </p>
      )} */}
    </div>
  );
};

export default TeamMembersSection;