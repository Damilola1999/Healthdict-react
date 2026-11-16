const API_BASE = "https://healthdict-node-js.onrender.com";

interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined>;
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { params, headers, ...init } = options;

  const url = new URL(`${API_BASE}${path}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  const res = await fetch(url.toString(), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API ${res.status}: ${text || res.statusText}`);
  }

  if (res.status === 204) {
    return undefined as T;
  }

  return res.json() as Promise<T>;
}

export const api = {
  get: <T>(path: string, params?: Record<string, string | number | boolean | undefined>) => request<T>(path, { method: "GET", params }),
  post: <T>(path: string, body: unknown) => request<T>(path, { method: "POST", body: JSON.stringify(body) }),
  put: <T>(path: string, body: unknown) => request<T>(path, { method: "PUT", body: JSON.stringify(body) }),
  patch: <T>(path: string, body: unknown) => request<T>(path, { method: "PATCH", body: JSON.stringify(body) }),
  delete: <T>(path: string) => request<T>(path, { method: "DELETE" }),
};

export interface AppointmentPayload {
  name: string;
  email: string;
  phone: string;
  type: string;
  notes: string;
  date: string; // ISO string
  time: string;
}

export interface AppointmentResponse {
  success: boolean;
  message?: string;
  appointmentId?: string;
}

export const appointmentsApi = {
  create: (payload: AppointmentPayload) =>
    api.post<AppointmentResponse>("/api/appointments", payload),

  list: (params?: { page?: number; limit?: number; status?: string }) =>
    api.get<{ data: AppointmentResponse[]; total: number }>("/api/appointments", params),

  getById: (id: string) => api.get<AppointmentResponse>(`/api/appointments/${id}`),

  update: (id: string, payload: Partial<AppointmentPayload>) =>
    api.patch<AppointmentResponse>(`/api/appointments/${id}`, payload),

  cancel: (id: string) => api.delete<void>(`/api/appointments/${id}`),
};

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const contactApi = {
  submit: (payload: ContactPayload) =>
    api.post<{ success: boolean; message?: string }>("/api/contact", payload),
};

export default api;