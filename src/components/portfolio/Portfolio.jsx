import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, } from "react-router-dom";
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
      <Router>
        <h1>My Portfolio</h1>
        <div className="container">
          {data.map(data => (
            <a className="item" href={data.url}>
              <Switch>
                <img
                  src={data.img}
                  alt=""
                  />
              </Switch>
              <h3>{data.title}</h3>
            </a>
          ))}
        </div>
      </Router>
    </div>
  );
}
