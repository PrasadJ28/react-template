import React, { useRef, useState } from "react";
import NavBar from "../componenets/ui/NavBar";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "../store/actions/dashboardActions";




function Layout() {
   // const [counter, incrementCounter]=useState(0);
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const counter = useSelector(state => state.counter)
    return (
        <div>
            <NavBar/>
            <div>{counter}</div>
            <Button onClick={(counter) => dispatch(incrementCounter)} label={"Button"}/>
            <Button onClick={(counter) => dispatch(decrementCounter)} label={"Button"}/>
        </div>
    );
}
export default Layout;