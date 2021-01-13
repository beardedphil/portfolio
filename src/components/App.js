import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Footer from './Footer/Footer';
import Featured from './Featured/Featured';
import Skills from './Skills/Skills';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Featured />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;
