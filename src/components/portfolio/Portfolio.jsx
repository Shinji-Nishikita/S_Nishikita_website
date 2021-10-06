import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>My Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Matching App</li>
                <li>Game App </li>
                <li>Bot App</li>
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
