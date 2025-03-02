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
    <div className="space-y-6 font-orbitron text-white mt-[20px] ">
    <div className="text-white  text-center text-4xl">Register for <span className="bg-gradient-to-r  from-[#dbe2e2] via-[#b3beba] to-[#4fd1d7]  font-bold font-orbitron bg-clip-text text-transparent">InceptionX</span><br/>
    <div className="text-[#8d8f92] text-lg text-center  font-stretch-extra-condensed">Secure your spot in the most exciting Event of the year!</div>
    </div>
      <FormField
        control={form.control}
        name="teamName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white  text-lg">Team Name</FormLabel>
            <FormControl>
            <div className="relative">
                <Input
                  placeholder="Enter Team Name"
                  {...field}
                  className="border-[#1c242e] focus:border-2"
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
            <FormLabel className="text-[#ececed] text-lg">Team Description (Optional)</FormLabel> 
            <FormControl>
            <div className="relative">
                <Textarea
                  placeholder="Breif Description (Optional)"
                  {...field}
                  className=" border-[#1c242e] focus:border-2 min-h-[100px]  "
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
            <FormLabel className="text-[#ececed] text-lg">Team Size</FormLabel>
            <Select
              onValueChange={(value) => {
                field.onChange(value);
                setTeamSize(parseInt(value));
              }}
              defaultValue=""
            >

              <FormControl>
                <div className="relative">
                <SelectTrigger className=" text-white border-[#1c242e]  focus:border-2">
                  <SelectValue placeholder="Select team size" className="placeholder-shown:text-[#1c242e]" />
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