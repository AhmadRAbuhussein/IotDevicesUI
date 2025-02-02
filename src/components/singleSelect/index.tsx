import SingleSelectProps, {SelectItem} from "src/libs/componentsProps/singleSelectProps";
import {
    TextField,
    Typography,
    FormControl,
    InputAdornment,
} from "@mui/material";
import {theme} from "src/theme";

const TextInput = (props: SingleSelectProps) => {
    const {
        value,
        onChange,
        label,
        error,
        placeholder,
        isDisabled = false,
        required,
        icon,
        name,
        items,
    } = props;
    const handleChange = (val: string | number, name: string | undefined) => {
        onChange(val, name);
    };


    return (
        <FormControl
            sx={{width: "100%"}}
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
                select
                disabled={isDisabled}

                {...(
                    isDisabled ? {
                            InputProps: {
                                sx: {bgcolor: '#cccccc', height: '40px'}
                            }
                        }
                        : {
                            InputProps: {
                                sx: {height: '40px'}
                            }
                        }

                )}
                SelectProps={{
                    native: !isDisabled
                }}
                placeholder={placeholder}
                sx={{
                    borderRadius: "100px",

                    '.MuiNativeSelect-icon': {
                        // left: language === 'ar' ? '10px' : 'unset' ,
                        // right: language === 'ar' ? 'unset' : '10px',
                        fill: theme.palette.primary.main
                    }
                }}
                {...(icon
                    ? {
                        InputProps: {
                            startAdornment: (
                                <InputAdornment position="start">{icon}</InputAdornment>
                            ),

                        },
                    }
                    : {})}
                name={name}
                value={value}
                onChange={(e) => {
                    handleChange(e.target.value, name);
                }}
            >
                <option aria-label="None" value="" />
                {items?.map((option: SelectItem) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </TextField>
            <Typography sx={{color: 'red', fontSize: '100%'}}
                        visibility={error ? "visible" : "hidden"}>{error}*</Typography>
        </FormControl>
    );
};

export default TextInput;
