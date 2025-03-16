import React, { useState } from "react";
import '@/styles/index.css'; 

const TrafficLight = () => {
    const [color, setColor] = useState("red");

    return (
        <div className="traffic-light-container">
            <div className="traffic-light-pole"></div>
            <div className="container">
                <div
                    className={`light ${color === "red" ? "selected" : ""}`}
                    style={{ backgroundColor: "red" }}
                    onClick={() => setColor("red")}
                ></div>
                <div
                    className={`light ${color === "yellow" ? "selected" : ""}`}
                    style={{ backgroundColor: "yellow" }}
                    onClick={() => setColor("yellow")}
                ></div>
                <div
                    className={`light ${color === "green" ? "selected" : ""}`}
                    style={{ backgroundColor: "green" }}
                    onClick={() => setColor("green")}
                ></div>
            </div>
        </div>
    );
};

export default TrafficLight;
