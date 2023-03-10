import { createTheme, Theme } from "@mui/material/styles";
/**
 * The themeing of the web application
 */
export const mainTheme: Theme = createTheme({
	typography: {
		fontFamily: ["Poppins", "sans-serif"].join(","),
		fontWeightLight: 100,
		fontWeightRegular: 400,
		fontWeightMedium: 600,
		allVariants: {
			color: "#000",
		},
	},
	palette: {
		primary: {
			main: "#000000",
		},
		secondary: {
			main: "#dd9933",
		},
		divider: "#939696",
		background: {
			default: "#DADBE8",
		},
	},
	components: {
		MuiIconButton: {
			styleOverrides: {
				root: {
					padding: "15px",
				},
			},
		},
		MuiTooltip: {
			styleOverrides: {
				tooltipArrow: {
					"& .MuiTooltip-arrow": {
						color: "#C1C1C1",
					},
				},
				tooltipPlacementTop: {
					height: "75px",
					width: "250px",
					color: "black",
					backgroundColor: "#C1C1C1",
					boxShadow: "none",
				},
			},
		},
		MuiButton: {
			variants: [
				{
					props: { variant: "contained" },
					style: {
						color: "#ffffff",
						height: "100%",
						maxHeight: "60px",
						borderRadius: "0",
					},
				},
			],
		},
	},
});

mainTheme.typography.fontFamily = "'Poppins', sans-serif";

mainTheme.typography.h1 = {
	fontFamily: "'Poppins', sans-serif",
	fontSize: "2.5rem",
	fontWeight: "100",
};

mainTheme.typography.h2 = {
	fontFamily: "'Poppins', sans-serif",
	fontSize: "2rem",
	fontWeight: "400",
};

mainTheme.typography.h3 = {
	fontFamily: "'Poppins', sans-serif",
	fontSize: "1.6rem",
	fontWeight: "400",
};

mainTheme.typography.h4 = {
	fontFamily: "'Poppins', sans-serif",
	fontSize: "0.9rem",
	fontWeight: "bold",
};

mainTheme.typography.body1 = {
	fontFamily: "'Poppins', sans-serif",
	fontWeight: "400",
	lineHeight: "1.4",
};
