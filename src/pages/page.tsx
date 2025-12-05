import { Button } from "@heroui/react";
import ThemeSwitcher from "~/components/theme-switcher";

export default function HelloWorld() {
	return (
		<div>
			<Button>HelloWorld</Button>
			<div className="h-screen grid place-items-center">
				<ThemeSwitcher />
			</div>
		</div>
	);
}
