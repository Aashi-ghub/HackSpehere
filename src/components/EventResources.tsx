import { motion } from "framer-motion";
import { NotebookPen } from "lucide-react";

export default function EventResources() {
  const buttons = [
    {
      label: "View Event Gallery",
      href: "https://drive.google.com/drive/folders/1T2OlbekYIfCwcmU3_XH2zCEKAZmBn8M7?usp=sharing",
    },
    {
      label: "View Event Brochure",
      href: "/Xception_Detailed_Brochure.pdf",
    },
    {
      label: "View Event Resources",
      href: "https://drive.google.com",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center text-center py-10">
      <h2 className="text-4xl font-bold text-white font-orbitron mb-14 mt-6 flex justify-center items-center gap-2">
        <NotebookPen className="text-red-400" /> Event Resources
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
        {buttons.map((btn, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -6 }}
            whileTap={{ scale: 0.97, y: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <a
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full p-6 text-base bg-gradient-to-r from-[#563737] to-[#101010] hover:brightness-200 text-white rounded-full shadow-lg font-semibold tracking-wide text-center transition duration-300"
            >
              {btn.label}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
