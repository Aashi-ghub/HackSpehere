
import React, { useState, useEffect } from "react";
import { useNavigate ,useLocation } from "react-router-dom";
import { toast } from "sonner";
import Layout from "./Layout";

const PaymentComponent: React.FC = () => {
  const location =useLocation();
  const {teamDetails}=location.state || {};
  console.log(teamDetails);
  const [transactionId, setTransactionId] = useState<string>("");
  interface TeamData {
    teamName: string;
    members: string[];
  }

  const [teamData, setTeamData] = useState<TeamData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();

  // Keyframes for animations
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
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
  `;

  // Styles using template literals
  const styles = {
    container: `
      max-w-lg mx-auto my-8 px-4 sm:px-6 animate-[fadeIn_0.5s_ease-in-out]
      before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br 
      before:from-rose-900/20 before:via-red-800/10 before:to-pink-900/15 
      before:rounded-xl before:-z-10 before:blur-xl relative
    `,
    card: `
      bg-gradient-to-b from-[#1A1A1A]/90 to-[#1A1A1A]/95
      border border-[#333333]/50 rounded-xl overflow-hidden
      backdrop-blur-sm animate-[slideUp_0.3s_ease-out_forwards]
    `,
    header: `
      px-6 py-4 border-b border-[#333333]/50 bg-[#1A1A1A]/50
    `,
    title: `
      text-xl font-bold text-center text-white
    `,
    content: `
      p-6 space-y-6
    `,
    qrContainer: `
      flex justify-center bg-white rounded-lg w-48 h-48 mx-auto
    `,
    qrImage: `
      w-full h-full object-contain
    `,
    paymentDetails: `
      bg-[#1E1E1E]/50 rounded-lg p-4 border border-[#333333]/30
    `,
    detailsTitle: `
      text-sm font-medium text-gray-400 mb-3
    `,
    detailsContent: `
      text-white text-center
    `,
    upiDetails: `
      flex flex-col space-y-2
    `,
    upiId: `
      py-2 px-4 bg-[#1E1E1E]/80 rounded border border-[#333333]/50 text-center
      select-all focus:outline-none text-white
    `,
    copyButton: `
      text-sm text-gray-400 hover:text-white text-center transition-colors
    `,
    formGroup: `
      space-y-2
    `,
    label: `
      block text-sm font-medium text-gray-400
    `,
    input: `
      w-full bg-[#1E1E1E] border border-[#333333] rounded-md px-4 py-2 
      text-white placeholder-gray-500 outline-none focus:ring-2 
      focus:ring-[#FF0000]/50 focus:border-[#FF0000] transition-all duration-300
    `,
    buttonGroup: `
      flex flex-col sm:flex-row gap-4 mt-8
    `,
    buttonBase: `
      px-6 py-3 rounded-md font-medium transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1A1A1A]
      disabled:opacity-50 disabled:cursor-not-allowed flex-1 text-center
    `,
    backButton: `
      bg-[#1E1E1E] hover:bg-[#2a2a2a] text-white 
      border border-[#333333] focus:ring-[#333333]
    `,
    submitButton: `
     bg-red-600 hover:bg-[#FF0000]/90 text-white px-8 py-3 rounded-md 
    font-medium transition-all duration-300 disabled:opacity-50 
    disabled:cursor-not-allowed
    `,
    buttonContent: `
      relative z-10 flex items-center justify-center gap-2
    `,
    spinner: `
      animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full
    `,
    teamInfo: `
      bg-[#1E1E1E]/30 rounded-lg p-4 border border-[#333333]/20
      text-sm text-gray-400
    `,
    teamName: `
      font-medium text-white
    `,
    errorText: `
      text-red-500 text-sm mt-1
    `,
  };

  useEffect(() => {
    // Retrieve team data from localStorage
    const storedTeamData = localStorage.getItem("teamData");
    if (storedTeamData) {
      setTeamData(JSON.parse(storedTeamData));
    } else {
      // If no team data, redirect to registration
      navigate("/");
      toast.error("Please complete team registration first");
    }
    //  Retrive team data from Database or Backend 
    //  const fetchTeamData =async ()=>{
    //    try{
    //      // Make an API call to fetch team data
    //      const  response =await fetch(
    //       `https://inceptionx-production.onrender.com/team/${teamDetails.teamName}`, // Replace with your backend endpoint
    //       {
    //         method: "GET",
    //         headers: { "Content-Type": "application/json" },
    //         credentials: "include",
    //       }
    //     )
    //       if(response.ok){
    //         const data =await response.json();
    //         setTeamData(data);
    //       } else {
    //          throw new Error("Failed to fetch team data");
    //       }       
    //     } catch (error){
    //        toast.error("unable to fetch team data .Please try again");
    //        navigate("/");
    //     }
    //    };
    //    if (teamDetails?.teamName) {
    //     fetchTeamData();
    //   } else {
    //     toast.error("No team details found. Please register first.");
    //     navigate("/"); // Redirect to registration form if no team details are found
    //   }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!transactionId.trim()) {
      toast.error("Please enter a valid transaction ID");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate payment processing
    setTimeout(async() => {
      // try {
      // Create payment data
      const paymentData = {
        teamName: teamData?.teamName,
        transactionId: transactionId.trim(),
        timestamp: new Date().toISOString(),
        status: "Pending" as const
      };
      
      // Store in localStorage
      localStorage.setItem("teamPayment", JSON.stringify(paymentData));

       // store Payment data in backend 
    //    const response = await fetch(
    //     "https://inceptionx-production.onrender.com/payment/submit", // Replace with your backend endpoint
    //     {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       credentials: "include",
    //       body: JSON.stringify(paymentData), // Send payment data as JSON
    //     }
    //   );
  
    //   if (response.ok) {
    //     toast.success("Payment details submitted successfully");
    //     navigate("/dashboard",{state:{teamDetails:teamDetails}}); // Navigate to the dashboard after successful submission
    //   } else {
    //     throw new Error("Failed to submit payment details");
    //   }
    // } catch (error: any) {
    //   toast.error(error.message || "Payment submission failed. Please try again.");
    // } finally {
    //   setIsSubmitting(false);
    // }
    toast.success("Payment details submitted successfully");
    navigate("/dashboard");
    setIsSubmitting(false);
    }, 1500);
  };
  
  const handleCopyUPI = () => {
    navigator.clipboard.writeText("hackathon@upi");
    toast.success("UPI ID copied to clipboard");
  };

  return (
    <>
    <Layout>
      <style>{keyframes}</style>
      
      <div className={styles.container}>
        <div className={styles.card}>
          <header className={styles.header}>
            <h1 className={styles.title}>Complete Payment</h1>
          </header>
          
          <div className={styles.content}>
            {teamData && (
              <div className={styles.teamInfo}>
                Team: <span className={styles.teamName}>{teamData.teamName}</span>
                <div className="mt-1">
                  {teamData.members.length} members | ₹3997 registration fee
                </div>
              </div>
            )}
            
            <div className={styles.qrContainer}>
  <div className={styles.qrImage}>
    <img 
      src="/qr.png" 
      alt="Scan to Pay ₹3997" 
      style={{ width: '200px', height: '200px', objectFit: 'contain', borderRadius: '12px' }} 
    />
  </div>
</div>
            
            <div className={styles.paymentDetails}>
              <h2 className={styles.detailsTitle}>Payment Details</h2>
              <div className={styles.upiDetails}>
                <div className={styles.upiId}>xception@upi</div>
                <button 
                  type="button" 
                  className={styles.copyButton}
                  onClick={handleCopyUPI}
                >
                  Click to copy UPI ID
                </button>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="transactionId" className={styles.label}>
                  UPI Transaction ID*
                </label>
                <input
                  id="transactionId"
                  type="text"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  placeholder="Enter your UPI transaction ID"
                  className={styles.input}
                  required
                />
              </div>
              
              <div className={styles.buttonGroup}>
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className={`${styles.buttonBase} ${styles.backButton}`}
                  disabled={isSubmitting}
                >
                  Back to Form
                </button>
                
                <button
                  type="submit"
                  className={`${styles.buttonBase} ${styles.submitButton}`}
                  disabled={isSubmitting}
                >
                  <span className={styles.buttonContent}>
                    {isSubmitting ? (
                      <>
                        <span className={styles.spinner} />
                        Processing...
                      </>
                    ) : (
                      "Submit Payment"
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </Layout>
    </>
    
  );
};

export default PaymentComponent;
