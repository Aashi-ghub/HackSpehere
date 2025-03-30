import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import StatusSection from "./Dashboard/StatusSection";
import TeamMembersSection from "./Dashboard/TeamMembersSection";
import { TeamData, PaymentData } from "./typesDashboard";
import Layout from "./Layout";
import Navigation from "./Navigation";

// Main Dashboard Component
const TeamDashboardComponent: React.FC = () => {
  const location = useLocation();
  const { teamDetails } = location.state || {};
  console.log(teamDetails);
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
        } else if (teamDetails) {
          setTeamData(teamDetails);
        } else {
          console.error(
            "No team data found in localStorage or passed as props."
          );
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
    navigate("/");
  };
  const handleBackToRegister = () => {
    navigate("/register");
  };

  // All styles defined with template literals
  const styles = {
    mainBackground: `
      min-h-screen w-full bg-gradient-to-br from-black to-red-700 text-white
      py-10 px-4 md:px-8
    `,
    pageContainer: `
      max-w-6xl mx-auto animate-[fadeIn_0.5s_ease-in-out]
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
      <Layout>
        <div className={styles.mainBackground}>
          <div className={styles.pageContainer}>
            <div className={styles.loadingContainer}>
              <p className={styles.loadingText}>Loading team dashboard...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!teamData) {
    return (
      <Layout>
        <div className={styles.mainBackground}>
          <div className={styles.pageContainer}>
            <div className={styles.noDataMessage}>
              <p className="text-xl mb-4">No team data available</p>
              <p className="text-gray-300 mb-6">
                Please complete team registration first
              </p>
              <button onClick={handleBackToRegister} className={styles.backButton}>
                Go to Registration
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Navigation />
      <div className="relative flex flex-col items-center sm:p-4 md:p-14  text-white overflow-hidden"></div>
      
        <div className={styles.pageContainer}>
          <div className={styles.header}>
            <h1 className={styles.pageTitle}>
              <span role="img" aria-label="Team" className={styles.icon}>
                👥
              </span>{" "}
              Team Dashboard
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
            <button onClick={handleBackToHome} className={styles.backButton}>
              Back to Home
            </button>
          </div>
        </div>
      
    </Layout>
  );
};

export default TeamDashboardComponent;
