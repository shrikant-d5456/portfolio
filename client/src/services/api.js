const API_BASE = import.meta.env.VITE_API_URL;

export const API_LOADING_EVENT = "api:loading";
let pendingRequests = 0;

const emitLoadingState = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent(API_LOADING_EVENT, {
      detail: { isLoading: pendingRequests > 0 },
    })
  );
};

const withLoading = async (request) => {
  pendingRequests += 1;
  emitLoadingState();

  try {
    return await request();
  } finally {
    pendingRequests = Math.max(0, pendingRequests - 1);
    emitLoadingState();
  }
};

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
  return withLoading(async () => {
    const response = await fetch(url);
    return parseJson(response);
  });
};

const adminHeaders = (credentials) => ({
  "Content-Type": "application/json",
  "x-admin-username": credentials.username || "",
  "x-admin-password": credentials.password || "",
});

export const createCollectionItem = async (url, credentials, payload) => {
  return withLoading(async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: adminHeaders(credentials),
      body: JSON.stringify(payload),
    });

    return parseJson(response);
  });
};

export const deleteCollectionItem = async (url, credentials, id) => {
  return withLoading(async () => {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: adminHeaders(credentials),
    });

    return parseJson(response);
  });
};
