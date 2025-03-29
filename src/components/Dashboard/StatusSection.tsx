
import React from "react";
import StatusBadge from "./StatusBadge";

interface PaymentData {
  transactionId: string;
  timestamp: string;
  status: "Pending" | "Confirmed";
}

interface StatusSectionProps {
  paymentData: PaymentData | null;
}

const StatusSection: React.FC<StatusSectionProps> = ({ paymentData }) => {
  return (
    <div className="mb-8 bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg border border-red-500/30 flex flex-col md:flex-row justify-between items-center">
      <h2 className="text-xl font-medium text-white mb-2 md:mb-0">
        Verification Status
      </h2>
      {paymentData ? (
        <StatusBadge status={paymentData.status} />
      ) : (
        <StatusBadge status="Pending" />
      )}
    </div>
  );
};

export default StatusSection;