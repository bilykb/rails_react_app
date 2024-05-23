import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {

    return (
        <>
            <NavLink
                to="/"
                end
            >
                Home
            </NavLink>
            <br />
            <NavLink
                to="/new"
            >
                New Post
            </NavLink>
        </>
    );
};