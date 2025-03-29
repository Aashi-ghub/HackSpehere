import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { toast } from "sonner";
import TeamNameInput from "./TeamNameInput";
import TeamMembersSection from "./TeamMembersSection";
import PaymentSection from "./PaymentSection";
import SubmitButton from "./SubmitButton";
import { FormData, TeamMember } from "./TeamMembersSection";
import { useNavigate } from "react-router-dom";

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    setValue,
    getValues,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      teamName: "",
      paymentMethod: "credit_card",
      members: [
        {
          fullName: "",
          phone: "",
          email: "",
          college: "",
          isLeader: true,
        },
        {
          fullName: "",
          phone: "",
          email: "",
          college: "",
          isLeader: false,
        },
        {
          fullName: "",
          phone: "",
          email: "",
          college: "",
          isLeader: false,
        },
        {
          fullName: "",
          phone: "",
          email: "",
          college: "",
          isLeader: false,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "members",
  });

  const members = watch("members");
  const [submitAnimation, setSubmitAnimation] = useState<boolean>(false);

  // All styling is encapsulated within the component
  const formStyles = {
    container: `
      w-full max-w-3xl mx-auto overflow-hidden relative rounded-xl
      before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br 
      before:from-rose-900/20 before:via-red-800/10 before:to-pink-900/15 
      before:rounded-xl before:-z-10 before:blur-xl
      after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-tr 
      after:from-rose-500/5 after:via-red-400/5 after:to-pink-500/10 
      after:rounded-xl after:-z-10
    `,
    form: `
      space-y-6 animate-[fadeIn_0.5s_ease-in-out] p-6
      bg-gradient-to-b from-[#1A1A1A]/90 to-[#1A1A1A]/95
      border-[1px] border-white/50 rounded-xl
      backdrop-blur-sm
    `,
    inputField: `
      w-full bg-[#1E1E1E]/70 border-[1px] border-white/40 rounded-md px-4 py-2 
      text-white placeholder-gray-400 outline-none focus:border-transparent focus:ring-2 
      focus:ring-[#FF0000]/50 focus:border-[#000000]
      transition-all duration-300
    `,
    cardStyle: `
      bg-[#1A1A1A]/80 
      backdrop-blur-sm hover:bg-[#1A1A1A]/90 transition-all duration-300
    `,
    glassCard: `
      bg-[#1A1A1A]/80 backdrop-blur-lg 
      rounded-lg
      hover:bg-[#1A1A1A]/90 transition-all duration-300
    `,
  };

  // Define keyframe animations locally
  const keyframes = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.6; }
    }
  `;

  const onSubmit = async (data: FormData) => {
    setSubmitAnimation(true);
    
    // set the TeamData in localStorage
    localStorage.setItem("teamData", JSON.stringify(data));

    // Simulating API call
    try {
      // Make API call to the backend /register route
      const response = await fetch(
        "https://inceptionx-production.onrender.com/team/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(data), // Send the form data as JSON
        }
      );
      const result = await response.json();
      if (response.ok) {
        toast.success("Registration submitted successfully!", {
          description: `Team "${data.teamName}" has been registered with payment.`,
          duration: 5000,
        });
        setTimeout(() => {
          // navigate("/payment ",{state:{teamDetails:data}});
             navigate("/payment")
        }, 3000);
      } else {
        {
          toast.error(result.message, {
            description: "Please try Again",
          });
        }
      }
      
    } catch (err) {
      // Show error toast
      toast.error("Registration failed!", {
        description: err.message || "An error occurred. Please try again.",
        duration: 5000,
      });
    } finally {
      setSubmitAnimation(false);
      
    }
  };

  const setTeamLeader = (leaderIndex: number) => {
    const updatedMembers = [...getValues("members")];
    updatedMembers.forEach((member, index) => {
      setValue(`members.${index}.isLeader`, index === leaderIndex);
    });
  };

  // Validate at least one team leader is selected
  useEffect(() => {
    const hasLeader = members.some((member) => member.isLeader);
    if (!hasLeader && members.length > 0) {
      setTeamLeader(0);
    }
  }, [members]);

  return (
    <>
      {/* Include keyframe animations in style tag */}
      <style>{keyframes}</style>

      <div className={formStyles.container}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={formStyles.form}
          style={{ animationDelay: "0.2s" }}
        >
          <TeamNameInput
            register={register}
            errors={errors}
            customStyles={formStyles}
          />

          <TeamMembersSection
            register={register}
            errors={errors}
            control={control}
            fields={fields}
            members={members}
            setTeamLeader={setTeamLeader}
            append={append}
            remove={remove}
            customStyles={formStyles}
          />

          <PaymentSection
            register={register}
            errors={errors}
            control={control}
            customStyles={formStyles}
            membersCount={members.length}
          />

          <SubmitButton
            isSubmitting={isSubmitting}
            disabled={fields.length < 3}
            submitAnimation={submitAnimation}
          />
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
