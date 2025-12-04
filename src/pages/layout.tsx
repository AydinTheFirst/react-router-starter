import { ThemeProvider } from "next-themes";
import { Outlet } from "react-router";
import { Toaster } from "sonner";
import { SWRConfig } from "swr";

import { composeProviders } from "~/lib/compose-providers";
import { fetcher } from "~/lib/http";

const Providers = composeProviders(
	({ children }) => <ThemeProvider attribute="class">{children}</ThemeProvider>,
	({ children }) => <SWRConfig value={{ fetcher }}>{children}</SWRConfig>,
);

export default function RootLayout() {
	return (
		<Providers>
			<Outlet />
			<Toaster richColors />
		</Providers>
	);
}
