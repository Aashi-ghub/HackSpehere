"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Search,
  Trophy,
  Zap,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import Navigation from "../Navigation"; // Import your navigation component
import Layout from "../Layout"; // Import your layout component

// Define types for our data
type TeamCategory = "Hackathon" | "Coding" | "Design" | "AI" | "Robotics";

interface TeamEntry {
  id: number;
  rank: number;
  name: string;
  credits: number;
  avatar?: string;
  category: TeamCategory;
  lastActive: string;
}

// Generate sample data
const generateLeaderboardData = (): TeamEntry[] => {
  const categories: TeamCategory[] = [
    "Hackathon",
    "Coding",
    "Design",
    "AI",
    "Robotics",
  ];
  const teamPrefixes = [
    "Cyber",
    "Quantum",
    "Nexus",
    "Pixel",
    "Byte",
    "Neural",
    "Flux",
    "Vector",
    "Synth",
    "Crypto",
  ];
  const teamSuffixes = [
    "Squad",
    "Collective",
    "Hackers",
    "Coders",
    "Wizards",
    "Minds",
    "Pulse",
    "Forge",
    "Nexus",
    "X",
  ];

  return Array.from({ length: 50 }, (_, index) => {
    const prefix =
      teamPrefixes[Math.floor(Math.random() * teamPrefixes.length)];
    const suffix =
      teamSuffixes[Math.floor(Math.random() * teamSuffixes.length)];

    return {
      id: index + 1,
      rank: index + 1,
      name: `${prefix} ${suffix}`,
      credits: Math.floor(Math.random() * 5001),
      category: categories[Math.floor(Math.random() * categories.length)],
      avatar: `/placeholder.svg?height=40&width=40`,
      lastActive: `${Math.floor(Math.random() * 24)}h ago`,
    };
  }).sort((a, b) => b.credits - a.credits);
};

const leaderboardData = generateLeaderboardData();

const XceptionLeaderboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredData, setFilteredData] =
    useState<TeamEntry[]>(leaderboardData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [entriesPerPage] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [highlightedTeam, setHighlightedTeam] = useState<number | null>(null);
  const [glitchEffect, setGlitchEffect] = useState<boolean>(false);

  const particlesRef = useRef<HTMLDivElement>(null);

  // Initialize particles effect
  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;

      const particle = document.createElement("div");
      particle.classList.add("particle");

      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      // Random size
      const size = Math.random() * 3 + 1;

      // Random opacity
      const opacity = Math.random() * 0.5 + 0.2;

      // Random color (red or white)
      const color = Math.random() > 0.7 ? "#ff0033" : "#ffffff";

      // Set styles
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = `${opacity}`;
      particle.style.backgroundColor = color;

      // Add to container
      particlesRef.current.appendChild(particle);

      // Animate and remove
      setTimeout(() => {
        particle.style.transform = `translate(${
          (Math.random() - 0.5) * 100
        }px, ${(Math.random() - 0.5) * 100}px)`;
        particle.style.opacity = "0";

        setTimeout(() => {
          if (particlesRef.current && particlesRef.current.contains(particle)) {
            particlesRef.current.removeChild(particle);
          }
        }, 2000);
      }, 10);
    };

    // Create particles at intervals
    const interval = setInterval(() => {
      for (let i = 0; i < 3; i++) {
        createParticle();
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Trigger glitch effect periodically
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  // Filter and sort data when search query or category changes
  useEffect(() => {
    setIsLoading(true);

    // Simulate network delay
    const timer = setTimeout(() => {
      let filtered = [...leaderboardData];

      // Filter by search query
      if (searchQuery) {
        filtered = filtered.filter((entry) =>
          entry.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      // Update ranks based on the new order
      filtered = filtered.map((entry, index) => ({
        ...entry,
        rank: index + 1,
      }));

      setFilteredData(filtered);
      setIsLoading(false);

      // Reset to first page when filters change
      setCurrentPage(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  // Handle page change
  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);

    // Trigger glitch effect on page change
    setGlitchEffect(true);
    setTimeout(() => setGlitchEffect(false), 200);

    // Scroll to top of the leaderboard
    document
      .getElementById("leaderboard-top")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Get medal for top 3 ranks
  const getMedal = (rank: number) => {
    switch (rank) {
      case 1:
        return (
          <div className="relative">
            <Trophy className="h-7 w-7 text-yellow-400 animate-pulse" />
            <div className="absolute inset-0 h-7 w-7 bg-yellow-400 blur-md opacity-50 animate-pulse"></div>
          </div>
        );
      case 2:
        return (
          <div className="relative">
            <Trophy className="h-6 w-6 text-gray-300" />
            <div className="absolute inset-0 h-6 w-6 bg-gray-300 blur-md opacity-30"></div>
          </div>
        );
      case 3:
        return (
          <div className="relative">
            <Trophy className="h-6 w-6 text-amber-700" />
            <div className="absolute inset-0 h-6 w-6 bg-amber-700 blur-sm opacity-30"></div>
          </div>
        );
      default:
        return null;
    }
  };


  // Get change indicator
  const getChangeIndicator = (change?: number) => {
    if (!change) return null;

    if (change > 0) {
      return <span className="text-green-500 text-xs">↑{change}</span>;
    } else if (change < 0) {
      return <span className="text-red-500 text-xs">↓{Math.abs(change)}</span>;
    }
    return <span className="text-gray-500 text-xs">-</span>;
  };

  return (
    <Layout>
      <Navigation /> 
      <div className="relative flex flex-col items-center p-2 sm:p-4 md:p-20 min-h-screen text-white overflow-hidden">
       

        <div id="leaderboard-top" className="relative w-full max-w-5xl z-10">
          {/* Header */}
          <div
            className={cn(
              "relative flex flex-col items-center justify-center mb-2 mt-10 sm:mt-8 md:mt-2 sm:mb-10 transition-all",
              glitchEffect && "animate-glitch"
            )}
          >
           {/* Main Heading */}
        <h1 className="relative text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-wide flex flex-col items-center text-center">
          <div className="flex items-center justify-center">
            <div className="relative w-16 h-20 sm:w-24 sm:h-24 l:w-24 l:h-32 md:w-32 md:h-44">
              <img
                src="/X[1].webp"
                alt="X Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-transparent translate-x-[-15px] sm:translate-x[-25px] md:translate-x-[-30px] bg-clip-text bg-gradient-to-br from-[#f3eded] to-[#534545]  font-raleway">
              CEPTION
            </span>
          </div>

          {/* Tagline - Fixed Positioning */}
          <span className="text-[#d13131] text-[10px] sm:text-xs md:text-xs ml-24 sm:ml-36  md:ml-32 font-orbitron font-extrabold tracking-[0.2em] mt-[-9px] sm:mt-[-9px] md:mt-[-56px]">
            COMPETE · CONNECT · CONQUER
          </span>
        </h1>
            
          </div>


          <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 sm:mb-6">
          
  <div className="relative flex-1 group">
    <div className="absolute inset-0 bg-red-500 opacity-20 blur-sm rounded-lg group-focus-within:opacity-30 transition-opacity"></div>
    <div className="absolute inset-0 border border-red-500 rounded-lg opacity-50 group-focus-within:opacity-100 transition-opacity"></div>
    
    {/* White Search Icon, properly spaced */}
    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white pointer-events-none z-20" />
    
    <Input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search teams..."
      className="w-full pl-12  rounded-lg bg-black/50 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 border-none relative z-10"
    />
    
    {searchQuery && (
      <button
        onClick={() => setSearchQuery("")}
        className="absolute  top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white z-20"
      >
        <X className="h-4 w-4" />
      </button>
    )}
  </div>
</div>


            {/* Last Updated Section */}
            <div className="flex items-center justify-center mb-5 text-lg font-quicksand text-white">
              <p>LAST UPDATED: {new Date().toLocaleTimeString()}</p>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="relative w-full  rounded-lg overflow-hidden">
            {/* Glowing border */}
            <div className="absolute inset-0 p-px rounded-lg bg-gradient-to-r from-red-500 via-white to-red-500 opacity-50 animate-pulse-slow"></div>

            {/* Content */}
            <div className="relative w-full bg-black/80 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-lg">
              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="relative">
                    <div className="h-16 w-16 rounded-full border-2 border-red-500 border-t-transparent animate-spin"></div>
                    <div className="absolute inset-0 h-16 w-16 rounded-full border-2 border-white border-b-transparent animate-spin animation-delay-500"></div>
                  </div>
                </div>
              ) : currentEntries.length > 0 ? (
                <div className="space-y-3 sm:space-y-4">
                  {/* Table Header */}
                  <div className="hidden md:flex items-center space-x-4 p-3 border-b border-red-900/30 text-white text-lg">
                    <span className="w-16 text-center">RANK</span>
                    <span className="w-12"></span> {/* Avatar space */}
                    <span className="flex-1">TEAM</span>
                    <span className="w-32 text-center">CREDITS</span>
                  </div>

                  {/* Table Rows */}
                  {currentEntries.map((entry, index) => (
                    <div
                      key={entry.id}
                      className={cn(
                        "relative flex flex-col md:flex-row md:items-center md:space-x-4 p-3 sm:p-4 rounded-md transition-all duration-300",
                        entry.id === highlightedTeam
                          ? "bg-red-900/30 border border-red-500"
                          : "bg-black/50 hover:bg-black/70 border border-red-900/20 hover:border-red-500/50",
                        "animate-fadeIn"
                      )}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {/* Rank */}
                      <div className="flex items-center justify-between md:justify-center md:w-16">
                        <span className="flex items-center font-bold text-lg">
                          {entry.rank <= 3 ? (
                            <span className="mr-1">{getMedal(entry.rank)}</span>
                          ) : (
                            <span className="w-6 h-6 flex items-center justify-center text-gray-400 font-mono">
                              {entry.rank}
                            </span>
                          )}
                        </span>
                      </div>

                      {/* Avatar */}
                      <div className="hidden md:block w-12">
                        <div className="relative w-8 h-8">
                          <div className="absolute inset-0 bg-red-500 opacity-30 blur-sm rounded-full"></div>
                          <img
                            src={entry.avatar || "/placeholder.svg"}
                            alt={`${entry.name} avatar`}
                            className="relative z-10 w-8 h-8 rounded-full bg-gray-900 border border-red-500/50"
                          />
                        </div>
                      </div>

                      {/* Team Info (Mobile) */}
                      <div className="flex items-center justify-between mt-2 md:hidden">
                        <div className="flex items-center">
                          <div className="relative w-8 h-8 mr-2">
                            <div className="absolute inset-0 bg-red-500 opacity-30 blur-sm rounded-full"></div>
                            <img
                              src={entry.avatar || "/placeholder.svg"}
                              alt={`${entry.name} avatar`}
                              className="relative z-10 w-8 h-8 rounded-full bg-gray-900 border border-red-500/50"
                            />
                          </div>
                          <span className="font-medium font-mono tracking-wide text-sm sm:text-base">
                            {entry.name}
                          </span>
                        </div>
                      </div>

                      {/* Team Name (Desktop) */}
                      <span className="hidden md:block flex-1 font-medium font-mono tracking-wide">
                        {entry.name}
                      </span>

                      {/* Score Bar */}
                      <div className="mt-3 md:mt-0 md:w-52 flex flex-col">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-400 md:hidden">
                            CREDITS
                          </span>
                          <span className="font-bold text-sm font-mono">
                            {entry.credits.toLocaleString()} / 5000
                          </span>
                        </div>
                        <div className="relative w-full h-2 bg-gray-900 rounded-lg overflow-hidden">
                          {/* Glow effect */}
                          <div className="absolute inset-0 flex">
                            <div
                              className="h-full bg-red-500 opacity-30 blur-sm rounded-lg transition-all duration-500 ease-out"
                              style={{ width: `${(entry.credits / 5000) * 100}%` }}
                            ></div>
                          </div>

                          {/* Actual bar */}
                          <div
                            className="relative z-10 h-full rounded-lg bg-gradient-to-r from-red-700 to-red-500 transition-all duration-500 ease-out"
                            style={{ width: `${(entry.credits / 5000) * 100}%` }}
                          >
                            {/* Animated shine effect */}
                            <div className="absolute inset-0 overflow-hidden">
                              <div className="w-1/4 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                  <Filter className="h-12 w-12 mb-4 opacity-50" />
                  <p>No teams found matching your filters.</p>
                  <Button
                    variant="link"
                    className="text-red-500 mt-2"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}

              {/* Pagination */}
              {filteredData.length > entriesPerPage && (
                <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-2">
                  <div className="text-sm text-gray-400 font-mono order-2 sm:order-1">
                    {indexOfFirstEntry + 1}-
                    {Math.min(indexOfLastEntry, filteredData.length)}/
                    {filteredData.length}
                  </div>
                  <div className="flex items-center space-x-2 order-1 sm:order-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="relative group h-8 w-8 overflow-hidden"
                      onClick={() => changePage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <div className="absolute inset-0 bg-red-500 opacity-20 blur-sm rounded-lg group-hover:opacity-30 transition-opacity"></div>
                      <div className="absolute inset-0 border border-red-500 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      <ChevronLeft className="relative z-10 h-4 w-4" />
                    </Button>

                    <div className="flex items-center space-x-1">
                      {Array.from(
                        {
                          length: Math.min(
                            totalPages <= 3 ? totalPages : 3,
                            totalPages
                          ),
                        },
                        (_, i) => {
                          // Show pages around current page
                          let pageToShow: number;
                          if (totalPages <= 3) {
                            pageToShow = i + 1;
                          } else if (currentPage <= 2) {
                            pageToShow = i + 1;
                          } else if (currentPage >= totalPages - 1) {
                            pageToShow = totalPages - 2 + i;
                          } else {
                            pageToShow = currentPage - 1 + i;
                          }
                         
                          return (
                            <Button
                              key={pageToShow}
                              variant={
                                currentPage === pageToShow
                                  ? "default"
                                  : "outline"
                              }
                              className={cn(
                                "relative group h-8 w-8 p-0 overflow-hidden",
                                currentPage === pageToShow
                                  ? "bg-red-500 hover:bg-red-600 border-none"
                                  : "bg-transparent"
                              )}
                              onClick={() => changePage(pageToShow)}
                            >
                              {currentPage !== pageToShow && (
                                <>
                                  <div className="absolute inset-0 bg-red-500 opacity-20 blur-sm rounded-lg group-hover:opacity-30 transition-opacity"></div>
                                  <div className="absolute inset-0 border border-red-500 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                </>
                              )}
                              <span className="relative z-10 font-mono">
                                {pageToShow}
                              </span>
                            </Button>
                          );
                        }
                      )}

                      {totalPages > 3 && currentPage < totalPages - 1 && (
                        <>
                          <span className="text-gray-500">...</span>
                          <Button
                            variant="outline"
                            className="relative group h-8 w-8 p-0 overflow-hidden"
                            onClick={() => changePage(totalPages)}
                          >
                            <div className="absolute inset-0 bg-red-500 opacity-20 blur-sm rounded-lg group-hover:opacity-30 transition-opacity"></div>
                            <div className="absolute inset-0 border border-red-500 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            <span className="relative z-10 font-mono">
                              {totalPages}
                            </span>
                          </Button>
                        </>
                      )}
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      className="relative group h-8 w-8 overflow-hidden"
                      onClick={() => changePage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      <div className="absolute inset-0 bg-red-500 opacity-20 blur-sm rounded-lg group-hover:opacity-30 transition-opacity"></div>
                      <div className="absolute inset-0 border border-red-500 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      <ChevronRight className="relative z-10 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 sm:mt-6 text-center text-xs text-gray-500">
            <p>XCEPTION • LIVE LEADERBOARD</p>
            <p className="mt-1">
              LAST UPDATED: {new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>
        
      
      </Layout>
      
  );
};


export default XceptionLeaderboard;
