import axios from "axios";

const http = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

http.interceptors.request.use((config) => {
	if (typeof window !== "undefined") {
		const token = localStorage.getItem("token");
		if (token) config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export const fetcher = (url: string) => http.get(url).then((res) => res.data);

export const errorHandler = (error: unknown) => {
	console.error("ErrorHandler", error);

	if (!axios.isAxiosError(error)) {
		return { message: "An unexpected error occurred." };
	}

	if (!error.response) {
		return { message: "Network error. Please check your connection." };
	}

	const { status, data } = error.response;

	switch (status) {
		case 400:
			return { message: data.message || "Bad Request." };
		case 401:
			return { message: "Unauthorized. Please log in." };
		case 403:
			return { message: "Forbidden. You don't have access to this resource." };
		case 404:
			return { message: "Resource not found." };
		case 500:
			return { message: "Internal Server Error. Please try again later." };
		default:
			return { message: data.message || "An unexpected error occurred." };
	}
};

export default http;
