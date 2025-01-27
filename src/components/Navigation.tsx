import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../index.css"; // Ensure this path is correct

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Themes", path: "/#themes" },
  { name: "Register", path: "/register" },
  { name: "Timeline", path: "/#timeline" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0D1117]/80 backdrop-blur-md" : "bg-transparent"
      } navbar font-primary`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
          >
            
            <span className="bg-gradient-to-r from-[#00FFA3] to-[#00A3FF]  font-bold bg-clip-text text-transparent">
              {" "}
              Hack Sphere
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => {
                  if (link.path.startsWith("/#")) {
                    e.preventDefault();
                    const targetId = link.path.split("#")[1];
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                className="text-white hover:text-[#378f89] transition-colors duration-200 nav-link font-secondary"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-[#00FFA3] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0D1117]/90 backdrop-blur-md rounded-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => {
                    if (link.path.startsWith("/#")) {
                      e.preventDefault();
                      const targetId = link.path.split("#")[1];
                      const targetElement = document.getElementById(targetId);
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth" });
                      }
                      setIsOpen(false);
                    }
                  }}
                  className="block px-3 py-2 rounded-md text-gray-300 hover:text-[#00FFA3] transition-colors duration-200 nav-link font-secondary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
