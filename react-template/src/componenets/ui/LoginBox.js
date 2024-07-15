import * as React from 'react';
import { Button, CardActionArea, CardContent, Input, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { userLogin } from '../../services/loginService';

export default function LoginBox(){
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        console.log(data);
       // 
       const response = await userLogin(data);
       navigate('/home');
       
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
             <Card sx={{ maxWidth: 345 }} align={"center"}>
                <CardActionArea>
                    <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Username
                            </Typography>
                        <Input {...register("userName", { required: true, maxLength: 20 })} type='text'/>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Password
                            </Typography>
                        <Input {...register("password", { required: true, maxLength: 20 })} type='password'/><br/> <br/><br/> <br/>
                        <Button variant="contained" type="submit">Login</Button>
                    </CardContent>
                </CardActionArea>
            </Card>
        </form>
       

    );
}