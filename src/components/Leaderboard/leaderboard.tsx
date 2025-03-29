"use client"

import { useState, useEffect } from "react"
import { Search, ArrowUpDown, Trophy, Filter, ChevronLeft, ChevronRight, Medal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Define types for our data
type TeamCategory = "Professional" | "Amateur" | "College" | "High School"

interface LeaderboardEntry {
  id: number
  rank: number
  name: string
  score: number
  avatar?: string
  category: TeamCategory
  change?: number // Position change since last update
}

// Generate more realistic sample data
const generateLeaderboardData = (): LeaderboardEntry[] => {
  const categories: TeamCategory[] = ["Professional", "Amateur", "College", "High School"]

  return Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    rank: index + 1,
    name: `Team ${index + 1}`,
    score: Math.floor(Math.random() * 100) + 1,
    category: categories[Math.floor(Math.random() * categories.length)],
    avatar: `/placeholder.svg?height=40&width=40`,
    change: Math.floor(Math.random() * 11) - 5, // Random change between -5 and +5
  })).sort((a, b) => b.score - a.score)
}

const leaderboardData = generateLeaderboardData()

const EnhancedLeaderboard = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredData, setFilteredData] = useState<LeaderboardEntry[]>(leaderboardData)
  const [sortConfig, setSortConfig] = useState<{ key: keyof LeaderboardEntry; direction: "asc" | "desc" }>({
    key: "score",
    direction: "desc",
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [entriesPerPage, setEntriesPerPage] = useState(10)
  const [isLoading, setIsLoading] = useState(false)
  const [highlightedTeam, setHighlightedTeam] = useState<number | null>(null)

  // Filter and sort data when search query, sort config, or category changes
  useEffect(() => {
    setIsLoading(true)

    // Simulate network delay
    const timer = setTimeout(() => {
      let filtered = [...leaderboardData]

      // Filter by search query
      if (searchQuery) {
        filtered = filtered.filter((entry) => entry.name.toLowerCase().includes(searchQuery.toLowerCase()))
      }

      // Filter by category
      if (selectedCategory !== "all") {
        filtered = filtered.filter((entry) => entry.category === selectedCategory)
      }

      // Sort data
      filtered.sort((a, b) => {
        const aValue = a[sortConfig.key]
        const bValue = b[sortConfig.key]

        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue
        }

        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortConfig.direction === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
        }

        return 0
      })

      // Update ranks based on the new order
      filtered = filtered.map((entry, index) => ({
        ...entry,
        rank: index + 1,
      }))

      setFilteredData(filtered)
      setIsLoading(false)

      // Reset to first page when filters change
      setCurrentPage(1)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery, sortConfig, selectedCategory])

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / entriesPerPage)
  const indexOfLastEntry = currentPage * entriesPerPage
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage
  const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry)

  // Handle sorting
  const requestSort = (key: keyof LeaderboardEntry) => {
    let direction: "asc" | "desc" = "desc"
    if (sortConfig.key === key && sortConfig.direction === "desc") {
      direction = "asc"
    }
    setSortConfig({ key, direction })
  }

  // Get sort direction icon
  const getSortDirectionIcon = (key: keyof LeaderboardEntry) => {
    if (sortConfig.key !== key) return null
    return sortConfig.direction === "asc" ? "↑" : "↓"
  }

  // Handle page change
  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)

    // Scroll to top of the leaderboard
    document.getElementById("leaderboard-top")?.scrollIntoView({ behavior: "smooth" })
  }

  // Get medal for top 3 ranks
  const getMedal = (rank: number) => {
    switch (rank) {
      case 1:
        return <Medal className="h-6 w-6 text-yellow-400" />
      case 2:
        return <Medal className="h-6 w-6 text-gray-300" />
      case 3:
        return <Medal className="h-6 w-6 text-amber-700" />
      default:
        return null
    }
  }

  // Get change indicator
  const getChangeIndicator = (change?: number) => {
    if (!change) return null

    if (change > 0) {
      return <span className="text-green-500 text-xs">↑{change}</span>
    } else if (change < 0) {
      return <span className="text-red-500 text-xs">↓{Math.abs(change)}</span>
    }
    return <span className="text-gray-500 text-xs">-</span>
  }

  return (
    <div className="flex flex-col items-center p-4 md:p-6 bg-gradient-to-br from-[#1f1f1f] via-[#2a2a2a] to-[#0f0f0f] min-h-screen text-white">
      <div id="leaderboard-top" className="w-full max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0 text-red-500 tracking-wide flex items-center">
            <Trophy className="mr-2 h-8 w-8" /> Leaderboard
          </h1>

          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <Button
              variant="outline"
              className="bg-red-500 hover:bg-red-600 text-white border-none"
              onClick={() => setHighlightedTeam(Math.floor(Math.random() * 50) + 1)}
            >
              Find My Team
            </Button>

            <Select
              value={entriesPerPage.toString()}
              onValueChange={(value) => setEntriesPerPage(Number.parseInt(value))}
            >
              <SelectTrigger className="w-[120px] bg-gray-800 border-gray-700">
                <SelectValue placeholder="Show" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="5">5 per page</SelectItem>
                <SelectItem value="10">10 per page</SelectItem>
                <SelectItem value="20">20 per page</SelectItem>
                <SelectItem value="50">50 per page</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="w-full flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by team name..."
              className="w-full pl-10 p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 border-gray-700"
            />
          </div>

          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[160px] bg-gray-800 border-gray-700">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Professional">Professional</SelectItem>
                  <SelectItem value="Amateur">Amateur</SelectItem>
                  <SelectItem value="College">College</SelectItem>
                  <SelectItem value="High School">High School</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="bg-gray-800 border-gray-700 hover:bg-gray-700"
              onClick={() => requestSort("score")}
              title="Sort by score"
            >
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="w-full bg-[#1a1a1a] p-4 md:p-6 rounded-lg shadow-lg">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
            </div>
          ) : currentEntries.length > 0 ? (
            <div className="space-y-3">
              {/* Table Header */}
              <div className="hidden md:flex items-center space-x-4 p-3 border-b border-gray-800 text-gray-400 text-sm">
                <span className="w-16 text-center">Rank</span>
                <span className="w-12"></span> {/* Avatar space */}
                <span className="flex-1">Team</span>
                <span className="w-24 text-center">Category</span>
                <span className="w-32 text-center">
                  <button onClick={() => requestSort("score")} className="flex items-center justify-center w-full">
                    Score {getSortDirectionIcon("score")}
                  </button>
                </span>
                <span className="w-16 text-center">Change</span>
              </div>

              {/* Table Rows */}
              {currentEntries.map((entry, index) => (
                <div
                  key={entry.id}
                  className={cn(
                    "flex flex-col md:flex-row md:items-center md:space-x-4 p-3 rounded-md transition-all duration-300",
                    entry.id === highlightedTeam
                      ? "bg-red-900/30 border border-red-500"
                      : "bg-[#2a2a2a] hover:bg-[#333333]",
                    "animate-fadeIn",
                  )}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Rank */}
                  <div className="flex items-center justify-between md:justify-center md:w-16">
                    <span className="flex items-center font-bold text-lg">
                      {entry.rank <= 3 ? (
                        <span className="mr-1">{getMedal(entry.rank)}</span>
                      ) : (
                        <span className="w-6 h-6 flex items-center justify-center text-gray-400">{entry.rank}</span>
                      )}
                    </span>
                    <span className="md:hidden text-sm text-gray-400">{getChangeIndicator(entry.change)}</span>
                  </div>

                  {/* Avatar */}
                  <div className="hidden md:block w-12">
                    <img
                      src={entry.avatar || "/placeholder.svg"}
                      alt={`${entry.name} avatar`}
                      className="w-8 h-8 rounded-full bg-gray-700"
                    />
                  </div>

                  {/* Team Info (Mobile) */}
                  <div className="flex items-center justify-between mt-2 md:hidden">
                    <div className="flex items-center">
                      <img
                        src={entry.avatar || "/placeholder.svg"}
                        alt={`${entry.name} avatar`}
                        className="w-8 h-8 rounded-full bg-gray-700 mr-2"
                      />
                      <span className="font-medium">{entry.name}</span>
                    </div>
                    <Badge variant="outline" className="bg-gray-800 text-xs">
                      {entry.category}
                    </Badge>
                  </div>

                  {/* Team Name (Desktop) */}
                  <span className="hidden md:block flex-1 font-medium">{entry.name}</span>

                  {/* Category (Desktop) */}
                  <span className="hidden md:block w-24 text-center">
                    <Badge variant="outline" className="bg-gray-800">
                      {entry.category}
                    </Badge>
                  </span>

                  {/* Score Bar */}
                  <div className="mt-2 md:mt-0 md:w-32 flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-400 md:hidden">Score</span>
                      <span className="font-bold text-sm">{entry.score}</span>
                    </div>
                    <div className="w-full bg-gray-800 h-2 rounded-lg relative overflow-hidden">
                      <div
                        className="h-2 rounded-lg bg-gradient-to-r from-red-600 to-red-400 transition-all duration-500 ease-out"
                        style={{ width: `${entry.score}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Change (Desktop) */}
                  <span className="hidden md:flex md:w-16 md:justify-center items-center">
                    {getChangeIndicator(entry.change)}
                  </span>
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
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
              >
                Clear filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {filteredData.length > entriesPerPage && (
            <div className="flex justify-between items-center mt-6">
              <div className="text-sm text-gray-400">
                Showing {indexOfFirstEntry + 1}-{Math.min(indexOfLastEntry, filteredData.length)} of{" "}
                {filteredData.length} teams
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-gray-800 border-gray-700 hover:bg-gray-700 h-8 w-8"
                  onClick={() => changePage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex items-center space-x-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    // Show pages around current page
                    let pageToShow
                    if (totalPages <= 5) {
                      pageToShow = i + 1
                    } else if (currentPage <= 3) {
                      pageToShow = i + 1
                    } else if (currentPage >= totalPages - 2) {
                      pageToShow = totalPages - 4 + i
                    } else {
                      pageToShow = currentPage - 2 + i
                    }

                    return (
                      <Button
                        key={pageToShow}
                        variant={currentPage === pageToShow ? "default" : "outline"}
                        className={cn(
                          "h-8 w-8 p-0",
                          currentPage === pageToShow
                            ? "bg-red-500 hover:bg-red-600"
                            : "bg-gray-800 border-gray-700 hover:bg-gray-700",
                        )}
                        onClick={() => changePage(pageToShow)}
                      >
                        {pageToShow}
                      </Button>
                    )
                  })}

                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <>
                      <span className="text-gray-500">...</span>
                      <Button
                        variant="outline"
                        className="h-8 w-8 p-0 bg-gray-800 border-gray-700 hover:bg-gray-700"
                        onClick={() => changePage(totalPages)}
                      >
                        {totalPages}
                      </Button>
                    </>
                  )}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="bg-gray-800 border-gray-700 hover:bg-gray-700 h-8 w-8"
                  onClick={() => changePage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EnhancedLeaderboard

