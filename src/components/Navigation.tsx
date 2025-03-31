import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import axios from "axios";
import React from "react";
import path from "path";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Themes", path: "#themes" },
  { name: "Timeline", path: "#timeline" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  interface User {
    avatar: string;
    username: string;
  }

  const [user, setUser] = useState<User | null>(null);

  // Get API base URL dynamically
  //  const API_BASE_URL =  "http://localhost:5000";
  const API_BASE_URL = "https://inceptionx-production.onrender.com";

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/auth/user`, {
        method: "GET",
        withCredentials: true,
      })
      .then((response) => {
        console.log("User Data:", response.data); // Debugging
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setUser(null);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function for smooth scrolling
  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-transparent backdrop-blur-lg"
          : "bg-transparent backdrop-blur-md"
      } navbar font-primary`}
    >
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="bg-gradient-to-r  from-[#e96969] via-[#ead7d7] to-[#8e8686]   font-bold font-orbitron bg-clip-text text-transparent">
              Xception
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.name === "Themes" || link.name === "Timeline" ? (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) =>
                    handleSmoothScroll(e, link.name.toLowerCase())
                  }
                  className="text-white font-quicksand hover:text-[#8f3737] transition-colors duration-200 font-secondary"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() =>
                    link.name === "Home" &&
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-white font-quicksand hover:text-[#8f3737] transition-colors duration-200 font-secondary"
                >
                  {link.name}
                </Link>  
              ) 
            )}
             <Link key="LeaderBoard" to="/leaderBoard">
              <button className="text-white font-quicksand hover:text-[#8f3737] transition-colors duration-200 nav-link font-secondary">
                Leaderboard
              </button>
            </Link>


            {user ? (
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-8 h-8 rounded-full cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                />
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#0D1117]/80 backdrop-blur-xl shadow-lg rounded-lg p-2 text-white flex flex-col space-y-2">
                    <span className="block px-4 py-2 text-sm">
                      {user.username}
                    </span>
                    <button
                      onClick={() => setUser(null)}
                      className="block text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500 hover:text-white rounded"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link key="Login" to="/login">
                <button className="text-white font-quicksand hover:text-[#8f3737] transition-colors duration-200 nav-link font-secondary">
                  Login
                </button>
              </Link>
            )}
             
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-[#00FFA3] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Dropdown */}
            {isOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-12 right-0 w-48 bg-[#0D1117]/80 backdrop-blur-xl shadow-lg rounded-lg p-2 text-white flex flex-col space-y-2"
              > 
                {navLinks.map((link) =>
                  link.name === "Themes" || link.name === "Timeline" ? (
                    <a
                      key={link.name}
                      href={link.path}
                      onClick={(e) =>
                        handleSmoothScroll(e, link.name.toLowerCase())
                      }
                      className="block px-4 py-2 text-sm hover:bg-[#1A1F27] rounded"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => {
                        if (link.name === "Home")
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        setIsOpen(false);
                      }}
                      className="block px-4 py-2 text-sm hover:bg-[#1A1F27] rounded"
                    >
                      {link.name}
                    </Link>
                  )
                )}
              <Link key="LeaderBoard" to="/leaderBoard">
              <button className="block px-4 py-2 text-sm hover:bg-[#1A1F27] rounded">
                LeaderBoard
              </button>
            </Link>
                {user ? (
                  <button
                    onClick={() => setUser(null)}
                    className="block text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500 hover:text-white rounded"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      (window.location.href = `${API_BASE_URL}/auth/google`)
                    }
                    className="block text-left px-4 py-2 text-sm hover:bg-[#1A1F27] rounded"
                  >
                    Login
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
