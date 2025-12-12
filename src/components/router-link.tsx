import { cn } from "@heroui/react";
import { Link, type LinkProps } from "react-router";

export default function RouterLink({ className, ...props }: LinkProps) {
	return <Link className={cn("link", className)} {...props} />;
}
