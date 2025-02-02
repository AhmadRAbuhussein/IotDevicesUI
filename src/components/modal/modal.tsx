import ModalProps from "src/libs/componentsProps/modalProps";
import {StyledTitle, uploaderModalMobileStyle, uploaderModalStyle,} from "./styles";
import {Box, Divider, Grid, Modal, Theme, useMediaQuery} from "@mui/material";
import {ButtonComponent} from "src/components";

const Component = (props: ModalProps) => {
    const {
        children,
        isOpen,
        onClose,
        primaryButtonAction,
        primaryButtonTitle,
        secondaryButtonAction,
        secondaryButtonTitle,
        primaryButtonIsDisabled = false,
        secondaryButtonIsDisabled = false,
        title,
        secondaryButtonVariant,
        primaryButtonVariant,
        size,
        isLoading,
        modalStyle
    } = props;
    const mobileView = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down("md")
    );

    const handleClose = () => {
        onClose();
    };


    return (
        <Modal
            style={modalStyle}
            open={isOpen ?? false}
            onClose={handleClose}>
            <Grid
                item
                container
                gap="1rem"
                {...(mobileView
                    ? {
                        sx: uploaderModalMobileStyle,
                    }
                    : {sx: uploaderModalStyle(size)})
                }
            >
                <Grid
                    item
                    container
                    gap="1rem"
                    xs={12}
                    justifyContent={"flex-end"}
                    alignItems={"center"}>
                    <Grid
                        item
                        md={5}
                    />
                    <Grid
                        item
                        container
                        md={12}
                        alignItems="center"
                        justifyContent={title ? "space-between" : "flex-end"}>
                        {title && <StyledTitle>{title}</StyledTitle>}
                        <Box
                            component="img"
                            onClick={handleClose}
                            sx={{
                                objectFit: "contain",
                                height: "40px",
                                cursor: "pointer",
                                marginBottom: "10px",
                            }}
                            alt=""
                            src={"/close.svg"}
                        />
                    </Grid>
                    <Divider
                        width="100%"
                        component={Grid}
                    />
                </Grid>
                {children}
                {(secondaryButtonAction &&  primaryButtonAction) && <Grid
                    item
                    container
                    xs={12}
                    justifyContent="center"
                    gap={"10px"}
                    marginTop={"15px"}>
                    {secondaryButtonAction && (
                        <Grid
                            item
                            xs={5}>
                            <ButtonComponent
                                title={secondaryButtonTitle}
                                type={secondaryButtonVariant? secondaryButtonVariant:"secondary"}
                                customStyle={{width: "100%"}}
                                onClick={secondaryButtonAction}
                                disabled={secondaryButtonIsDisabled}
                            />
                        </Grid>
                    )}
                    {primaryButtonAction && (
                        <Grid
                            item
                            xs={5}>
                            <ButtonComponent
                                isLoading={isLoading}
                                customStyle={{width: "100%"}}
                                title={primaryButtonTitle}
                                type={primaryButtonVariant ? primaryButtonVariant:'primary'}
                                onClick={primaryButtonAction}
                                disabled={primaryButtonIsDisabled}
                            />
                        </Grid>
                    )}
                </Grid>}
            </Grid>
        </Modal>
    );
};

export default Component;
