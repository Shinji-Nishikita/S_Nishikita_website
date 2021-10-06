import "./portfolioList.scss"

export default function PortfolioList({title, active, setSelected}) {
    return (
        <li className="portfolioList">
            {title}
        </li>
    )
}
