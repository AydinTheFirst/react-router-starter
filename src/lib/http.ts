import axios from "axios";

const http = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
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

export default http;
