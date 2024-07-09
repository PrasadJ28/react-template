import React from "react";
import NavBar from "../componenets/ui/NavBar";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {incrementAction, decrementAction} from '../store/reducers/dashboard/dashBoardReducer'




function Layout() {

    const dispatch = useDispatch();

    const counter = useSelector((state) => state.counter?state.counter.value:0);
    return (
        <div>
            <NavBar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>Hello</div>
            <div>{counter}</div>
            <Button onClick={()=>dispatch(incrementAction())}>Increment</Button>
            <Button onClick={()=>dispatch(decrementAction())}>Decrement</Button>
        </div>
    );
}
export default Layout;