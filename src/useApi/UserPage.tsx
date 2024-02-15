import { useEffect, useState } from "react";
import Section from "../elements/Section";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import { IUser } from "./types";
import { Button } from "@mui/material";
import UserPageItem from "./UserPageItem";
import { ArrowBackIosNewOutlined }  from '@mui/icons-material';
import ErrorPage from "../elements/ErrorPage";
import { IError } from '../types';

const UserPage = () => {
    const  { userId } = useParams();
    const [data, setData] = useState({} as IUser);

    useEffect(() => {
      if(userId)
        axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => setData(response.data as IUser))
        .catch((error: IError) => {return <ErrorPage status={error.response.status} />})
    }, [userId]);  
    
    if (!Object.keys(data).length) return (<ErrorPage title='Ждем данные...' />)
        
    return(
      <Section title={data.name + " " + data.username}>
        <UserPageItem title='company' value={data.company.name} />
        <UserPageItem title='phone' value={data.phone} />
        <UserPageItem title='adress' value={data.address.suite} />
        <UserPageItem title='email' value={data.email} />
        <UserPageItem title='website' value={data.website} />
        <UserPageItem title='id' value={data.id} />
        <Button component={Link} to='/api' startIcon={<ArrowBackIosNewOutlined />} sx={{mt: 4, pl: 0}}>Назад</Button>
      </Section>
    )
}

export default UserPage;