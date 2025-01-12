import React from "react";
import Herobanner from "./herobanner";
import Revolutionizing from "./revolutionizing";
import Welcome from "./welcome";
import Healthcare from "./healthcare";
export default function Home() {
    return (
        <div className="home">
            <Herobanner/>
            <Revolutionizing/>
            <Welcome/>
            <Healthcare/>
        </div>
    )
}