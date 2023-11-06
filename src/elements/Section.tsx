import { Paper, Typography, PaperProps } from "@mui/material";

const Section = ({ title, children, ...props }: { title: string; children: React.ReactNode; props?: PaperProps}) => (
	<Paper sx={{mt:3, p: 2}} elevation={6} {...props}>
		<Typography variant='h2' sx={{textTransform: 'uppercase'}} >{title}</Typography>
		{children}
	</Paper>
)

export default Section;