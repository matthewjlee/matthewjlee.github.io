import React from 'react';

import {Link} from "react-router-dom";
import Profile from 'components/Profile';
import 'components/Sidebar.css';

const Sidebar = (
) => (
    <div className="sidebar">
        <Profile />
        <nav>
            <ul className='list'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/music">Music</Link>
                </li>
                <li>
                    <Link to="/thoughts">Thoughts</Link>
                </li>
            </ul>
        </nav>
    </div>
);

export default Sidebar;