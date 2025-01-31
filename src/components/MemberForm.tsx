import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Github } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./types";

interface MemberFormProps {
  form: UseFormReturn<FormValues>;
  index: number;
}

export const MemberForm = ({ form, index }: MemberFormProps) => {
  return (
    <div className="p-6 bg-black/30 border text border-teal-500/20 rounded-lg space-y-4">
      <h3 className="text-lg font-semibold text-teal-400">
        Team Member {index + 1}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name={`members.${index}.fullName`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-teal-400">Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter full name"
                  {...field}
                  className="bg-black/50 border-teal-500/20 focus:border-teal-500/50"
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
              <FormLabel className="text-teal-400">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter email"
                  {...field}
                  className="bg-black/50 border-teal-500/20 focus:border-teal-500/50"
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
              <FormLabel className="text-teal-400">Phone Number</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Enter phone number"
                  {...field}
                  className="bg-black/50 border-teal-500/20 focus:border-teal-500/50"
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
              <FormLabel className="text-teal-400">GitHub Profile</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="Profile URL"
                    {...field}
                    className="bg-black/50 border-teal-500/20 focus:border-teal-500/50 pl-10"
                  />
                  <div className="absolute left-3 top-2.5 text-gray-400">
                    <Github className="h-4 w-4" />
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};