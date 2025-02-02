import {useEffect} from "react";
import i18n from "src/i18n";
import {getIsLoading, getLanguage} from "src/state";
import { useSelector} from "react-redux";
import {PrivateRoutes, UnAuthenticatedRoutes} from "src/routes";
import {Backdrop, CircularProgress} from "@mui/material";
import {theme} from "src/theme";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const StyledLoadingBackdrop = {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.background.default,
};

const AppLoader = () => {
    const isLoading: boolean = useSelector(getIsLoading);
    const language = useSelector(getLanguage)

    useEffect(() => {
        document.body.dir = "en";
        i18n.changeLanguage(language).then();
    }, []);

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={true}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
            {isLoading && (
                <Backdrop
                    sx={StyledLoadingBackdrop}
                    open={isLoading}>
                    <CircularProgress color="primary"/>
                </Backdrop>
            )}
            <UnAuthenticatedRoutes/>
            <PrivateRoutes/>
        </>
    );
};

export default AppLoader;
