import { Navigate, Route, Routes } from "react-router-dom";
import PortfolioHome from "./pages/PortfolioHome";
import AdminPanel from "./pages/AdminPanel";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHome />} />
      <Route path="/masteradmin" element={<AdminPanel />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;