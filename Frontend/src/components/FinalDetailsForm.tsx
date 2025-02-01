import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./types";

interface FinalDetailsFormProps {
  form: UseFormReturn<FormValues>;
}

export const FinalDetailsForm = ({ form }: FinalDetailsFormProps) => {
  const themes = ["AI/ML", "Blockchain", "Healthcare", "Education", "Sustainability"];
  const sources = ["Social Media", "University", "Friends", "Tech Community", "Other"];

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="theme"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-teal-400">Theme</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger className="bg-black/50 border-teal-500/20">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
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
      />
      <FormField
        control={form.control}
        name="participantType"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-teal-400">Participant Type</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="student" />
                  </FormControl>
                  <FormLabel className="font-normal text-gray-300">
                    Student
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="professional" />
                  </FormControl>
                  <FormLabel className="font-normal text-gray-300">
                    Working Professional
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="source"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-teal-400">How did you hear about us?</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger className="bg-black/50 border-teal-500/20">
                  <SelectValue placeholder="Select source" />
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
      <FormField
        control={form.control}
        name="termsAccepted"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className="border-teal-500/50 data-[state=checked]:bg-teal-500"
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="text-gray-300">
                I accept the terms and conditions
              </FormLabel>
            </div>
          </FormItem>
        )}
      />
      <Alert className="bg-black/30 border-teal-500/20">
        <AlertCircle className="h-4 w-4 text-teal-400" />
        <AlertDescription className="text-gray-400">
          Please review all information before submitting. You
          cannot modify the registration after submission.
        </AlertDescription>
      </Alert>
    </div>
  );
};