import {dateRange} from "../../data/mock";
import {differenceInDays, isEqual} from "date-fns";
import {Event} from "./Event";

const FIXED_WIDTH = 100;


const generateEvents = (items) => {
    let skipUntilPos = 0

    return dateRange.map((date, index) => {
        if (index < skipUntilPos) return;

        const event = items.find(t => isEqual(new Date(t.start), new Date(date)));

        if (!event) {
            return <div key={date} className="" style={{width: `${FIXED_WIDTH}px`}}/>
        }

        const diff = differenceInDays(event.end, event.start)
        skipUntilPos = diff + index
        const fixedStyle = { width: `${diff ? (FIXED_WIDTH * diff) : FIXED_WIDTH}px`};
        return (<Event key={event.id} event={event} style={fixedStyle} />)
    })
}


export const Lane = ({items}) => {
    return (
        <div className="timeline-lane ">
            {generateEvents(items)}
        </div>
    )

}