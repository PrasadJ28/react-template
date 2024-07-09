import { ThemeProvider } from "@mui/material";
import React, { Suspense } from 'react';
import './App.css';
import { appTheme } from "./style/theme/appTheme";

import { Outlet } from "react-router-dom";
import { Provider } from 'react-redux';
import appStore from "./store/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <ThemeProvider theme={appTheme}>
        <div className="App">
          <main>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
