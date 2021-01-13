import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Skills = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".transition3", {
            scrollTrigger: {
                trigger: '.transition3',
                start: "top bottom"
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .3
        });
    }, []);

    return (
        <section className="skills">
            <div className="skills-container">
                <ul>
                    <li className="transition3">
                        <div className="icon-container">
                            <img src="images/react.png" alt="React" />
                        </div>
                        <p className="skill-title">React</p>
                        <p className="featured-desc skill-desc">
                            Experience includes MyTrustedSource.com, this site,
                            and multiple courses on Udemy and Skillshare
                        </p>
                    </li>
                    <li className="transition3">
                        <div className="icon-container">
                            <img src="images/python.png" alt="Python" />
                        </div>
                        <p className="skill-title">Python</p>
                        <p className="featured-desc skill-desc">
                            Experience includes Flask, Django, and the Django REST Framework
                        </p>
                    </li>
                    <li className="transition3">
                        <div className="icon-container">
                            <img src="images/sql.png" alt="SQL" />
                        </div>
                        <p className="skill-title">SQL</p>
                        <p className="featured-desc skill-desc">
                            Experience includes both MySQL and Postgres
                            <br />
                            <br />
                            I have also worked with non-relational systems (MongoDB and Firebase)
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;
