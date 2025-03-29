
import React from "react";
import TeamMemberCard from "./TeamMemberCard";

interface TeamMember {
  fullName: string;
  phone: string;
  email: string;
  github: string;
  college: string;
  isLeader: boolean;
}

interface TeamMembersSectionProps {
  members: TeamMember[];
}

const TeamMembersSection: React.FC<TeamMembersSectionProps> = ({ members }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-white mb-4">
        Team Members
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {members.map((member, index) => (
          <TeamMemberCard 
            key={index} 
            member={member} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamMembersSection;