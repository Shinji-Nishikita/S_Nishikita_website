import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        // console.log(textRef.current)
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Sales", "Dancer"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/IMG_2383.jpeg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Shinji Nishikita</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
