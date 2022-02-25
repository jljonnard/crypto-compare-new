import React from "react";

import MainSection from "./MainSection";
import Navigation from "./Navigation";
import Header from "./Header";

const App = () => {
    return (
        <div>
            <a
                className="code"
                href="https://github.com/jljonnard/crypto-compare"
                target="_blank"
                rel="noopener noreferrer"
            >
                Consulter le code de l'application sur GitHub
            </a>
            <Header />
            <div className="main wrapper">
                <Navigation />
                <MainSection />
            </div>
        </div>
    );
}

export default App;
