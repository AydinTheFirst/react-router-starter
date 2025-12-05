import { linkVariants } from "@heroui/react";
import { Link, type LinkProps } from "react-router";

export default function RouterLink(props: LinkProps) {
	return <Link className={linkVariants({}).base()} {...props} />;
}
