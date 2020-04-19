import React from 'react';
import './mobile-menu-list.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const MobileMenuList = () => {
    return (
        <div className="mobile-menu-list" data-aos="fade" data-aos-duration="1000">
            <ul>
                    <li>
                        <Link to="/">Recent News</Link>
                    </li>
                    <li>
                        <Link to="business-news">Business News</Link>
                    </li>
                    <li>
                        <Link to="tech-news">Tech News</Link>
                    </li>
                    <li>
                        <Link to="wall-street">Wall Street</Link>
                    </li>
            </ul>

        </div>
    );
};

export default MobileMenuList;