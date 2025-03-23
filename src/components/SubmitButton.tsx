
import React from "react";

interface SubmitButtonProps {
  isSubmitting: boolean;
  disabled: boolean;
  submitAnimation: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ 
  isSubmitting, 
  disabled, 
  submitAnimation 
}) => {
  // Locally defined button styles
  const buttonStyles = `
    bg-red-600 hover:bg-[#FF0000]/90 text-white px-8 py-3 rounded-md 
    font-medium transition-all duration-300 disabled:opacity-50 
    disabled:cursor-not-allowed
    ${submitAnimation ? "animate-[pulse_1.5s_infinite]" : ""}
  `;

  return (
    <div className="text-center">
      <button
        type="submit"
        disabled={isSubmitting || disabled}
        className={buttonStyles}
      >
        {isSubmitting ? "Processing Payment..." : "Pay & Register"}
      </button>
    </div>
  );
};

export default SubmitButton;