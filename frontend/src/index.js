import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AllRecipes from "./pages/AllRecipes";
import Questionaire from "./pages/Questionaire";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="all-recipes" element={<AllRecipes />} />
                    <Route path="questionaire" element={<Questionaire />} />
                    <Route path="register" element={<Register />} />
                    <Route path="sign-in" element={<SignIn />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
