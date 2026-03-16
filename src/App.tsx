import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "./components/PublicLayout";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import InsightArticle from "./pages/InsightArticle";
import Resources from "./pages/Resources";
import Toolkits from "./pages/Toolkits";
import DataProtection from "./pages/services/DataProtection";
import Cybersecurity from "./pages/services/Cybersecurity";
import AIGovernance from "./pages/services/AIGovernance";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./pages/admin/AdminLayout";
import ResourcesManager from "./pages/admin/ResourcesManager";
import EventsNews from "./pages/EventsNews";
import DPIAScreeningTool from "./pages/DPIAScreeningTool";
import NotFound from "./pages/NotFound";
import AcademyLayout from "./pages/academy/AcademyLayout";
import AcademyHome from "./pages/academy/AcademyHome";
import AcademyDataProtection from "./pages/academy/AcademyDataProtection";
import AcademyInfoSecurity from "./pages/academy/AcademyInfoSecurity";
import AcademyCybersecurity from "./pages/academy/AcademyCybersecurity";
import AcademyAIGRC from "./pages/academy/AcademyAIGRC";
import AcademyAllProgrammes from "./pages/academy/AcademyAllProgrammes";
import AcademyMasterclasses from "./pages/academy/AcademyMasterclasses";
import AcademyCorporateTraining from "./pages/academy/AcademyCorporateTraining";
import AcademyAccreditations from "./pages/academy/AcademyAccreditations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightArticle />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/toolkits" element={<Toolkits />} />
            <Route path="/services/data-protection" element={<DataProtection />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/ai-governance" element={<AIGovernance />} />
            <Route path="/events-news" element={<EventsNews />} />
            <Route path="/dpia-screening-tool" element={<DPIAScreeningTool />} />
          </Route>

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/resources" replace />} />
            <Route path="resources" element={<ResourcesManager />} />
          </Route>

          {/* Academy routes */}
          <Route path="/academy" element={<AcademyLayout />}>
            <Route index element={<AcademyHome />} />
            <Route path="school/data-protection" element={<AcademyDataProtection />} />
            <Route path="school/information-security" element={<AcademyInfoSecurity />} />
            <Route path="school/cybersecurity" element={<AcademyCybersecurity />} />
            <Route path="school/ai-grc" element={<AcademyAIGRC />} />
            <Route path="programmes" element={<AcademyAllProgrammes />} />
            <Route path="masterclasses" element={<AcademyMasterclasses />} />
            <Route path="corporate-training" element={<AcademyCorporateTraining />} />
            <Route path="accreditations" element={<AcademyAccreditations />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
