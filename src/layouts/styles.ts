import {
  AppBar,
  Box,
  BoxProps,
  Divider,
  Drawer,
  Grid,
  IconButton,
  IconButtonProps,
  ListItem,
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  ListItemProps,
  ListItemText,
  ListItemTextProps,
  styled,
  Typography,
  TypographyProps,
  GridProps,
} from "@mui/material";
import { theme } from "src/theme";
import i18n from "i18next";

export const StyledTypo = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: "700",
  fontSize: "21px",
  color: theme.palette.secondary.main,
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
}));

export const GridContainer = styled(Grid)<GridProps>(({ theme }) => ({
  verticalAlign: "text-bottom",
  textAlign: "start",
  alignItems: "center",
  display: "inline-flex",
}));

export const Container = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginLeft: "0px",
  },
  flexGrow: 1,
  backgroundColor: theme.palette.background.paper,
  overflow:'hidden',
  height: "100%"
}));

export const StyledDrawer = styled(Drawer)<{ mobileflag?: number }>(
  ({ theme, mobileflag }) => ({
    [theme.breakpoints.down("md")]: {
      display: mobileflag ? "block" : "none",
    },
    "& .MuiDrawer-paper": {
      backgroundColor: theme.palette.background.paper,
      // color: "blue",
      boxSizing: "border-box",
    },
  })
);

export const NormalDevicesStyledDrawer = styled(StyledDrawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
  position: 'relative',
  width: '100%',
  height: "100vh",
  },
}));

export const StyledListIcon = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.secondary.naturalColor,
  minWidth: '2.5rem',

}));

export const StyledListText = styled(ListItemText)<ListItemTextProps>(
  ({ theme }) => ({
    ".MuiListItemText-primary": {
      color: theme.palette.secondary.naturalColor,
      fontWeight: "500",
      fontSize: "1rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px ",
      },
      "&.Mui-selected": {
        color: theme.palette.background.paper,

      },
      textAlign: i18n.language === 'en' ? 'left' : 'right'
    },
  })
);

export const StyledListButton = styled(ListItemButton)<ListItemButtonProps>(
  ({ theme }) => ({
    borderRadius: "20px",
    ':hover': {
      color: `${theme.palette.primary.main}!important`,
      fill: `${theme.palette.primary.main}!important`,
    },
    "&.Mui-selected": {
      color: theme.palette.background.paper,
      backgroundColor: theme.palette.primary.main,
      ':hover': {
        color: theme.palette.primary.main
      },
      "& .MuiListItemIcon-root": {
        color: theme.palette.background.paper,
        ':hover': {
          color: theme.palette.primary.main
        }
      },
      ".MuiListItemText-primary": {
        color: theme.palette.background.paper,
        fontWeight: "600",
        fontSize: "16px",
        [theme.breakpoints.down("md")]: {
          fontSize: "14px ",
        },
        ':hover': {
          color: theme.palette.primary.main
        }
      },
    },
  })
);

export const StyledListItem = styled(ListItem)<ListItemProps>(({ theme }) => ({
  width: "90%",
  marginInline: "5%",
  [theme.breakpoints.down("md")]: {
    marginInline: "1%",
  },
}));

export const StyledListBottomItem = styled(StyledListText)<ListItemProps>(
  ({ theme }) => ({
    ".MuiListItemText-primary": {
      color: "#C8C5CA",
      fontWeight: "500",
      fontSize: "1rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "0.875rem",
      },
    },
  })
);

export const StyledDivider = styled(Divider)(({ theme }) => ({
  color: "#FCF8FD",
  marginInline: '1rem'
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  width: `calc(100%)`,
  backgroundColor: "white",
  alignSelf: "baseline",
  boxShadow: 'inset 0px -1px 0px #D6DDEB'
}));

export const SideBarLogo = styled(Grid)<{
  component: string;
  alt: string;
  src: string;
}>(({ theme }) => ({
  objectFit: "cover",
  height: "100%",
  width: "100%",
  marginInline: "auto",
  justifyContent: "center",
  alignItems: "center",
}));

export const DrawerContainer = styled(Grid)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export const StyledDrawerIcon = styled(IconButton)<IconButtonProps>(
  ({ theme }) => ({
    display: "none",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      display: "block",
      paddingTop: '18px'
    },

  })
);

export const StyledBackIcon = styled(IconButton)<IconButtonProps>(
    ({ theme }) => ({
      marginRight: '1rem',
      color: theme.palette.secondary.main,
      [theme.breakpoints.down("md")]: {
        paddingTop: '18px'
      },
    })
);



export const StyledLoadingBackdrop = {
  zIndex:theme.zIndex.drawer + 1,
  color:theme.palette.background.default
};



export const StyledTitle = styled(Box)(
  ({ theme }) => ({
    width: "90%",
    marginInline: "15%",
    fontWeight: '700',
    fontSize: '16px',
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: '14px',
    },
  })
);
export const EndHeaderGrid = styled(Grid)<{
	component: object;
	onClick: (e: React.MouseEvent<HTMLElement>) => void;
}>(() => ({
	color: "#203040",
	cursor: "pointer",
	alignItems: "center",
	justifyContent: "center",
	padding: "0.5rem",
  border: `0.857831px solid #E0E0E0`,
  borderRadius: '50%',

}));
export const ProfileGrid = styled(Grid)<{
	component?: object;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}>(() => ({
	color: "#203040",
	cursor: "pointer",
	alignItems: "center",
	justifyContent: "center",
	padding: "0px",
}));
