import { Paper, Typography } from "@mui/material";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
	<Paper sx={{mt:3}}>
		<Typography variant='h2' sx={{textTransform: 'uppercase'}} >{title}</Typography>
		{children}
	</Paper>
)

export default Section;