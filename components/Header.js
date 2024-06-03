import React from "react";
import trollFace from "../images/troll-face.png"; // Make sure you have an image in the specified path

export default function Header() {
    return (
        <header className="header">
            <img src={trollFace} alt="Troll Face" className="header--image" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    );
}