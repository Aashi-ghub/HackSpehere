import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StatusSection from "./Dashboard/StatusSection";
import TeamMembersSection from "./Dashboard/TeamMembersSection";
import { TeamData, PaymentData } from "./typesDashboard";

// Main Dashboard Component
const TeamDashboardComponent: React.FC = () => {
  const [teamData, setTeamData] = useState<TeamData | null>(null);
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from localStorage
    const fetchData = () => {
      setLoading(true);
      
      try {
        // Get team data
        const storedTeamData = localStorage.getItem("teamData");
        if (storedTeamData) {
          setTeamData(JSON.parse(storedTeamData));
        }
        
        // Get payment data
        const storedPaymentData = localStorage.getItem("teamPayment");
        if (storedPaymentData) {
          setPaymentData(JSON.parse(storedPaymentData));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const handleBackToHome = () => {
    navigate("/register");
  };

  // All styles defined with template literals
  const styles = {
    mainBackground: `
      min-h-screen w-full bg-gradient-to-br from-black to-red-300 text-white
      py-10 px-4 md:px-8
    `,
    pageContainer: `
      max-w-6xl mx-auto p-6 animate-[fadeIn_0.5s_ease-in-out]
    `,
    header: `
      mb-6 text-center
    `,
    pageTitle: `
      text-3xl font-bold text-white flex items-center justify-center gap-2
    `,
    icon: `
      inline-block text-red-500
    `,
    subtitle: `
      text-slate-300 mt-2
    `,
    loadingContainer: `
      min-h-[60vh] flex flex-col items-center justify-center
    `,
    loadingText: `
      text-xl text-gray-200 mt-4
    `,
    noDataMessage: `
      text-center text-gray-200 my-8 min-h-[40vh] flex flex-col items-center justify-center
    `,
    backButton: `
      mt-8 bg-white hover:bg-gray-100 text-red-700 px-6 py-2
      rounded-md font-medium transition-all duration-300 border border-red-200
    `,
  };

  if (loading) {
    return (
      <div className={styles.mainBackground}>
        <div className={styles.pageContainer}>
          <div className={styles.loadingContainer}>
            <p className={styles.loadingText}>Loading team dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!teamData) {
    return (
      <div className={styles.mainBackground}>
        <div className={styles.pageContainer}>
          <div className={styles.noDataMessage}>
            <p className="text-xl mb-4">No team data available</p>
            <p className="text-gray-300 mb-6">Please complete team registration first</p>
            <button
              onClick={handleBackToHome}
              className={styles.backButton}
            >
              Go to Registration
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mainBackground}>
      <div className={styles.pageContainer}>
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>
            <span role="img" aria-label="Team" className={styles.icon}>👥</span> Team Dashboard
          </h1>
          <p className={styles.subtitle}>
            Manage your team and track your participation status
          </p>
        </div>
        
        {/* Status Section at the top */}
        <StatusSection paymentData={paymentData} />
        
        {/* Team Members Section */}
        <TeamMembersSection members={teamData.members} />
        
        <div className="flex justify-center">
          <button
            onClick={handleBackToHome}
            className={styles.backButton}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamDashboardComponent;
