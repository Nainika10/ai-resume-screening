import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import CreateJob from "./pages/CreateJob";
import ResumeUpload from "./pages/ResumeUpload";
import ProcessingStatus from "./pages/ProcessingStatus";
import CandidateRanking from "./pages/CandidateRanking";
import CandidateDetails from "./pages/CandidateDetails";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs/create" element={<CreateJob />} />
        <Route path="/resumes/upload" element={<ResumeUpload />} />
        <Route path="/processing" element={<ProcessingStatus />} />
        <Route path="/candidates" element={<CandidateRanking />} />
        <Route path="/candidates/:id" element={<CandidateDetails />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;