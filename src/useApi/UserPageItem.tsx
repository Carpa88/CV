import { Grid, Typography } from "@mui/material";

const UserPageItem = ({title, value}: {title: string; value: string | number}) => (
	<Grid container spacing={2}>         
		<Grid item xs={4}>
			<Typography variant="caption" color={theme => theme.palette.grey[400]}>{title}</Typography>
		</Grid>
		<Grid item xs={8}>
			<Typography variant="h5" color='text.primary'>{value}</Typography>
		</Grid>
	</Grid>
)

export default UserPageItem;