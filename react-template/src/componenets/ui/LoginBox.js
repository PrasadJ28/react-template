import * as React from 'react';
import { Button, CardActionArea, CardContent, Input, Typography } from "@mui/material";
import Card from '@mui/material/Card';

export default function LoginBox(){

    return (
        <Card sx={{ maxWidth: 345 }} align={"center"}>
            <CardActionArea>
                <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Username
                        </Typography>
                    <Input type='text'/>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Password
                        </Typography>
                    <Input type='password'/><br/> <br/><br/> <br/>
                    <Button variant="contained">Login</Button>
                </CardContent>
            </CardActionArea>
        </Card>

    );
}