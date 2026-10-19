import { Navigate, Route, Routes } from "react-router-dom";
import PortfolioHome from "./pages/PortfolioHome";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;