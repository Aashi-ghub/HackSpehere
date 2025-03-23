import {
  Github,
  Instagram,
  Mail,
  ArrowUp,
  Copyright,
  Linkedin,
} from "lucide-react";
import { Button } from "./ui/button";
import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-16 bg-gradient-to-br from-black/10 via-red-300/20 to-black/10  backdrop-blur-lg border-t border-primary/20">
      <div className="absolute right-4 -top-4">
        <Button
          onClick={scrollToTop}
          variant="outline"
          size="icon"
          className="rounded-full bg-red/80 text-white shadow-lg hover:bg-red"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>

      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#f3eded] to-[#534545]">
              Xception
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Join us in shaping the future of technology through innovation and
              collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#f3eded] to-[#534545]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {["Themes", "Timeline", "Sponsors"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#f3eded] to-[#534545]">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-transparent bg-clip-text bg-gradient-to-br from-[#f3eded] to-[#534545]" />
                <span>Xception.contact@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#f3eded] to-[#534545]">
              Follow Us
            </h3>
            <div className="flex space-x-5">
              {[
                { icon: Github, href: "https://github.com/Xception-hack" },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/techamigosclub.dsw",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/techamigos-cgc-landran-214626284",
                },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-primary/20 pt-6">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Copyright className="h-4 w-4 text-red-500" />
              <p>2025 Xception. All rights reserved.</p>
            </div>
            <div>
              <Button
                variant="link"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
