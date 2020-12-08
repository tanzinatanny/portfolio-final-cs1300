import React from "react";
import separator from "../../images/separator-line.png";

function HeroArea() {
    const separator_style = {
        marginTop: 50,
    }
    return (
        <div className="title">
            <h1>Mr. John Doe</h1>
            <span>UI/UX Student || Developer</span>
            <div>
                <img alt="" src={separator} style={separator_style}/>
            </div>
        </div>
    );
}

export default HeroArea;
