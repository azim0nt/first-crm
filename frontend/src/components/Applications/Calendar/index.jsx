import React, { Component,useContext } from "react";
import {context} from '../../../store'
import PathToTab from '../../common/PathToTab'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import './style.scss'
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class CalendarBody extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Some title",
      },
    ],
  };

  onEventResize = (data) => {
    const { start, end } = data;

    this.setState((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: [...state.events] };
    });
  };

  onEventDrop = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div className="B">
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}
function BasicCalendar() {
    const {store} = useContext(context)
    return ( 
        <div className={"calendar-wrapper "+store.theme+'-bg'}>
            <div className="calendar-container">
                <div className="top">
                    <h3>Calendar</h3>
                    <PathToTab parent={'Apps'} tab={'Calendar Basic'}/>
                </div>
            <div className="middle">
                <div className={"calendar-card "+store.theme+'-cardd'}>
                    <CalendarBody/>
                </div>
            </div>
            </div>
        </div>
     );
}

export default BasicCalendar;

