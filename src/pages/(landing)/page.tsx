import { Button } from "@heroui/react";
import ThemeSwitcher from "~/components/theme-switcher";

export default function HelloWorld() {
	return (
		<div>
			<Button variant="primary">HelloWorld</Button>
			<div className="grid h-screen place-items-center">
				<ThemeSwitcher />
			</div>
		</div>
	);
}
