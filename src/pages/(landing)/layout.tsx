import { Outlet } from "react-router";
import LandingNavbar from "./navbar";

export default function LandingLayout() {
	return (
		<div>
			<LandingNavbar />
			<Outlet />
		</div>
	);
}
