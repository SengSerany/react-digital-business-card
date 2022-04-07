import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return(
        <footer>
            <div className="socials">
                <div className="twitter"><a href=".twitter"><FontAwesomeIcon icon={faTwitterSquare} /></a></div>
                <div className="facebook"><a href=".facebook"><FontAwesomeIcon icon={faFacebookSquare} /></a></div>
                <div className="instagram"><a href=".instagram"><FontAwesomeIcon icon={faInstagramSquare} /></a></div>
                <div className="github"><a href=".github"><FontAwesomeIcon icon={faGithubSquare} /></a></div>
            </div>
        </footer>
    )
}