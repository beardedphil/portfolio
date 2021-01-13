import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Footer from './Footer/Footer';
import Featured from './Featured/Featured';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Featured />
            <Skills />
            <Portfolio />
            <Footer />
        </div>
    );
}

export default App;
