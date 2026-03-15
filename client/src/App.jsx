import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PortfolioHome from "./pages/PortfolioHome";
import AdminPanel from "./pages/AdminPanel";
import Loader from "./components/ui/Loader";
import { API_LOADING_EVENT } from "./services/api";

const App = () => {
  const [isApiLoading, setIsApiLoading] = useState(false);

  useEffect(() => {
    const handleLoading = (event) => {
      setIsApiLoading(Boolean(event.detail?.isLoading));
    };

    window.addEventListener(API_LOADING_EVENT, handleLoading);

    return () => {
      window.removeEventListener(API_LOADING_EVENT, handleLoading);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/masteradmin" element={<AdminPanel />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {isApiLoading && <Loader fullScreen />}
    </>
  );
};

export default App;