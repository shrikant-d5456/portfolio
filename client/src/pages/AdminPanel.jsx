import { useMemo, useState } from "react";
import {
  createCollectionItem,
  deleteCollectionItem,
  endpoints,
  fetchCollection,
} from "../services/api";

const collectionConfig = {
  about: {
    label: "About",
    sample: {
      heading: ["Frontend", "Developer"],
      desc: "About description",
      resume_link: "https://example.com/resume",
      order: 1,
    },
  },
  skills: {
    label: "Skills",
    sample: {
      img: "https://example.com/skill.png",
      skill_name: "React",
      range: 90,
      desc: "",
      certificate: "",
      order: 1,
    },
  },
  services: {
    label: "Services",
    sample: {
      title: "Frontend Development",
      desc: "Service description",
      icon: "FaLaptopCode",
      order: 1,
    },
  },
  projects: {
    label: "Projects",
    sample: {
      gitLink: "https://github.com/user/repo",
      webLink: "https://example.com",
      img: "img link",
      projectName: "Project Title",
      skill: ["React","Tailwind", "Vite", "Node","Express","MongoDB", "JWT", "Redux", "Socket.io", "Stripe", "AWS", "Docker", "Kubernetes"],
      order: 1,
    },
  },
  work: {
    label: "Work",
    sample: {
      company_name: "Company Name",
      role: "Developer",
      start: "Jan 2025",
      end: "Present",
      desc: "Work description",
      documentLink: "",
      webLink: "",
      order: 1,
    },
  },
  compliments: {
    label: "Compliments",
    sample: {
      name: "Person Name",
      comp: "Company",
      comment: "Feedback text",
      img: "",
      order: 1,
    },
  },
  education: {
    label: "Education",
    sample: {
      img: "",
      skill_name: "Degree / Course",
      range: 90,
      desc: "Education details",
      order: 1,
    },
  },
};

const AdminPanel = () => {
  const [selectedCollection, setSelectedCollection] = useState("projects");
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [payload, setPayload] = useState(() =>
    JSON.stringify(collectionConfig.projects.sample, null, 2)
  );

  const collectionOptions = useMemo(() => Object.keys(collectionConfig), []);

  const loadItems = async (collectionName) => {
    setLoading(true);
    setMessage("");
    try {
      const data = await fetchCollection(endpoints[collectionName]);
      setItems(Array.isArray(data) ? data : []);
    } catch (error) {
      setMessage(error.message || "Could not load items");
    } finally {
      setLoading(false);
    }
  };

  const handleCollectionChange = async (event) => {
    const value = event.target.value;
    setSelectedCollection(value);
    setPayload(JSON.stringify(collectionConfig[value].sample, null, 2));
  };

  const handleAddItem = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const parsed = JSON.parse(payload);
      await createCollectionItem(endpoints[selectedCollection], credentials, parsed);
      setMessage("Item added successfully");
      alert("Item added successfully");
      await loadItems(selectedCollection);

    } catch (error) {
      setMessage(error.message || "error to add item");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    setMessage("");

    try {
      await deleteCollectionItem(endpoints[selectedCollection], credentials, id);
      setMessage("Item deleted");
      await loadItems(selectedCollection);
      alert("Item deleted successfully");
    } catch (error) {
      setMessage(error.message || "error to delete item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 text-slate-900">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200 p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h1 className="text-2xl md:text-3xl font-semibold">Portfolio Admin Panel</h1>
        </div>

        <p className="mt-2 text-sm text-slate-600">
          This admin panel only manages backend data. Portfolio design on `/` is untouched.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Admin username"
            value={credentials.username}
            onChange={(event) =>
              setCredentials((prev) => ({ ...prev, username: event.target.value }))
            }
            className="px-3 py-2 border border-slate-300 rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Admin password"
            value={credentials.password}
            onChange={(event) =>
              setCredentials((prev) => ({ ...prev, password: event.target.value }))
            }
            className="px-3 py-2 border border-slate-300 rounded-lg"
            required
          />
        </div>

        <div className="mt-6 space-y-4">
            <div className="flex flex-col md:flex-row gap-3 md:items-center">
              <select
                value={selectedCollection}
                onChange={handleCollectionChange}
                className="px-3 py-2 border border-slate-300 rounded-lg"
              >
                {collectionOptions.map((key) => (
                  <option key={key} value={key}>
                    {collectionConfig[key].label}
                  </option>
                ))}
              </select>
              <button
                onClick={() => loadItems(selectedCollection)}
                className="px-4 py-2 bg-slate-800 text-white rounded-lg"
                disabled={loading}
              >
                Refresh List
              </button>
            </div>

            <form onSubmit={handleAddItem} className="space-y-3">
              <label className="text-sm text-slate-600">
                Add new {collectionConfig[selectedCollection].label} item (JSON)
              </label>
              <textarea
                rows={12}
                value={payload}
                onChange={(event) => setPayload(event.target.value)}
                className="w-full font-mono text-xs md:text-sm p-3 border border-slate-300 rounded-lg"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-lg disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "Saving..." : "Add Item"}
              </button>
            </form>

            <div className="border border-slate-200 rounded-xl p-3">
              <h2 className="text-lg font-medium mb-3">Existing Items</h2>
              {items.length === 0 ? (
                <p className="text-sm text-slate-500">No data loaded yet.</p>
              ) : (
                <div className="space-y-2 max-h-[380px] overflow-auto">
                  {items.map((item) => (
                    <div
                      key={item._id}
                      className="border border-slate-200 rounded-lg p-3 bg-slate-50"
                    >
                      <pre className="text-xs whitespace-pre-wrap break-all">
                        {JSON.stringify(item, null, 2)}
                      </pre>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="mt-2 px-3 py-1 text-xs bg-red-600 text-white rounded"
                        disabled={loading}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
        </div>

        {message ? <p className="mt-4 text-sm text-indigo-700">{message}</p> : null}

        <p className="mt-2 text-xs text-slate-500">
          Tip: Enter the same values as `ADMIN_USERNAME` and `ADMIN_PASSWORD` from `server/.env`.
        </p>
      </div>
    </div>
  );
};

export default AdminPanel;
