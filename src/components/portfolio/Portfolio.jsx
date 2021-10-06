import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { mobilePortfolio, webPortfolio } from "../../data.js";

export default function Portfolio() {
    const [selected, setSelected] = useState("Mobile-App");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "mobile-app",
            title: "📱Mobile-App"
        },
        {
            id: "web-app",
            title: "🖥Web-App"
        },
    ];

    useEffect(() => {

        switch (selected) {
            case "mobile-app":
                setData(mobilePortfolio);
                break;
            case "web-app":
                setData(webPortfolio);
                break;
            default:
                setData(mobilePortfolio);
        }
    },[selected])

    return (

        <div className="portfolio" id="portfolio">
            <h1>My Portfolio</h1>
            <ul>
                {list.map((item) =>
                (<PortfolioList
                    id={item.id}
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected} />)
                )}
            </ul>
            <div className="container">
                {data.map(data => (
                    <div className="item">
                        <img
                            src={data.img}
                            alt=""
                        />
                        <h3>{data.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
