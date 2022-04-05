import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
    return(
        <div className="app">
            <Hero />
            <Header />
            <Main />
        </div>
    )
}