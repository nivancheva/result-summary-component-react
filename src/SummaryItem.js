import data from './data.json';

export default function SummaryItem({data}) {

    return (
        <div>   
            <div className="flex-group">
                <img src={data.icon}/>   
                <h3>{data.category}</h3>
            </div>
            <p className="summary-score"><span>{data.score}</span> / 100</p>
        </div>
    )
}