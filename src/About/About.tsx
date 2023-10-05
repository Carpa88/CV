import { alpha, Card, CardMedia, CardContent, Typography } from "@mui/material";

const STyp = ({ children }: { children: string }) => (<Typography gutterBottom variant="h5" sx={{ mb: 3 }}>{children}</Typography>)

const About = () => (
	<>
		<Card sx={{ display: 'flex' }}>
			<CardMedia
				sx={{ height: { xs: 140, md: 340 }, width: '100%' }}
				image="../../assets/fall.jpg"
				title="green iguana"
			>
				<CardContent
					sx={theme => ({
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'end',
						height: '100%',
						color: theme.palette.common.white,
						backgroundColor: alpha(theme.palette.common.black, 0.5),
						maxWidth: { xs: '100%', md: '50%' },
						boxShadow: '2px 1px 5px rgba(0, 0, 0, 0.5)',
					})}>
					<STyp>12 years in IT: 10 years as BA and 2 years as Developer</STyp>
					<STyp>Finance, Medicine, Trading platforms domains </STyp>
					<STyp>ReactJS, Javascript, HTML5, CSS3, MaterialUI, TypeScript technologes</STyp>
				</CardContent>
			</CardMedia>
		</Card>
		<Typography variant="h2">About</Typography>
		<Typography variant='body2' id='about' sx={{maxWidth:{sx: '100%', md: '80%'}}}>
			Highly motivated and adaptable Software Engineer with a strong background 12 years in IT (10 years as BA and 2 years as Developer). Seeking opportunities to utilize my technical expertise and problem-solving skills to contribute to innovative projects and drive software development success.
		</Typography>
	</>
)

export default About;