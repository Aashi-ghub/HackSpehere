import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./types";
import { Users , ScrollText, SquareUserRound} from "lucide-react";

interface TeamInfoFormProps {
  form: UseFormReturn<FormValues>;
  setTeamSize: (size: number) => void;
}

export const TeamInfoForm = ({ form, setTeamSize }: TeamInfoFormProps) => {
  return (
    <div className="space-y-6 text-white mt-[60px] ">
    <div className="text-white font-xl">Register for <span className="bg-gradient-to-r from-[#00FFA3] to-[#00A3FF] font-bold bg-clip-text text-transparent">InceptionX</span></div>
      <FormField
        control={form.control}
        name="teamName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-teal-400 ml-5">Team Name</FormLabel>
            <FormControl>
            <div className="relative">
                <Input
                  placeholder="Enter Team Name"
                  {...field}
                  className=" border-teal-500/20  focus:shadow-lg focus:shadow-teal-500/50"
                />
              </div>
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
            <div className="relative">
                <Textarea
                  placeholder="Breif Description (Optional)"
                  {...field}
                  className=" border-teal-500/20 focus:shadow-lg focus:shadow-teal-500/50 min-h-[100px]  "
                />
              </div>
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
              defaultValue=""
            >

              <FormControl>
                <div className="relative">
                <SelectTrigger className=" text-white border-teal-500/20  focus:shadow-lg focus:shadow-teal-500/50 ">
                  <SelectValue placeholder="Select team size" />
                </SelectTrigger>
                </div>
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