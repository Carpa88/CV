import axios from "axios";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { IUser } from './types';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Link, Stack, Typography } from "@mui/material";
import Section from "../elements/Section";
import { IError, IResponse } from "../types";
import ErrorPage from "../elements/ErrorPage";

const UserList = () => {
  const [data, setData] = useState([] as IUser[]);
 
useEffect(()=>{
  axios('https://jsonplaceholder.typicode.com/users')
  .then((response: IResponse) => {setData(response.data)})
  .catch((error: IError) => {return(<ErrorPage status={error.response.status} />)})
}, [])

return(
  <Section title='Use API'>
  <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
  {!!data.length && data.map((item, i) => (
    <Link component={RouterLink} to={item.id.toString()} key={item.email} sx={{ textDecoration: 'none'}}>
   <ListItem alignItems="flex-start" >
    <ListItemAvatar>
      <Avatar alt="avatar">{item.name[0]}</Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={
        <Stack direction="row" justifyContent='space-between'>
          <Typography
            variant="body2"
            color="primary"
          >
            {item.name + item.username}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            {item.phone}
          </Typography>
        </Stack>
    }
      secondary={
        <Stack direction="row" justifyContent='space-between'>
          <Typography
            variant='overline'
          >
            comp.:
            <Typography
              component="span"
              variant="body2"
              color="text.primary"
            >
              {item.company.name}
            </Typography>
          </Typography>
          <Typography
            variant='overline'
          >
            email:
            <Typography
              component="span"
              variant="body2"
              color="text.primary"
            >
              {item.email}
            </Typography>
          </Typography>
        </Stack>
      }
    />
  </ListItem>
  {i !== data.length-1 && <Divider variant="inset" component="li" />}
  </Link> 
    ))}
  </List>
  </Section>
)}

export default UserList