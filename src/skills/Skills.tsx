import React from "react";
import { alpha, Grid, Card, Typography, Button, CardActions, CardContent, IconButton, Collapse } from "@mui/material";
import { skillsData } from "./constants";
import Section from "../elements/Section";
import { ExpandMore, ExpandLess } from '@mui/icons-material';

type IExpands = Record<string, boolean>

const Skills = () => {
	const expandedSkillsData: IExpands =
		skillsData
			.map(({ title }) => (title))
			.reduce((obj, cur) => {obj[cur] = false; return obj }, {} as IExpands)

	const [expanded, setExpanded] = React.useState<IExpands>(expandedSkillsData);
	
	console.log('start', expanded);
	
	const handleExpandClick = (title: string) => {
		setExpanded({...expanded, [title]: !expanded[title]});
		console.log('onClick', expanded);
	};
	return (
		<Section title='Skills'>
			<Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row' }}>
				{skillsData.map(({title, preview, text}) => (
					<Grid item xs={12} sm={6} md={4} key={title}>
						<Card sx={{ display: 'flex', flexDirection: 'column', maxWidth: 345, backgroundColor: theme => alpha(theme.palette.common.black, 0.05) }}>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									{title}
								</Typography>
								<Typography variant="body2" color="text.secondary" sx={{ height: '81px' }}>
									{preview}
								</Typography>
							</CardContent>
							<CardActions sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto' }}>
								<Button size="small">Share</Button>
								<IconButton size="small" onClick={()=> handleExpandClick(title)}>
									{text && (expanded[title] ? <ExpandLess /> : <ExpandMore />)}
								</IconButton>
							</CardActions>
							<Collapse in={expanded[title]} timeout="auto" unmountOnExit>
								<CardContent>
									<Typography variant="body2" color="text.secondary" >
										{text}
									</Typography>
								</CardContent>
							</Collapse>
						</Card>
					</Grid>
				))}
			</Grid>
		</Section>
	)
}

export default Skills;