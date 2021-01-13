import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Featured = () => {
    useEffect (() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".transition2", {
            scrollTrigger: {
                trigger: '.transition2',
                start: "top bottom"
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .3
        });
    }, []);

    return (
         <section className="featured">
             <div className="left">
                 <div className="inner transition2">
                     <p className="subtitle">Featured Project</p>
                     <a
                         href="https://www.mytrustedsource.com"
                         target="_blank"
                         rel="noreferrer"
                         className="featured-title"
                     >
                         MyTrustedSource.com
                     </a>
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
             <a href="https://www.mytrustedsource.com">
                 <img className="right transition2" src="images/mytrustedsource.png" alt="My Trusted Source" />
             </a>
         </section>
    );
};

export default Featured;
