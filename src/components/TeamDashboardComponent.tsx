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
      {/*       
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
          </div> */}

      {/* Status Section at the top */}
      {/* <StatusSection paymentData={paymentData} /> */}

      {/* Team Members Section */}
      {/* <TeamMembersSection members={teamData.members} /> */}

      {/* <div className="flex justify-center">
            <button onClick={handleBackToHome} className={styles.backButton}>
              Back to Home
            </button>
          </div>
        </div>
       */}
      <div className="min-h-screen p-8 pt-4">
        <div className="flex  items-center justify-center space-x-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h1 className="text-4xl font-bold text-red-600 font-orbitron">Team Dashboard</h1>
        </div>
        <div className=" mt-10 bg-red-900/30 backdrop-blur-md  rounded-2xl p-6 shadow-lg">

          <div className="text-white/90 text-2xl font-semibold mb-6 flex items-center">
            <span className="mr-2">Team Name </span>
            <span className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              {teamData.teamName}
            </span>
          </div>
          <div className="space-y-6 mb-8">
            <h3 className="text-lg font-medium text-white/90"> 👥Team Members</h3>

            {/* Team Members List */}
            <div className=" grid grid-cols-2 mid:grid-cols-1 gap-4">
              {teamData.members.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-black/80 backdrop-blur-md rounded-xl hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-white/80 text-lg">
                        {member.fullName[0].toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-medium">{member.fullName}</span>
                        {member.isLeader && (
                          <span className="px-2  bg-green-500/20 text-green-300 text-xs rounded-full">
                            Leader
                          </span>
                        )}
                      </div>
                      <p className="text-white/60 text-sm">{member.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Verification Status */}
          <h2 className="text-xl font-semibold text-white mb-6">🛂 Verification Status</h2>
          <div className="mt-8 p-6 bg-white/10 rounded-xl shadow-lg flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 flex items-center justify-center bg-white/20 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Pending Verification</h3>
                <p className="text-white/70 text-sm">
                  Your team registration is under review. Please wait for confirmation.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white/80 text-sm">Status:</span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                Pending
              </span>
            </div>
          </div>
          
    <h2 className="text-xl font-bold text-white mt-10 mb-4"> 📁Event Resources</h2>
    <div className="space-y-4">
      {/* Brochure */}
      <div className="flex items-center justify-between bg-white/10 p-4 rounded-lg backdrop-blur-md">
        <span className="text-white font-medium">Event Brochure</span>
        <a
          href="/path-to-brochure.pdf" // Replace with the actual path to the brochure
          download
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all"
        >
          View
        </a>
      </div>

      {/* Event Rule Book */}
      <div className="flex  items-center justify-between bg-white/10 p-4 rounded-lg backdrop-blur-md">
        <span className="text-white font-medium">Event Rule Book</span>
        <a
          href="/path-to-rulebook.pdf" // Replace with the actual path to the rule book
          download
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all"
        >
          View
        </a>
      </div>
    </div>
          
          </div>
          <p className="text-white/60 text-sm mt-6 text-center">
           Manage your team and track your participation status
          </p>
      </div>
    </Layout>
  );
};

export default TeamDashboardComponent;
