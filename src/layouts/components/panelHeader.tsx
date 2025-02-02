import {
	GridContainer,
	StyledAppBar,
	StyledBackIcon,
	StyledDrawerIcon,
	StyledTypo,
	ProfileGrid,
} from "../styles";
import { useState } from "react";
import {
	Grid, IconButton,
	Menu,
	MenuItem,
	Theme,
	Toolbar,
	useMediaQuery,
} from "@mui/material";
import {
	AccountCircle,
	Menu as MenuIcon,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import {getHeaderTitle, getUser} from "src/state/selectors";
import {logout, UserState} from "src/state/user";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "src/state/store";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { theme } from "src/theme";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {useChangeLanguage} from "src/hooks";
interface IProps {
	children?: any;
	handleDrawerToggle: () => void;
}

export const PanelHeader = ({ handleDrawerToggle }: IProps) => {
	const user: UserState = useSelector(getUser)
	const selectedHeader = useSelector(getHeaderTitle);
	const [notificationsAnchorEl, setNotificationsAnchorEl] =
		useState<null | HTMLElement>(null);
	const dispatch = useAppDispatch();
	let navigate = useNavigate();
	const mobileView = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down("md")
	);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const {switchLanguage} = useChangeLanguage()

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const showBackButton = () => {
		const path = location.pathname;
		return path !== "/dashboard";
	};

	return (
		<>
			<StyledAppBar
				position="relative"
				sx={{ width: "100%" }}>
				<Toolbar>
					<Grid
						item
						xs={12}
						container
						justifyContent="space-between"
						alignItems="center">
						<GridContainer
							container
							item
							md="auto">
							<StyledDrawerIcon
								aria-label="open drawer"
								edge="start"
								onClick={handleDrawerToggle}>
								<MenuIcon />
							</StyledDrawerIcon>
							<StyledTypo noWrap>{selectedHeader}</StyledTypo>
						</GridContainer>


						<Grid
							item
							container
							md="auto"
							alignItems="center"
							gap="0.5rem"
							justifyContent="flex-end">

							<ProfileGrid
								xs={"auto"}
								item
								container
								position="relative"
								style={{paddingRight:mobileView ? '0rem' : '2rem',
								paddingBottom:mobileView ? '.5rem' :'0rem'}}
							>
								<Grid
									item
									container
									justifyContent="flex-end"
									alignItems="center"
									gap="0.5rem"
									xs={12}>
									<div>
										<IconButton
											size="large"
											aria-label="account of current user"
											aria-controls="menu-appbar"
											aria-haspopup="true"
											onClick={handleMenu}
											color="primary"
										>
											<AccountCircle fontSize={'large'}/>
										</IconButton>
										<Menu
											id="menu-appbar"
											anchorEl={anchorEl}
											anchorOrigin={{
												vertical: 'top',
												horizontal: 'right',
											}}
											keepMounted
											transformOrigin={{
												vertical: 'top',
												horizontal: 'right',
											}}
											open={Boolean(anchorEl)}
											onClose={handleClose}
										>
											<MenuItem onClick={() => dispatch(logout())}>{"logout"}</MenuItem>
										</Menu>
									</div>

									<Grid
										item
										container
										// justifyContent={"flex-end"}
										alignItems={"center"}
										xs={"auto"}>
										<Grid
											item
											xs={12}
											sx={{
												fontSize: "13px",
												fontWeight: "600",
												color: theme.palette.secondary.light,
											}}>
											{user.email}
										</Grid>
									</Grid>
								</Grid>
							</ProfileGrid>
						</Grid>
					</Grid>
				</Toolbar>
			</StyledAppBar>
		</>
	);
};
