import React from 'react';
import HireMe from '../HireMe/HireMe';

const Footer = () => {
    return (
        <div className="footer">
            <div className="nav-container">
                <footer>
                    <a href="/" className="logo">Phil King</a>
                    <div className="social-left">
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
                    <HireMe />
                </footer>
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

export default Footer;
