const API_BASE = import.meta.env.VITE_API_URL;

export const endpoints = {
  about: `${API_BASE}/about`,
  skills: `${API_BASE}/skills`,
  services: `${API_BASE}/services`,
  projects: `${API_BASE}/projects`,
  work: `${API_BASE}/work`,
  compliments: `${API_BASE}/compliments`,
  education: `${API_BASE}/education`,
};

const parseJson = async (response) => {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }
  return data;
};

export const fetchCollection = async (url) => {
  const response = await fetch(url);
  return parseJson(response);
};

const adminHeaders = (credentials) => ({
  "Content-Type": "application/json",
  "x-admin-username": credentials.username || "",
  "x-admin-password": credentials.password || "",
});

export const createCollectionItem = async (url, credentials, payload) => {
  const response = await fetch(url, {
    method: "POST",
    headers: adminHeaders(credentials),
    body: JSON.stringify(payload),
  });

  return parseJson(response);
};

export const deleteCollectionItem = async (url, credentials, id) => {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: adminHeaders(credentials),
  });

  return parseJson(response);
};
