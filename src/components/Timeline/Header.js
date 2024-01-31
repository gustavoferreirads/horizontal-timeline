import {format} from "date-fns";

export const Header = ({dateRange}) => {
    return (
        <>
            <div className="timeline-header">
                {dateRange.map((date, index) => (
                    <div key={date}
                         className={`timeline-item ${index + 1 < dateRange.length ? 'border-right' : ''}`}>
                        {format(date, 'MM/dd')}
                    </div>
                ))}
            </div>
            <div className="timeline-grid">
                {dateRange.map((date, index) => (
                    <div key={date} className="timeline-item "></div>
                ))}
            </div>
        </>
    )
}
