import React from "react";
import LoginBox from "../componenets/ui/LoginBox";
import { Grid } from "@mui/material";
export const Login = () =>{
    return(
        <div>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh' }}>
                <LoginBox/>
            </Grid>
           
        </div>
    );
}