
import React from "react";

const Background: React.FC = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-red-600/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      <style>
        {`
        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at top right, rgba(219, 39, 119, 0.1), transparent 40%),
            radial-gradient(circle at bottom left, rgba(124, 58, 237, 0.1), transparent 40%);
          z-index: -1;
          pointer-events: none;
        }
        `}
      </style>
    </>
  );
};

export default Background;
