import React from 'react';
import HireMe from '../HireMe/HireMe';

const Header = () => {
    return (
        <div className="header">
            <div className="nav-container">
                <header>
                    <a href="/" className="logo">Phil King</a>
                    <HireMe />
                </header>
                <div className="social-right">
                    <ul>
                        <li>
                            <a href="https://github.com/beardedphil" target="_blank" rel="noreferrer">
                                <img src="images/github.png" alt="Github" />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/beardedphil/" target="_blank" rel="noreferrer">
                                <img src="images/linkedin.png" alt="LinkedIn" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
