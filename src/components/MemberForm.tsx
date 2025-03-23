import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Github } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./types";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";

interface MemberFormProps {
  form: UseFormReturn<FormValues>;
  index: number;
  firstMemberCollege: string;
}

export const MemberForm = ({ form, index, firstMemberCollege }: MemberFormProps) => {
  return (
    <div className="p-6 bg-black/30 border border-white rounded-lg mx-5 space-y-4">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-[#ececed] mb-2">
          Team Member {index + 1}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name={`members.${index}.fullName`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#ececed]">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter full name"
                    {...field}
                    className="bg-black/50 focus:border-2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`members.${index}.email`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#ececed]">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter email"
                    {...field}
                    className="bg-black/50 border-teal-500/20 focus:border-2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`members.${index}.phone`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#ececed]">Phone Number</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Enter phone number"
                    {...field}
                    className="bg-black/50 border-teal-500/20 focus:border-2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`members.${index}.socialLink`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#ececed]">GitHub Profile</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Profile URL"
                      {...field}
                      className="bg-black/50 border-teal-500/20 focus:border-2 pl-10"
                    />
                    <div className="absolute left-3 top-4 text-gray-400">
                      <Github className="h-4 w-4" />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`members.${index}.college`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#ececed]">College</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter college name"
                    {...field}
                    className="bg-black/50 border-teal-500/20 focus:border-2 w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {index !== 0 && (
            <div className="flex items-center space-x-2 mt-2">
              <Checkbox
                id={`same-college-${index}`}
                onCheckedChange={(checked) => {
                  if (checked) {
                    form.setValue(`members.${index}.college`, firstMemberCollege);
                  } else {
                    form.setValue(`members.${index}.college`, "");
                  }
                }}
              />
              <label
                htmlFor={`same-college-${index}`}
                className="text-sm text-[#ececed]"
              >
                Same college as Team Member 1
              </label>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
