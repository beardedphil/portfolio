import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Portfolio = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".transition4", {
            scrollTrigger: {
                trigger: '.transition4',
                start: "top bottom"
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .3
        });
    }, []);

    return (
        <section className="portfolio">
            <div className="portfolio-container transition4">
                <div className="portfolio-left">
                    <div className="inner">
                        <p className="subtitle">My Trusted Source</p>
                        <a href="https://www.mytrustedsource.com" className="featured-title">MyTrustedSource.com</a>
                        <p className="featured-desc">
                            My Trusted Source is a news aggregator with keyword search functionality.
                            It allows users to select which news sources they trust,
                            and only articles from those sources are displayed.
                            <br/>
                            <br/>
                            It consists of an API built using the Django REST Framework,
                            Python scripts for fetching articles and posting them to the API,
                            and a responsive React front-end.
                        </p>
                    </div>
                </div>
                <a
                    href="https://www.mytrustedsource.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="images/mytrustedsource.png" alt="My TrustedSource" />
                </a>
            </div>
            <div className="portfolio-container transition4">
                <div className="portfolio-left">
                    <div className="inner">
                        <p className="subtitle">My Trusted Source</p>
                        <a href="https://www.mytrustedsource.com" className="featured-title">MyTrustedSource.com</a>
                        <p className="featured-desc">
                            My Trusted Source is a news aggregator with keyword search functionality.
                            It allows users to select which news sources they trust,
                            and only articles from those sources are displayed.
                            <br/>
                            <br/>
                            It consists of an API built using the Django REST Framework,
                            Python scripts for fetching articles and posting them to the API,
                            and a responsive React front-end.
                        </p>
                    </div>
                </div>
                <a
                    href="https://www.mytrustedsource.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="images/mytrustedsource.png" alt="My TrustedSource" />
                </a>
            </div>
            <div className="portfolio-container transition4">
                <div className="portfolio-left">
                    <div className="inner">
                        <p className="subtitle">My Trusted Source</p>
                        <a href="https://www.mytrustedsource.com" className="featured-title">MyTrustedSource.com</a>
                        <p className="featured-desc">
                            My Trusted Source is a news aggregator with keyword search functionality.
                            It allows users to select which news sources they trust,
                            and only articles from those sources are displayed.
                            <br/>
                            <br/>
                            It consists of an API built using the Django REST Framework,
                            Python scripts for fetching articles and posting them to the API,
                            and a responsive React front-end.
                        </p>
                    </div>
                </div>
                <a
                    href="https://www.mytrustedsource.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="images/mytrustedsource.png" alt="My TrustedSource" />
                </a>
            </div>
        </section>
    );
};

export default Portfolio;
