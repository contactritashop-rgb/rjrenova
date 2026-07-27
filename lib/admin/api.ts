const API_BASE = "https://runtime.codewords.ai/run/rjrenova_admin_api_6e013879";

async function api(path: string, options?: RequestInit) {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options?.headers },
  });
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json();
}

export const adminApi = {
  services: {
    list: () => api("/services").then((r) => r.data),
    create: (data: any) => api("/services", { method: "POST", body: JSON.stringify(data) }),
    update: (id: number, data: any) => api(`/services/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    delete: (id: number) => api(`/services/${id}`, { method: "DELETE" }),
  },
  projects: {
    list: () => api("/projects").then((r) => r.data),
    create: (data: any) => api("/projects", { method: "POST", body: JSON.stringify(data) }),
    update: (id: number, data: any) => api(`/projects/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    delete: (id: number) => api(`/projects/${id}`, { method: "DELETE" }),
  },
  testimonials: {
    list: () => api("/testimonials").then((r) => r.data),
    create: (data: any) => api("/testimonials", { method: "POST", body: JSON.stringify(data) }),
    update: (id: number, data: any) => api(`/testimonials/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    delete: (id: number) => api(`/testimonials/${id}`, { method: "DELETE" }),
  },
  quotes: {
    list: () => api("/quotes").then((r) => r.data),
    updateStatus: (id: number, status: string) => api(`/quotes/${id}/status`, { method: "PUT", body: JSON.stringify({ status }) }),
    delete: (id: number) => api(`/quotes/${id}`, { method: "DELETE" }),
  },
};

