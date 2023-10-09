import { Grid, Card, Typography, alpha } from "@mui/material";
import { skillsData } from "./constants";
import Section from "../elements/Section";

const Skills = () => (
	<Section title='Skills'>
		<Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
			{skillsData.map(item => (
				<Grid item xs={12} sm={6} md={4} key={item}>
					<Card sx={theme =>({ display: 'flex', mr: 4, mb: 4, px: 3, py: 2, backgroundColor: alpha(theme.palette.secondary.light, 0.5) })}>
						<Typography>{item}</Typography>
					</Card>
				</Grid>
			))}
		</Grid>
	</Section>
)

export default Skills;