import React from "react";

interface StatusBadgeProps {
  status: "Pending" | "Confirmed";
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const styles = {
    badge: `
      inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
      ${status === "Confirmed" 
        ? "bg-green-100 text-green-600 border border-green-200" 
        : "bg-yellow-100 text-yellow-600 border border-yellow-200"}
    `,
    container: `flex items-center gap-2`,
    dot: `
      w-2 h-2 rounded-full 
      ${status === "Confirmed" ? "bg-green-500" : "bg-yellow-500"}
      animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]
    `
  };

  return (
    <span className={styles.container}>
      <span className={styles.dot}></span>
      <span className={styles.badge}>{status}</span>
    </span>
  );
};

export default StatusBadge;
