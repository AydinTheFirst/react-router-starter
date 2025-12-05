import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
	const { setTheme, theme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<Button isIconOnly onClick={toggleTheme} variant="tertiary">
			<Icon icon={getThemeIcon(theme || "system")} />
		</Button>
	);
}

function getThemeIcon(theme: string) {
	switch (theme) {
		case "light":
			return "mdi:weather-sunny";
		case "dark":
			return "mdi:weather-night";
		case "system":
			return "mdi:monitor";
		default:
			return "mdi:help-circle";
	}
}
