import PasswordInputProps from "src/libs/componentsProps/passwordInputProps";
import {
	FormControl,
	TextField,
	InputAdornment,
	IconButton,
	Typography,
	Box,
} from "@mui/material";
import { useState, MouseEvent } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { theme } from "src/theme";

const PasswordInput = (props: PasswordInputProps) => {
	const {
		value,
		onChange,
		label,
		name,
		showIcon,
		error,
		required = false,
		placeholder,
		icon,
	} = props;
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};
	return (
		<FormControl
			sx={{ width: "100%" }}
			variant="outlined">
			{label && (
				<Typography
					sx={{
						fontSize: "0.724rem",
						fontWeight: "600",
						color: theme.palette.secondary.grayScale900,
						mb: "0.25rem",
					}}>
					{label &&
						`${label.charAt(0).toUpperCase() + label.slice(1)}${
							required ? "*" : ""
						}`}
				</Typography>
			)}
			<TextField
				id="outlined"
				sx={{ borderRadius: "14px", input: { display: "flex" } }}
				type={showPassword ? "text" : "password"}
				{...(icon || showIcon
					? {
						InputProps: {
							sx: {
								paddingInlineStart: "0px",
								paddingLeft: "14px",
							},

							startAdornment: (
								<InputAdornment
									sx={{ paddingLeft: "14px", paddingInlineStart: "0px" }}
									position="start">
									{icon}
								</InputAdornment>
							),
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							),
						},
					}
					: {})}
				name={name}
				value={value}
				onChange={(e) => {
					onChange(e.target.value, name);
				}}
				placeholder={
					placeholder &&
					`${
						placeholder?.charAt(0).toUpperCase() +
						placeholder?.slice(1).toLowerCase()
					}`
				}
			/>
			<Box
				sx={{
					color: theme.palette.primary.main,
					fontSize: "13px",
					paddingTop: "0.3rem",
				}}
				visibility={error ? "visible" : "hidden"}>{`${error} *`}</Box>
		</FormControl>
	);
};

export default PasswordInput;
