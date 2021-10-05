import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>My Portfolio</h1>
            <ul>
                <li>Featured</li>
                <li>Matching App</li>
                <li>Game App </li>
                <li>Bot App</li>
            </ul>
            <div className="container">
                <div className="item">
                    {/* <img src="" alt="" /> */}
                    <h3>YomiHomies</h3>
                </div>
            </div>
        </div>
    )
}
