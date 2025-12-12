import React from "react";
import { Navbar } from "~/components/navbar";
import RouterLink from "~/components/router-link";
import ThemeSwitcher from "~/components/theme-switcher";

const items = [
	{
		children: "Home",
		to: "/",
	},
	{
		children: "Services",
		to: "/services",
	},
	{
		children: "Contact",
		to: "/contact",
	},
];

export default function LandingNavbar() {
	const [open, setOpen] = React.useState(false);

	return (
		<Navbar>
			<Navbar.Content>
				<div className="flex items-center gap-2">
					<Navbar.Toggle onClick={() => setOpen(!open)} open={open} />
					<div className="font-bold text-xl">MyApp</div>
				</div>

				<Navbar.List className="flex items-center justify-center gap-4">
					{items.map((item) => (
						<Navbar.Item key={item.to}>
							<RouterLink {...item} />
						</Navbar.Item>
					))}
				</Navbar.List>

				<div>
					<ThemeSwitcher />
				</div>
			</Navbar.Content>

			<Navbar.Menu mobileOpen={open}>
				{items.map((item) => (
					<Navbar.MenuItem key={item.to}>
						<RouterLink {...item} onClick={() => setOpen(false)} />
					</Navbar.MenuItem>
				))}
			</Navbar.Menu>
		</Navbar>
	);
}
