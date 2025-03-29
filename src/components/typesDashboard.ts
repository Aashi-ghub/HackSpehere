
export interface TeamMember {
    fullName: string;
    phone: string;
    email: string;
    github: string;
    college: string;
    isLeader: boolean;
  }
  
  export interface TeamData {
    teamName: string;
    members: TeamMember[];
  }
  
  export interface PaymentData {
    transactionId: string;
    timestamp: string;
    status: "Pending" | "Confirmed";
  }
  