import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../state/store";

interface IProps{
    children?: any
}

const Layout = (props:IProps) => {
    const user = useSelector((state:RootState) => state.user);
    if (!user?.isAuthenticated) {
        const returnUrl = useLocation();
        return <Navigate to={`/?returnUrl=${returnUrl.pathname}${returnUrl.search}`}/>

    } else return <Outlet />
}

export default Layout;
