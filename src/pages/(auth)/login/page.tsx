import {
	Button,
	Card,
	FieldError,
	Form,
	Input,
	Label,
	Separator,
	TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import PasswordField from "~/components/password-field";
import RouterLink from "~/components/router-link";
import http, { errorHandler } from "~/lib/http";

export default function LoginPage() {
	const navigate = useNavigate();

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData.entries());

		try {
			const res = await http.post("/auth/login", data);
			const { token } = res.data;
			localStorage.setItem("token", token);

			toast.success("Login successful!");
			navigate("/");
		} catch (error) {
			toast.error(errorHandler(error).message);
		}
	};

	return (
		<div className="grid place-items-center h-screen container">
			<Card.Root className="w-full max-w-md p-10">
				<Card.Header>
					<Card.Title className="text-3xl font-semibold mb-4">
						Login to your account
					</Card.Title>
					<Card.Description>
						Don't have an account?{" "}
						<RouterLink to="/register">Register</RouterLink>
					</Card.Description>
				</Card.Header>
				<Card.Content>
					<Form className="grid gap-3" onSubmit={onSubmit}>
						<TextField isRequired name="email">
							<Label>Email</Label>
							<Input />
							<FieldError />
						</TextField>

						<PasswordField isRequired />

						<Button className="w-full mt-4" type="submit">
							Login
						</Button>
					</Form>
				</Card.Content>

				<div className="grid grid-cols-3 place-items-center gap-3 ">
					<Separator />
					<span className="text-sm text-muted">Or continue with</span>
					<Separator />
				</div>
				<Card.Footer className="flex gap-3 items-center justify-center">
					<Button variant="tertiary">
						<Icon className="size-5" icon="mdi:google" />
						Sign in with Google
					</Button>
				</Card.Footer>
			</Card.Root>
		</div>
	);
}
