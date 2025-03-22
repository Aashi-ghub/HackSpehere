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
  const themes = ["AI/ML", "Blockchain", "Healthcare", "Education", "Sustainability"];
  const sources = ["Social Media", "University", "Friends", "Tech Community", "Other"];

  return (
    <div className="space-y-10">
      {/* Theme Selection */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}>
      {/* <FormField
        control={form.control}
        name="theme"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#ececed] text-lg ">Theme</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <div className="relative">
                <SelectTrigger className="bg-black/50 border-teal-500/20">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                </div>
              </FormControl>
              <SelectContent>
                {themes.map((theme) => (
                  <SelectItem key={theme} value={theme}>
                    {theme}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      /> */}

      {/* Participant Type */}
      <FormField
        control={form.control}
        name="participantType"
        render={({ field }) => (
          <FormItem className="mt-[15px]">
            <FormLabel className="text-[#ececed] text-lg">Participant Type</FormLabel>
            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
              <FormItem className="flex items-center space-x-3">
                <FormControl>
                  <RadioGroupItem value="student" />
                </FormControl>
                <FormLabel className="font-normal text-gray-300">Student</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3">
                <FormControl>
                  <RadioGroupItem value="professional" />
                </FormControl>
                <FormLabel className="font-normal text-gray-300">Working Professional</FormLabel>
              </FormItem>
            </RadioGroup>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* How did you hear about us? */}
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
