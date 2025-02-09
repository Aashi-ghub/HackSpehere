import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom"; // For redirecting after success
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
  const navigate = useNavigate(); // React Router navigation for redirecting
  const { user, loading, loginWithGitHub, logout } = useAuth();
  const [step, setStep] = useState(1);
  const [teamSize, setTeamSize] = useState(3);
  const [formLoading, setFormLoading] = useState(false);
  const [success, setSuccess] = useState(false); // Track successful submission

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = form.getValues();
    // console.log("checking ")
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

      const API_BASE_URL = import.meta.env.VITE_API_URL;

      const res = await fetch(`${API_BASE_URL}/team/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formattedData),
      });
      
      const result = await res.json();

      if (res.ok) {
        setSuccess(true);
        toast({
          title: "Registration Successful!",
          description: "Your team has been registered for the hackathon.",
        });
        form.reset();
        setTimeout(() => {
          navigate("/"); // Redirect to home page after 3 seconds
        }, 3000);
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
    <div className="min-h-screen text-white bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,200,0.1),rgba(0,0,0,0))]" />
      
      <Navigation />

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-12">
        <div className="glass-card rounded-xl p-8 space-y-8 bg-black/50 backdrop-blur-sm border border-teal-500/20">
          
          {/* Show success message if registration is completed */}
          {success ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-teal-400">🎉 Registration Successful!</h2>
              <p className="text-gray-300 mt-4">Redirecting to the home page...</p>
            </div>
          ) : (
            <>
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
                  <div className="text-center w-full">
                    <p className="text-gray-300">You must be logged in to register.</p>
                    <button onClick={loginWithGitHub} className="mt-4 text-teal-400 bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">
                      Login with GitHub
                    </button>
                  </div>
                )}
              </div>

              {/* Show Registration Form Only if User is Logged In */}
              {user && (
                <Form {...form}>
                  <form method="POST" onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
