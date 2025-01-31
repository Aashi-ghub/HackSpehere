import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./types";

interface TeamInfoFormProps {
  form: UseFormReturn<FormValues>;
  setTeamSize: (size: number) => void;
}

export const TeamInfoForm = ({ form, setTeamSize }: TeamInfoFormProps) => {
  return (
    <div className="space-y-6 text-white">
      <FormField
        control={form.control}
        name="teamName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-teal-400">Team Name</FormLabel>
            <FormControl>
              <Input 
                placeholder="Enter team name" 
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
        name="teamDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-teal-400">Team Description (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Brief description of your team"
                {...field}
                className="bg-black border-teal-500/20 focus:border-teal-500/50 min-h-[100px]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="teamSize"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-teal-400">Team Size</FormLabel>
            <Select
              onValueChange={(value) => {
                field.onChange(value);
                setTeamSize(parseInt(value));
              }}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger className="bg-black/50 text-white border-teal-500/20">
                  <SelectValue placeholder="Select team size" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {[3, 4].map((size) => (
                  <SelectItem key={size} value={size.toString()}>
                    {size} Members
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};