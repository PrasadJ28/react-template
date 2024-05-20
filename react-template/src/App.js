import { ThemeProvider } from "@mui/material";
import React, { Suspense } from 'react';
import './App.css';
import { appTheme } from "./style/theme/appTheme";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <div className="App">
          
      
        <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet/>
                    
                </Suspense>
        </main>
        </div>
    </ThemeProvider>
   
  );
}

export default App;
