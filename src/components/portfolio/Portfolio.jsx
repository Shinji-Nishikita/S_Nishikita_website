import { useState, useEffect } from "react";
import "./portfolio.scss";
import { mobilePortfolio } from "../../data.js";

export default function Portfolio() {
  const [selected, setSelected] = useState("Mobile-App");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      default: setData(mobilePortfolio);
    }
  },[selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>My Portfolio</h1>
      <div className="container">
        {data.map(data => (
          <div className="item"
            onClick={() => {
              window.location.href= data.url
            }}
          >
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
