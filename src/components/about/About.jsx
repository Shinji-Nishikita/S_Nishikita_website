import "./about.scss";

export default function About() {
    return (
        <div className="about" id="about">
            <div className="left">
                <h1>About me</h1>
                <br></br>
                <h2>
                    I'm a software engineer with extensive sales experience.
                    <br></br>
                    I started learning programming by myself while working in sales. After I left my job, joined Code Chrysalis, a 3 month full-time coding bootcamp, where I learned CS, data structure and full-stack engineering through some projects with international members.
                    <br></br>
                    <br></br>
                    I'm strongest in PERN stack.
                    <br></br>
                    (JavaScript/React.js/Node.js/Express.js/PostgreSQL)
                </h2>
                <h2>
                </h2>
            </div>
            <div className="right">
                {/* <div className="imgContainer"> */}
                    <img src="assets/IMG_3467 4.JPG" alt="" />
                {/* </div> */}
            </div>
        </div>
    )
}
