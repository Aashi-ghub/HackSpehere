import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormValues } from "./types";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

interface FinalDetailsFormProps {
  form: UseFormReturn<FormValues>;
}

export const FinalDetailsForm: React.FC<FinalDetailsFormProps> = ({ form }) => {
  const sources = ["Social Media", "University", "Friends", "Tech Community", "Other"];

  return (
    <div className="space-y-10">
      {/* How did you hear about us? */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        >
      <FormField
        control={form.control}
        name="source"
        render={({ field }) => (
          <FormItem className="mt-[20px]">
            <FormLabel className="text-[#ececed] text-lg">How did you hear about us?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="bg-black/50 border-teal-500/20">
                  <SelectValue placeholder="Select source" className="placeholder-shown:text-[#1c2426]" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {sources.map((source) => (
                  <SelectItem key={source} value={source}>
                    {source}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

     </motion.div>
    </div>
  );
};
