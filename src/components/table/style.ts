import { alpha, styled } from '@mui/material/styles';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import {Grid, Theme, Typography} from "@mui/material";

const ODD_OPACITY = 0.2;

// CHANGE COLORS

export const StripedDataGrid = styled(DataGrid)<{ pointer?: boolean }>(({ theme,pointer }) => ({
  '& .super-app-theme--cell': {
    height: "75px",
    padding: "16px 24px 16px 24px",
    lineHeight: "26px",
    letterSpacing: "0em",
    cursor:pointer ? 'pointer': 'default',
    color: theme.palette.text.primary,
    [theme.breakpoints.up("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  '& .super-app-theme--header': {
    lineHeight: "26px",
    letterSpacing: "0em",
    fontWeight: 'bold',
    [theme.breakpoints.up("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.background.paper,
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.secondary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
          theme.palette.action.selectedOpacity +
          theme.palette.action.hoverOpacity,
        ),
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },

  [`& .${gridClasses.row}.odd`]: {
    backgroundColor: theme.palette.background.default,
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
          theme.palette.action.selectedOpacity +
          theme.palette.action.hoverOpacity,
        ),
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
}));
export const StyledCustomTable = styled(Grid)(({ theme }) => ({
  "& .MuiDataGrid-root":{
   border:'none',




  },

  '& .MuiDataGrid-cell:focus': {
    outline: 'none!important',


    },
  "& .MuiDataGrid-virtualScrollerContent":{
     borderWidth: "1px",
     borderColor: theme.palette.divider,
     borderStyle: "solid",
    borderTop: "none",


    backgroundColor: theme.palette.background.paper,
   },
   "& .MuiDataGrid-columnHeaders": {
    borderWidth: "1px",
    backgroundColor: theme.palette.background.default,
    borderStyle: "solid",
    borderColor: theme.palette.divider,
     borderTopLeftRadius:'12px',
     borderTopRightRadius:'12px'


   },
  "& .MuiTypography-root": {
    color: theme.palette.text.primary,
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: "26px",
    letterSpacing: "em",
  },
}));

export const StyledOriginalTable = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const StyledEmptyGrid = styled(Grid)<{}>(({ theme }) => ({
  zIndex: 1,
  justifyContent: 'center',
  flexDirection: 'column'
}))

export const EmptyOverlayGridStyle = styled(Typography)(({theme}) => ({
  fontWeight: '400',
  color: theme.palette.text.disabled,
  fontSize: '1rem',
  textAlign: 'center',
  [theme.breakpoints.down("md")]: {
    fontSize: '12px',
  },
}));
