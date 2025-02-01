import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import axios from "axios";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Themes", path: "/#themes" },
  { name: "Timeline", path: "/#timeline" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  interface User {
    avatar_url: string;
    login: string;
  }

  const [user, setUser] = useState<User | null>(null);

  // Check if the user is authenticated on page load
  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/me", { withCredentials: true })
      .then((response) => {
        setUser(response.data); // Assuming `response.data` contains the user info
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/github"; // GitHub login
  };

  const handleLogout = () => {
    axios
      .get("http://localhost:5000/auth/logout", { withCredentials: true })
      .then(() => {
        setUser(null);
      });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0D1117]/80 backdrop-blur-md" : "bg-transparent"} navbar font-primary`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <span className="bg-gradient-to-r from-[#00FFA3] to-[#00A3FF] font-bold bg-clip-text text-transparent">
              Hack Sphere
            </span>
          </Link>

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
            {user ? (
              <div className="flex items-center space-x-4">
                <img src={user.avatar_url} alt="User Avatar" className="w-8 h-8 rounded-full" />
                <span>{user.login}</span>
                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Logout
                </button>
              </div>
            ) : (
              <button onClick={handleLogin} className="text-white hover:text-[#378f89] transition-colors duration-200 nav-link font-secondary">
                Login
              </button>
            )}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-md text-gray-300 hover:text-[#00FFA3] transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
