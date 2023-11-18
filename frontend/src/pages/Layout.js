import { Outlet, Link } from "react-router-dom";
import React from "react";

const Layout = () => {
    return (
        <>
            <div class="navbar bg-base-300">
                <div class="flex-1">
                    <Link to="/" class="btn btn-ghost normal-case text-xl">Belly banter bites</Link>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal px-1">
                        <li><Link to="/all-recipes">All recipes</Link></li>
                        <li><Link to="/questionaire">Questionaire</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/sign-in">Sign in</Link></li>
                    </ul>
                </div>
            </div>

            <Outlet />
        </>
    )
};

export default Layout;
