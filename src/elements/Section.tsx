import { Paper, Typography, PaperProps } from "@mui/material";

const Section = ({ title, children, ...props }: { children: React.ReactNode; title?: string; props?: PaperProps}) => (
	<Paper sx={{mt:3, px: 2}} elevation={6} {...props}>
		{title && <Typography variant='h2' sx={{textTransform: 'uppercase'}} >{title}</Typography>}
		{children}
	</Paper>
)

export default Section;