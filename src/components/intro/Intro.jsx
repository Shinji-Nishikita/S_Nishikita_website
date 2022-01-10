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
            strings: ["Software Engineer", "Sales", "Street Dancer"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                    <img src="assets/IMG_0334 3.jpg" alt="" />
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Shinji Nishikita</h1>
                    <h2>I'm a <span ref={textRef}></span></h2>
                </div>
                <a href="portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
