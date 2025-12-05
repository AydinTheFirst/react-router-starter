import { Button, Dropdown, Label } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
	const { setTheme, themes } = useTheme();

	return (
		<Dropdown>
			<Button aria-label="Theme Switcher" isIconOnly variant="secondary">
				<Icon className="size-5" icon="mdi:theme-light-dark" />
			</Button>
			<Dropdown.Popover>
				<Dropdown.Menu onAction={(key) => setTheme(key.toString())}>
					{themes.map((t) => (
						<Dropdown.Item key={t}>
							<Label>{getThemeLabel(t)}</Label>
							<Icon className="size-5 ms-auto" icon={getThemeIcon(t)} />
						</Dropdown.Item>
					))}
				</Dropdown.Menu>
			</Dropdown.Popover>
		</Dropdown>
	);
}

function getThemeLabel(theme: string) {
	switch (theme) {
		case "light":
			return "Light";
		case "dark":
			return "Dark";
		case "system":
			return "System";
		default:
			return "Unknown";
	}
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
