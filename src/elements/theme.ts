import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: { main: '#e65100' },
		secondary: { 
			main: '#1565c0', 
			dark: '#000080' 
		},
	},
});

theme.typography.h2 = {
	fontSize: '2.2rem',
	fontWeight: "initial",
	textAlign: 'center',
	marginTop: '3rem',
	marginBottom: '1rem',
	color: theme.palette.secondary.dark,
	[theme.breakpoints.down('sm')]: {
		fontSize: '1.8rem',
		marginTop: '1rem',
		marginBottom: '0.6rem',
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '2.4rem',
	},
};

theme.typography.h5 = {
	fontSize: '1.2rem',
	fontWeight: "normal",
	[theme.breakpoints.down('sm')]: {
		fontSize: '0.9rem',
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '1.4rem',
	},
};

theme.typography.body1 = {
	fontSize: '1rem',
	fontWeight: "normal",
	lineHeight: '2rem',
	[theme.breakpoints.down('sm')]: {
		fontSize: '0.6rem',
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '1.4rem',
	},
};

export default theme;
