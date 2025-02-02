import {useEffect, useMemo, useState} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {Alert, CssBaseline, Grid } from "@mui/material";
import {
    Container,
    DrawerContainer,
    NormalDevicesStyledDrawer,
    StyledDrawer,
} from "./styles";
import {wholeContent} from "./components/sideMenuData";
import {setHeaderTitle} from 'src/state/app'
import {useAppDispatch, useTypedSelector} from "src/state/store";
import {getAlert} from 'src/state';
import {Drawer, PanelHeader} from './components'

interface IProps {
    children?: any;
}

const Layout = (props: IProps) => {
    const alert = useTypedSelector(getAlert);
    const [mobileOpen, setMobileOpen] = useState(false);
    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    let location = useLocation();
    let selectedItem = useMemo(() => `/${location?.pathname.split('/')[1]}`, [location?.pathname]);

    // const selectedFromSideBar = wholeContent.main.find(
    //     (content) => content.link == selectedItem)
    //     || wholeContent.secondary.find(
    //         (content) => content.link == selectedItem);


    useEffect(() => {
        let currentPage = location?.pathname.split('/')
        dispatch(setHeaderTitle(currentPage?.[1].charAt(0).toUpperCase() + currentPage?.[1].slice(1) ?? ''))
    }, [location?.pathname])


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleListItemClick = (event: any, index: number) => {
        const selectedFromSideBar = wholeContent.main.find(
            (content) => content.id == index
        );
        navigate(selectedFromSideBar?.link ?? "");
        setMobileOpen(false)
    };

    return (
        <Grid container item xs={12} height='100vh' overflow='hidden'>
            <CssBaseline/>
            <DrawerContainer
                item
                xs={4}
                lg={2}
                md={3}>
                <StyledDrawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    mobileflag={+mobileOpen}>
                   <Drawer
                    handleListItemClick={handleListItemClick}
                    selectedItem={selectedItem}/>
                </StyledDrawer>

                <NormalDevicesStyledDrawer
                    variant="permanent"
                    open>
                    <Drawer
                        handleListItemClick={handleListItemClick}
                        selectedItem={selectedItem}/>
                </NormalDevicesStyledDrawer>
            </DrawerContainer>
            <Container item xs={12} md={9} lg={10}>
                <PanelHeader
                    handleDrawerToggle={handleDrawerToggle}/>
                            {alert?.isOpen && <Alert severity={alert.severity}>{alert?.content}</Alert>}
                <Grid xs={12} overflow='scroll' height={'100vh'} padding={'2rem'}>
                    <Outlet />
                </Grid>
            </Container>
        </Grid>
    );
};

export default Layout;
