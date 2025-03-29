import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RegistrationPage from "./pages/register";
import ThemesPage from "./pages/ThemesPage";
import ThemeList from "./components/ThemeList"; 
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm"
import  LeaderBoard from "./pages/Leaderboard";
import PaymentComponent from "./components/Payment";  
import TeamDashboardComponent from "./components/TeamDashboardComponent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}> 
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginForm/>}></Route>
          <Route path="/signup" element={<SignupForm/>}></Route>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/themeslist/:theme" element={<ThemesPage/>} />
          <Route path="/leaderBoard" element={<LeaderBoard/>}/>
          <Route path="/payment" element={<PaymentComponent />} />
          <Route path="/dashboard" element={<TeamDashboardComponent />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </QueryClientProvider>
);
export default App;

