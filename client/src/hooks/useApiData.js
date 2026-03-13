import { useEffect, useState } from "react";
import { fetchCollection } from "../services/api";

const useApiData = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        setLoading(true);
        const response = await fetchCollection(endpoint);
        if (mounted) {
          setData(Array.isArray(response) ? response : []);
          setError("");
        }
      } catch (err) {
        if (mounted) {
          setError(err.message || "Failed to load data");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, [endpoint]);

  return { data, setData, loading, error };
};

export default useApiData;
