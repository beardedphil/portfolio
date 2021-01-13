import React from 'react';

const AnimatedScroller = () => {
    return (
        <div className="animated-scroller">
            <svg className="scroll stagger1" width="44" height="90" viewBox="0 0 44 90">
                <g id="Group_3" data-name="Group 3" transform="translate(-250 -540)">
                    <g id="Group_2" data-name="Group 2">
                        <g id="Rectangle_3" data-name="Rectangle 3" transform="translate(250 540)" fill="none"
                           stroke="#e5e5e5" strokeWidth="6">
                            <rect width="44" height="90" rx="22" stroke="none"/>
                            <rect x="3" y="3" width="38" height="84" rx="19" fill="none"/>
                        </g>
                    </g>
                    <g className="circle" id="Ellipse_1" data-name="Ellipse 1" transform="translate(259 552)"
                       fill="#e5e5e5" stroke="#e5e5e5" strokeWidth="1">
                        <circle cx="13" cy="13" r="13" stroke="none"/>
                        <circle cx="13" cy="13" r="12.5" fill="none"/>
                    </g>
                </g>
            </svg>
        </div>
    );
}

export default AnimatedScroller;
