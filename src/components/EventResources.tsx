import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NotebookPen } from "lucide-react";

export default function EventResources() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-10">
     <h2 className="text-4xl font-bold text-white font-orbitron mb-14 mt-6 flex justify-center items-center gap-2">
        <NotebookPen className="text-red-400 " /> Event Resources
      </h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button 
          asChild 
          className="w-full py-4 text-base bg-red-700 hover:bg-red-500 text-white rounded-full shadow-lg"
        >
          <a href="https://drive.google.com/drive/folders/1T2OlbekYIfCwcmU3_XH2zCEKAZmBn8M7?usp=sharing" target="_blank" rel="noopener noreferrer">
            View Event Gallery
          </a>
        </Button>

        <Button 
          asChild 
          className="w-full py-4 text-base bg-red-700 hover:bg-red-500 text-white rounded-full shadow-lg"
        >
          <a href="/path/to/event-brochure.pdf" download>
            Download Event Brochure
          </a>
        </Button>

        <Button 
          asChild 
          className="w-full py-4 text-base bg-red-700 hover:bg-red-500 text-white rounded-full shadow-lg"
        >
          <a href="https://drive.google.com" download>
           Download Event Resources
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
