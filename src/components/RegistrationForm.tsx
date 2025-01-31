import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Github, Users, AlertCircle, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
const teamSizes = [3, 4];
const roles = ["Developer", "Designer", "Manager", "Other"];
const themes = [
  "AI/ML",
  "Blockchain",
  "Healthcare",
  "Education",
  "Sustainability",
];
const sources = [
  "Social Media",
  "University",
  "Friends",
  "Tech Community",
  "Other",
];
const formSchema = z.object({
  teamName: z.string().min(1, "Team name is required").max(50),
  teamDescription: z.string().max(200).optional(),
  teamSize: z.string().min(1, "Please select team size"),
  members: z.array(
    z.object({
      fullName: z.string().min(1, "Full name is required"),
      email: z.string().email("Invalid email address"),
      phone: z.string().min(10, "Invalid phone number"),
      socialLink: z.string().url().optional(),
      role: z.string().min(1, "Please select a role"),
    })
  ),
  theme: z.string().min(1, "Please select a theme"),
  participantType: z.string().min(1, "Please select participant type"),
  source: z.string().min(1, "Please select how you heard about us"),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});
type FormValues = z.infer<typeof formSchema>;
export default function RegistrationForm() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [teamSize, setTeamSize] = useState(3);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
      teamDescription: "",
      teamSize: "3",
      members: Array(3).fill({
        fullName: "",
        email: "",
        phone: "",
        socialLink: "",
        role: "",
      }),
      theme: "",
      participantType: "",
      source: "",
      termsAccepted: false,
    },
  });
  const onSubmit = async (data: FormValues) => {
    console.log("Hello");
    try {
      console.log("Form data:", data);
      // Send form data to backend
      const res= await fetch('http://localhost:3000/auth/register',{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(data)
      });
      if(res.ok){
        toast({
        title: "Registration Successful!",
        description: "Your team has been registered for the hackathon.",
      });
    }else{
      toast({
        title: "Registration Failed!",
        description: "There was an issue with your registration."
      });
    }}catch (error) {
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: "Please try again later.",
      });
    }
  };
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-secondary/30 backdrop-blur-lg rounded-lg shadow-xl p-6 space-y-8 animate-fade-in">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-teal-500">
              Hackathon Registration
            </h1>
            <p className="text-muted-foreground">
              Join us in building the future! Register your team below.
            </p>
            {/* Progress Bar */}
            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-500 transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
            <Form {...form}>
              <form
                 method="POST"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 animate-fade-in"
              >
                {step === 1 && (
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="teamName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" text-white">Team Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter team name" {...field} />
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
                          <FormLabel className=" text-white">Team Description (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Brief description of your team"
                              {...field}
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
                          <FormLabel className=" text-white">Team Size</FormLabel>
                          <Select
                            onValueChange={(value) => {
                              field.onChange(value);
                              setTeamSize(parseInt(value));
                            }}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select team size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {teamSizes.map((size) => (
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
                )}
                {step === 2 && (
                  <div className="space-y-8">
                    {Array.from({ length: teamSize }).map((_, index) => (
                      <div
                        key={index}
                        className="p-6 border border-teal-500/20 rounded-lg space-y-4"
                      >
                        <h3 className="text-lg font-semibold text-teal-500">
                          Team Member {index + 1}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name={`members.${index}.fullName`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-teal-500">Full Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter full name"
                                    {...field}
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
                                <FormLabel className="text-teal-500">Email</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="Enter email"
                                    {...field}
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
                                <FormLabel className="text-teal-500">Phone Number</FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="Enter phone number"
                                    {...field}
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
                                <FormLabel className="text-teal-500">GitHub Profile</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Input
                                      placeholder="Profile URL"
                                      {...field}
                                      className="pl-10"
                                    />
                                    <div className="absolute left-3 top-2.5 flex gap-2 text-muted-foreground">
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
                    ))}
                  </div>
                )}
                {step === 3 && (
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="theme"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-teal-500">Theme</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
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
                          <FormLabel className="text-teal-500">Participant Type</FormLabel>
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
                                <FormLabel className="font-normal text-teal-500">
                                  Student
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="professional" />
                                </FormControl>
                                <FormLabel className="font-normal  text-teal-500">
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
                          <FormLabel className=" text-teal-500">How did you hear about us?</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
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
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel  className=" text-teal-500">
                              I accept the terms and conditions
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Please review all information before submitting. You
                        cannot modify the registration after submission.
                      </AlertDescription>
                    </Alert>
                  </div>
                )}
                <div className="flex justify-between pt-6">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="w-24"
                    >
                      Previous
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="w-24 ml-auto"
                    >
                      Next
                    </Button>
                  ) : (
                    <Button type="submit"  className="w-24 ml-auto">
                      Submit
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
