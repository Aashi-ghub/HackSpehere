import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import axios from "axios";
import React from "react";
import path from "path";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Themes", path: "/themeslist/all" },
  { name: "Timeline", path: "/#timeline" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  interface User {
    avatar: string;
    username: string;
  }

  const [user, setUser] = useState<User | null>(null);

  // Get API base URL dynamically
  // const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const API_BASE_URL ="https://inceptionx-production.onrender.com"

  // Fetch user data on load
  useEffect(() => {
    axios
      .post(`${API_BASE_URL}/auth/user`, { withCredentials: true })
      .then((response) => {
        console.log("User Data:", response.data); // Debugging
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogin = () => {
    window.location.href = `${API_BASE_URL}/auth/github`; // Redirect to GitHub login
  };
  
  const handleLogout = () => {
    //console.log("loggingOut")
    fetch(`http://localhost:5000/auth/logout`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          setUser(null);
          setDropdownOpen(false); // Close dropdown on logout
            window.location.href = "/";
        } else {
          console.error("Logout failed",response);
        }
      })
      .catch((error) => console.error("Logout error:", error));
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0D1117]/80 backdrop-blur-md" : "bg-transparent"
      } navbar font-primary`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <span className="bg-gradient-to-r from-[#00FFA3] to-[#00A3FF] font-bold bg-clip-text text-transparent">
              InceptionX
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-[#378f89] transition-colors duration-200 nav-link font-secondary"
              >
                {link.name}
              </Link>
            ))}

            {/* User Authentication */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  className="focus:outline-none"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <img
                    src={user.avatar || "https://github.com/identicons/default.png"}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-[#0D1117] shadow-lg rounded-lg p-2 text-white">
                    <p className="px-4 py-2 text-sm">{user.username}</p>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500 hover:text-white rounded"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
            <Link 
              key="Login"
              to="/login"> 
              <button
                className="text-white hover:text-[#378f89] transition-colors duration-200 nav-link font-secondary"
              >
                Login
              </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-[#00FFA3] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
