import './SummaryItem.css';

export default function SummaryItem({icon, category, score, color}) {
    return (
        <div className={"flex-group summary-item item-" + color}>   
            <div className="flex-group">
                <img src={icon} alt={category} />
                <h3>{category}</h3>
            </div>
            <p className="summary-score"><span>{score}</span> / 100</p>
        </div>
    )
}