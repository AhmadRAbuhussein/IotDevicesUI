import ButtonProps from "src/libs/componentsProps/buttonProps";
import {Button, CircularProgress, useMediaQuery} from "@mui/material";
import {theme} from "src/theme";

const ButtonComponent = (props: ButtonProps) => {
    const {
        title,
        onClick,
        type,
        disabled = false,
        icon,
        size = 'regular',
        isLoading = false,
        customStyle,
        className,
        fontSize,
        circularProgressSize = 30,
        name
    } = props;
    const textSize = useMediaQuery(theme.breakpoints.down('sm'));
    const textSizeHandler = () => {
        if (fontSize) return fontSize
        if (textSize && (title?.length ?? '') > 10)
            return '60%'
    }
    return (
        <Button
            aria-description={name}
            className={className}
            style={customStyle}
            variant={type}
            onClick={() => onClick()}
            disabled={disabled || isLoading}
            {...(icon ? {
                startIcon: icon
            } : {})}
            sx={{height: (size == 'small') ? '36px' : '100%', width: '100%'}}
        >
            <>
                {isLoading && <CircularProgress size={circularProgressSize} color={type === 'primary' ? 'secondary' : 'primary'}/>}
                {!isLoading && <span style={{fontSize: textSizeHandler()}}>{title}</span>}
            </>
        </Button>
    )
}

export default ButtonComponent;
