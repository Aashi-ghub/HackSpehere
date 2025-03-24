
import React from "react";
import { UseFormRegister, FieldErrors, Control, UseFieldArrayReturn, FieldArrayWithId } from "react-hook-form";
import TeamMemberForm from "./TeamMemberForm";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export interface TeamMember {
  fullName: string;
  phone: string;
  email: string;
  college: string;
  isLeader: boolean;
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
  customStyles?: {
    glassCard: string;
    inputField: string;
  };
}

const TeamMembersSection: React.FC<TeamMembersSectionProps> = ({
  register,
  errors,
  control,
  fields,
  members,
  setTeamLeader,
  append,
  remove,
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

  const handleAddMember = () => {
    if (fields.length < 4) {
      append({
        fullName: "",
        phone: "",
        email: "",
        college: "",
        isLeader: false,
      });
    }
  };

  const handleRemoveMember = (index: number) => {
    if (fields.length > 3) {
      // Check if we're removing the team leader
      const isRemovingLeader = members[index].isLeader;
      
      remove(index);
      
      // If we removed the leader, set the first member as the new leader
      if (isRemovingLeader && fields.length > 1) {
        setTimeout(() => setTeamLeader(0), 0);
      }
    } else {
      toast.error("A minimum of 3 members is required");
    }
  };

  return (
    <div className={localStyles.container}>
      <div className={localStyles.sectionHeader}>
        <h2 className={localStyles.title}>Team Members</h2>
        <p className={localStyles.memberCount}>
          {fields.length}/4 members
        </p>
      </div>
      
      <div className="space-y-6"> {/* <-- This is the key line */}
  {fields.map((field, index) => (
    <TeamMemberForm
      key={field.id}
      index={index}
      register={register}
      errors={errors}
      control={control}
      isLeader={members[index]?.isLeader || false}
      onSetLeader={setTeamLeader}
      onRemove={handleRemoveMember}
      showRemoveButton={fields.length > 3}
      customStyles={customStyles}
    />
  ))}
</div>
      
      <div className="flex justify-center mt-6">
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
      )}
    </div>
  );
};

export default TeamMembersSection;