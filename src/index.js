import {render} from 'react-dom';
import {Timeline} from "./components/Timeline";
import "./index.css"
import {dateRange, timelineLaneItems} from "./data/mock";

const App = () => (
    <div>
         <Timeline dateRange={dateRange} timeline={timelineLaneItems} />
    </div>
);

render(<App />, document.getElementById('root'));
