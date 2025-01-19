import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import './index.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS with Popper.js
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
        <AuthProvider>
        <BrowserRouter future={{ v7_relativeSplatPath: true }} basename="/PortfolioGenerator/">
                <App />
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);
