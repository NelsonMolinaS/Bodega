import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoggedProvider } from "./context/loggedContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <LoggedProvider>
                <App />
            </LoggedProvider>
        </BrowserRouter>
    </React.StrictMode>
);
