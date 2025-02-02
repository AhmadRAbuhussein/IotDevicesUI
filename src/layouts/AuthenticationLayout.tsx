import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import { theme } from 'src/theme';

interface IProps {
	children?: React.ReactNode;
	pathname: string;
}

const Layout = ({ pathname }: IProps) => {

	return (
		<Grid
			container
			item
            height='100vh'
            sx={{background: theme.palette.background.paper}}
			xs={12}>
			<Outlet />
		</Grid>
	);
};

export default Layout;
