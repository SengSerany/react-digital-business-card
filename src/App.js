import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
    return(
        <div className="app">
            <Hero />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}