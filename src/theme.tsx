import { createTheme } from "@mui/material";
import {arSA} from '@mui/material/locale';
export const theme = createTheme({
	components: {
		MuiButton: {
		styleOverrides: {
			root: {
				height: '47px!important',
				textTransform: "none",
				borderRadius:' 81.3464px',
				padding: "14.6423px 13.0154px",
				fontWeight: 700,
				fontSize: "16px",
				border: "1px solid #00000",
				"&.Mui-disabled": {
					opacity: "0.5",
					color: '#FFFFFF'

				},
				"&:hover": {
					color: "#00263A",
				},
			},
		},
		variants: [
			{
				props: { variant: "primary" },
				style: {
					backgroundColor: "#00263A",
					color: "#FFFFFF",
				},
			},

			{
				props: { variant: "text" },
				style: {
					fontWeight: '600',
                   fontSize: '1rem',
				   backgroundColor: 'transparent',
					border: "none",
				},
			},
			{
				props: { variant: "secondary" },
				style: {
					backgroundColor: "#00bbb4",
					color: "#FFFFFF",
				},
			},
			{
				props: { variant: "danger" },
				style: {
					backgroundColor: "transparent",
					color: "#2E8BC0",
					borderColor: '#2E8BC0',
					"&:hover": {
						color: "#2E8BC0",
					},
				},
			},
		],
	},
		MuiInputBase: {
styleOverrides: {
	'root': {
		background: 'white',
		fontSize: '14PX'
	}
}
}
	},
	palette: {
		primary: {
			main: "#ec2427",
			light: "#ec2427"
		},
		secondary: {
			main: "#00384b",
			light: '#00384b',
			S300: "#666666",
			lightGray: '#E3E4E8',
			grayScale900: '#212121',
			grayScale50: '#FAFAFA',
			grayScale500: '#9E9E9E',
			grayScale100: '#F5F5F5',
			grayScale300: '#E0E0E0',
			grayScale200: '#EEEEEE',
			grayScale800: '#424242',
			naturalColor: '#B2B2B2',
			natural3Color: '#858688',
			blueB: "#B1E3FF",
			purpleA: "#B1E3FF",
			greenA: "#A1E3CB",
			yellow: "#FFE999",
		},
		background: {
			paper: "#FFFFFF",
		},

	},
	typography: {
		fontFamily: "Urbanist",
	},


}, arSA);
declare module "@mui/material/styles" {
  interface PaletteColor {
		S300?: string;
		lightGray?: string
		grayScale900?: string
		grayScale50?: string
		grayScale500?: string
		grayScale100?: string
		grayScale300?: string
		grayScale200?: string
		grayScale800?: string
		naturalColor?: string
		natural3Color?: string
		purpleA?: string
		greenA?: string
		blueB?: string
		yellow?: string
  }
  interface PaletteColorOptions {
		main: string;
		light?: string;
		S300?: string;
		lightGray?: string
		grayScale900?: string
		grayScale50?: string
		grayScale500?: string
		grayScale100?: string
		grayScale300?: string
		grayScale200?: string
		grayScale800?: string
		naturalColor?: string
		natural3Color?: string
		purpleA?: string
		greenA?: string
		blueB?: string
		yellow?: string
  }
}
declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		primary: true;
		secondary: true;
		lightPrimary: true
		danger: true
		text: true
	}
}
