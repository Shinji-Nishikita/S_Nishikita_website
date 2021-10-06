import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import { useState, useEffect } from "react";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "matching app",
            title: "Matching App"
        },
        {
            id: "game app",
            title: "Game App"
        },
        {
            id: "bot app",
            title: "Bot App"
        },
    ];

    return (

        <div className="portfolio" id="portfolio">
            <h1>My Portfolio</h1>
            <ul>
                {list.map((item) =>
                (<PortfolioList
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected} />)
                )}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://i.ibb.co/MGsf3mK/YH-Logo-blue.png" alt="" />
                    <h3>YomiHomies</h3>
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/MGsf3mK/YH-Logo-blue.png" alt="" />
                    <h3>YomiHomies</h3>
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/MGsf3mK/YH-Logo-blue.png" alt="" />
                    <h3>YomiHomies</h3>
                </div>
            </div>
        </div>
    )
}
