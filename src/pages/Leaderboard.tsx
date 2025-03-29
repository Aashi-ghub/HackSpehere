
import React ,{useState} from "react";
import {motion} from "framer-motion";

const leaderboardData = Array.from({ length: 50 }, (_, index) => ({
  rank:index+1,
  name: `Team ${index + 1}`,
  image: `https://picsum.photos/seed/team${index + 1}/50`, 
  score: Math.floor(Math.random() * 100) + 1, // Random score between 1 and 100
})).sort((a,b)=>(b.score-a.score)); // Sort by score in descending order

const Leaderboard = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredData, setFilteredData] = useState(leaderboardData); // State for filtered leaderboard data

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter leaderboard data based on the search query
    const filtered = leaderboardData.filter((entry) =>
      entry.name.toLowerCase().trim().includes(query)
    );
    setFilteredData(filtered);
  };
  const getEmojiForRank = (index: number) => {
    if (index === 1) return "🥇"; // Gold medal for 1st place
    if (index === 2) return "🥈"; // Silver medal for 2nd place
    if (index === 3) return "🥉"; // Bronze medal for 3rd place
    return ""; // No emoji for other ranks
  };
  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-br from-[#1f1f1f] via-[#2a2a2a] to-[#0f0f0f] min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6 text-red-500 tracking-wide animate-pulse">🏆 Leaderboard</h1>
        {/* Search Input */}
        <div className="w-full max-w-4xl mb-6">
        <input   
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by team name..."
          className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className="w-full max-w-4xl bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
        <div className="space-y-4">
          {filteredData.length >0 ? (
          filteredData.map((entry,index) => (  
            <div
              key={index}
              className="flex h-15 items-center space-x-4 p-3 bg-[#2a2a2a] rounded-md hover:bg-[#333333] transition-all duration-300 animate-fade-in"
            >
              {/* Rank */}
              <span className="w-10 text-center font-bold text-red-500 text-lg">{index+1}</span>
               {/* Team Image and Name */}
               <div className="flex flex-col items-center w-32">
                  <img
                    src={entry.image}
                    // alt={entry.name}
                    className="w-12 h-12 rounded-full object-cover mb-1"
                  />
                  <span className="text-sm font-medium text-white">{entry.name}</span>
                </div>
              {/* Name */}
              {/* <span className="w-32 font-medium text-sm text-white">{entry.name}</span> */}
              {/* Bar */}
              <div className="flex-1 bg-gray-800 h-10 rounded-sm relative overflow-hidden">
                < motion.div
                  className="h-10  bg-gradient-to-r from-red-500 rounded-r-sm to-red-300"
                  style={{ width: `${entry.score}%` }}
                  initial={{width:"0%"}}
                  animate={{width:`${entry.score}%`}}
                  transition={{duration:0.8}}
            
                ></motion.div>
              </div>
              {/* Score */}
              <span className="w-12 text-right font-bold text-sm text-white">{getEmojiForRank(index+1)} {entry.score} </span>
            </div>
          ))
         ) : (
            <p className="text-center text-gray-400">No teams found.</p>
          )}
        </div>
      </div>

    </div> )
};

export default Leaderboard;
