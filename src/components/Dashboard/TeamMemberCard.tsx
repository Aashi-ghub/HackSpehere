
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TeamMemberProps {
  member: {
    fullName: string;
    phone: string;
    email: string;
    github: string;
    college: string;
    isLeader: boolean;
  };
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ member, index }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="p-5 bg-white rounded-lg border border-red-200 shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg">
      <Avatar className={member.isLeader 
        ? "bg-gradient-to-br from-red-600 to-red-800 text-white font-medium text-lg ring-2 ring-red-400"
        : index % 2 === 0 
          ? "bg-gradient-to-br from-red-500 to-red-700 text-white font-medium text-lg"
          : "bg-gradient-to-br from-gray-700 to-gray-900 text-white font-medium text-lg"
      }>
        <AvatarFallback>{getInitials(member.fullName)}</AvatarFallback>
      </Avatar>
      
      <div className="flex-1">
        <div className="font-medium text-gray-800">
          {member.fullName}
          {member.isLeader && (
            <span className="text-red-600 font-medium text-sm ml-2 bg-red-100 px-2 py-0.5 rounded">
              Leader
            </span>
          )}
        </div>
        <div className="text-sm text-gray-500">
          {member.email}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
