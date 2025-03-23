
import React from "react";
import { UseFormRegister, FieldErrors, Control } from "react-hook-form";
import { FormData } from "./TeamMembersSection";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { CreditCard } from "lucide-react";

interface PaymentSectionProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  control: Control<FormData>;
  customStyles?: {
    cardStyle: string;
  };
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ register, errors, customStyles }) => {
  // Local styling definitions
  const localStyles = {
    paymentCard: `
      rounded-md border-[1px] border-white/50 p-4 bg-[#1E1E1E]/60 
      hover:bg-[#1E1E1E]/80 transition-colors
    `,
    paymentText: `
      font-medium text-white
    `,
    paymentSubtext: `
      text-sm text-gray-400
    `,
    paymentAmount: `
      text-xl font-bold text-[#FF0000]
    `,
    errorText: `
      text-[#FF0000] text-sm mt-2 animate-[fadeIn_0.3s_ease-in-out]
    `
  };

  return (
    <Card className={customStyles?.cardStyle || "bg-[#1A1A1A] border-[#333333] mb-6 rounded-lg"}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-white">Payment Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={localStyles.paymentCard}>
          <div className="flex items-center gap-3">
            <CreditCard className="h-6 w-6 text-[#FF0000]" />
            <div className="flex-1">
              <p className={localStyles.paymentText}>Registration Fee</p>
              <p className={localStyles.paymentSubtext}>Registration will only be confirmed after payment</p>
            </div>
            <div className={localStyles.paymentAmount}>Rs.1000</div>
          </div>
        </div>

        {errors.paymentMethod && (
          <p className={localStyles.errorText}>
            {errors.paymentMethod.message}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentSection;
