import { cn } from "@heroui/react";
import { Icon } from "@iconify/react";
import type React from "react";

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {}

export function Navbar({ children, className, ...props }: NavbarProps) {
	return (
		<header className={cn("navbar", className)} {...props}>
			{children}
		</header>
	);
}

interface NavbarContentProps extends React.HTMLAttributes<HTMLElement> {}

Navbar.Content = function NavbarContent({
	children,
	className,
	...props
}: NavbarContentProps) {
	return (
		<div className={cn("navbar__content", className)} {...props}>
			{children}
		</div>
	);
};

interface NavbarItemProps extends React.HTMLAttributes<HTMLLIElement> {}

Navbar.Item = function NavbarItem({
	children,
	className,
	...props
}: NavbarItemProps) {
	return (
		<li className={cn("navbar__item", className)} {...props}>
			{children}
		</li>
	);
};

interface NavbarToggleProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	open: boolean;
}

Navbar.Toggle = function NavbarToggle({
	open,
	className,
	...props
}: NavbarToggleProps) {
	const iconName = open ? "mdi:close" : "mdi:menu";

	return (
		<button
			aria-expanded={open}
			className={cn("navbar__toggle", className)}
			{...props}
		>
			<span className="sr-only">Toggle menu</span>
			<Icon className="navbar__toggle-icon" icon={iconName} />
		</button>
	);
};

interface NavbarMenuProps extends React.HTMLAttributes<HTMLLIElement> {
	mobileOpen: boolean;
}

Navbar.Menu = function NavbarMenu({
	mobileOpen,
	children,
	className,
	...props
}: NavbarMenuProps) {
	return (
		<li
			className={cn(
				"navbar__menu",
				mobileOpen && "navbar__menu--open",
				className,
			)}
			{...props}
		>
			{children}
		</li>
	);
};

interface NavbarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {}

Navbar.MenuItem = function NavbarMenuItem({
	children,
	className,
	...props
}: NavbarMenuItemProps) {
	return (
		<li className={cn("navbar__menu-item", className)} {...props}>
			{children}
		</li>
	);
};

interface NavbarListProps extends React.HTMLAttributes<HTMLUListElement> {}

Navbar.List = function NavbarList({
	children,
	className,
	...props
}: NavbarListProps) {
	return (
		<ul className={cn("navbar__list", className)} {...props}>
			{children}
		</ul>
	);
};
