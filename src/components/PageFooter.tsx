
import React from "react";

const PageFooter: React.FC = () => {
  return (
    <footer className="mt-10 text-center text-xception-white opacity-60 text-white text-sm animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <p>© {new Date().getFullYear()} Xception. All rights reserved.</p>
      <p className="mt-2 text-xs">
        By registering, you agree to the event's terms and conditions.
      </p>
    </footer>
  );
};

export default PageFooter;
