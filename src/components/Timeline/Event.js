export const Event = ({event, style}) => {
    return (
        <div className="timeline-event " style={style}>
            <p className="timeline-title">{event.name}</p>
        </div>
    );
};
