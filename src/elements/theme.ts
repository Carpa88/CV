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
	fontSize: '2rem',
	fontWeight: 200,
	textAlign: 'start',
	letterSpacing: '1px',
	marginTop: '3rem',
	marginBottom: '1rem',
	color: theme.palette.secondary.dark,
	[theme.breakpoints.down('sm')]: {
		fontSize: '1.6rem',
		marginTop: '1rem',
		marginBottom: '0.6rem',
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '2.4rem',
	},
};

theme.typography.h3 = {
	fontSize: '1.5rem',
	fontWeight: 200,
	textAlign: 'start',
	letterSpacing: '1px',
	marginTop: '3rem',
	marginBottom: '1rem',
	color: theme.palette.common.black,
	[theme.breakpoints.down('sm')]: {
		fontSize: '1.2rem',
		marginTop: '1rem',
		marginBottom: '0.6rem',
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '1.8rem',
	},
};

theme.typography.h5 = {
	fontSize: '1.2rem',
	fontWeight: "normal",
	letterSpacing: '1px',
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
