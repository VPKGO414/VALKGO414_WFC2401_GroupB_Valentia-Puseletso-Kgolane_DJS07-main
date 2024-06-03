import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import "./style.css"; // Ensure this import is added to apply styles

export default function App() {
  return (
    <div>
      <Header />
      <Meme />
    </div>
  );
}
