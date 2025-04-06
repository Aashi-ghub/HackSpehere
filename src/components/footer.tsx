import {
  Github,
  Instagram,
  Mail,
  ArrowUp,
  Copyright,
  Linkedin,
  MailIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-16 bg-gradient-to-br from-black/10 via-red-300/20 to-black/10 backdrop-blur-lg border-t border-primary/20">
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

      <div className="container mx-auto px-6 py-4 flex flex-col items-center text-center">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 w-full">
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
                    className="text-muted-foreground hover:text-red-500 transition-colors"
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
              <li className="flex items-center gap-2 text-muted-foreground justify-center">
                <Mail className="h-5 w-5 text-transparent bg-clip-text bg-gradient-to-br from-[#f3eded] to-[#534545]" />
                <span> dsw@cgc.edu.in</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#f3eded] to-[#534545]">
              Follow Us
            </h3>
            <div className="flex space-x-5 justify-center">
              {[
               {
                icon: MailIcon,
                href: "href:mailto:dsw@cgc.edu.in?subject=Enquiry%20about%20Xception",
              },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/dsw.cgc/",
                },
                
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-red-500 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Location Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#f3eded] to-[#534545]">
              Location
            </h3>
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.8120633040335!2d76.66183805524818!3d30.687252236534494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef154b91a85b%3A0x4d8b9df97e986631!2sChandigarh%20Group%20of%20Colleges%20(CGC)%20-%20Landran!5e0!3m2!1sen!2sin!4v1743330209445!5m2!1sen!2sin"
                width="150"
                height="150"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10  pt-2 w-full">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Copyright className="h-4 w-4 text-red-500" />
              <p>2025 Xception. All rights reserved.</p>
            </div>
            <div>
              <Button
                variant="link"
                className="text-sm text-muted-foreground hover:text-red-400 transition-colors"
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
