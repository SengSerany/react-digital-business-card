import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Header() {
    return (
        <header>
            <div className="generalInfos" >
                <h1>Sérany Seng</h1>
                <h2>Developper Fullstack</h2>
                <h5>Personal site soon</h5>
            </div>
            <div className="links">
                <button className="email" href="#"><FontAwesomeIcon icon={faEnvelope} /> Email</button>
                <button className="linkedin" href="#"><FontAwesomeIcon className="linkedinIcon" icon={faLinkedin}/> Linkedin</button>
            </div>
        </header>
    )
}