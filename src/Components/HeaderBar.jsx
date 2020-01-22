import React from 'react';
import './header-bar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSms } from '@fortawesome/free-solid-svg-icons'

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const HeaderBar = (props) => {
    return (
        <div className="header-bar">

            <ul>
                    <li>
                        <Link to="/home" className="link">Recent News</Link>
                    </li>
                    <li>
                        <Link to="business-news" className="link">Business News</Link>
                    </li>
                    <li>
                        <Link to="tech-news" className="link">Tech News</Link>
                    </li>
                    <li>
                        <Link to="wall-street" className="link">Wall Street</Link>
                    </li>
                    <i class="fas fa-bars" onClick={props.enableMenu}></i>
            </ul>

            <div className="social-icon">
                <FontAwesomeIcon icon={faSms} className="sms-icon" />
                <a href={props.contact}>Contact</a>
            </div>

        </div>
    );
};

export default HeaderBar;