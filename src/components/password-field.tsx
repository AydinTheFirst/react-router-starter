import {
	InputGroup,
	Label,
	TextField,
	type TextFieldProps,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function PasswordField(props: TextFieldProps) {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

	const iconName = isPasswordVisible
		? "mdi:eye-outline"
		: "mdi:eye-off-outline";

	const inputType = isPasswordVisible ? "text" : "password";

	return (
		<TextField name="password" {...props}>
			<Label>Password</Label>
			<InputGroup>
				<InputGroup.Input type={inputType} />
				<InputGroup.Suffix>
					<button
						aria-label="Toggle Password Visibility"
						onClick={togglePasswordVisibility}
						type="button"
					>
						<Icon className="size-5" icon={iconName} />
					</button>
				</InputGroup.Suffix>
			</InputGroup>
		</TextField>
	);
}
