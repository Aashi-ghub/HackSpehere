import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { TeamInfoForm } from "./TeamInfoForm";
import { MemberForm } from "./MemberForm";
import { FinalDetailsForm } from "./FinalDetailsForm";
import Navigation from "./Navigation";
import { formSchema, FormValues } from "./types";
import { useAuth } from "../hooks/useAuth"; // Import authentication hook

export default function RegistrationForm() {
  const { toast } = useToast();
  const { user, loading, loginWithGitHub, logout } = useAuth();
  const [step, setStep] = useState(1);
  const [teamSize, setTeamSize] = useState(3);
  const [formLoading, setFormLoading] = useState(false); // Prevent multiple submissions

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
    if (!user) {
      toast({ variant: "destructive", title: "Error", description: "You must log in to register." });
      return;
    }

    setFormLoading(true);
    try {
      const formattedData = {
        ...data,
        teamSize: Number(data.teamSize),
        members: data.members.slice(0, Number(data.teamSize)), // Only keep required members
      };

      const res = await fetch("http://localhost:5000/team/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Ensure authentication session is included
        body: JSON.stringify(formattedData),
      });

      const result = await res.json();

      if (res.ok) {
        toast({
          title: "Registration Successful!",
          description: "Your team has been registered for the hackathon.",
        });
        form.reset();
        setStep(1);
      } else {
        throw new Error(result?.message || "Registration failed.");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: error.message || "Please try again later.",
      });
    } finally {
      setFormLoading(false);
    }
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,200,0.1),rgba(0,0,0,0))]" />
      
      <Navigation />

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-12">
        <div className="glass-card rounded-xl p-8 space-y-8 bg-black/50 backdrop-blur-sm border border-teal-500/20">
          
          {/* Authentication UI */}
          <div className="flex justify-between items-center">
            {loading ? (
              <p className="text-gray-400">Checking login status...</p>
            ) : user ? (
              <div className="flex items-center space-x-4">
                <img src={user.avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
                <span className="text-gray-300">{user.username}</span>
                <button onClick={logout} className="text-teal-400">Logout</button>
              </div>
            ) : (
              <button onClick={loginWithGitHub} className="text-teal-400">Login with GitHub</button>
            )}
          </div>

          {/* Registration Form */}
          {user && (
            <Form {...form}>
              <form method="POST" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 animate-fade-in">
                {step === 1 && <TeamInfoForm form={form} setTeamSize={setTeamSize} />}

                {step === 2 && (
                  <div className="space-y-8">
                    {Array.from({ length: teamSize }).map((_, index) => (
                      <MemberForm key={index} form={form} index={index} />
                    ))}
                  </div>
                )}

                {step === 3 && <FinalDetailsForm form={form} />}

                <div className="flex justify-between pt-8">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={prevStep} className="w-28 border-teal-500/30 hover:bg-teal-500/10 text-teal-400" disabled={formLoading}>
                      Previous
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button type="button" onClick={nextStep} className="w-28 ml-auto bg-teal-500 hover:bg-teal-400 text-black" disabled={formLoading}>
                      Next
                    </Button>
                  ) : (
                    <Button type="submit" className="w-28 ml-auto bg-teal-500 hover:bg-teal-400 text-black" disabled={formLoading}>
                      {formLoading ? "Submitting..." : "Submit"}
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
}
