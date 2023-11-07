import { Card, CardMedia, CardContent, alpha, Typography } from "@mui/material";

const STyp = ({ children }: { children: string }) => (<Typography gutterBottom variant="h5">{children}</Typography>)

const TopBanner = () => (
	<Card sx={{ display: 'flex' }}>
		<CardMedia
			sx={{ height: { xs: 160, md: 340 }, width: '100%' }}
			image="../../assets/fall.jpg"
			title="fall"
		>
			<CardContent
				sx={theme => ({
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around',
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
)

export default TopBanner;

