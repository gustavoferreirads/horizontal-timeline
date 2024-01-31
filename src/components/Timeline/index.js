import {Header} from "./Header";
import {Lane} from "./Lane";
import {useZoom} from "../../hooks/useZoom";

export const Timeline = ({timeline, dateRange}) => {
    const {styles, zoomIn, zoomLevel, zoomOut} = useZoom()

    return (
        <div className="timeline">
            <div className="header">
                <h3>Timeline</h3>
                <div className="zoom-content">
                    <button className="zoom-button" onClick={zoomIn}>+</button>
                    <p>{zoomLevel}</p>
                    <button className="zoom-button" onClick={zoomOut}>-</button>
                </div>
            </div>

            <div style={styles}>
                <Header dateRange={dateRange}/>
                <div className="timeline-content">
                    {timeline.map(items => (
                        <Lane items={items}/>
                    ))}
                </div>
            </div>
        </div>
    );
};
