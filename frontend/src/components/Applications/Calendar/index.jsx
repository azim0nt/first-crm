import "./style.scss";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { useEffect, useRef, useContext } from "react";
import { context } from '../../../store/'
import PathToTab from '../../common/PathToTab'
import { useTranslation } from "react-i18next";
const INITIAL_EVENTS = [
  {
    title: "All events",
    date: new Date().toISOString().substr(0, 10)
  }
];
console.log(INITIAL_EVENTS)
export default function Calendar() {
  const draggableRef = useRef(null);
  const { store } = useContext(context);
  const { t } = useTranslation();
  useEffect(() => {
    const containerEl = document.querySelector("#events");

    if (!draggableRef.current && containerEl) {
      draggableRef.current = new Draggable(containerEl, {
        itemSelector: ".event",
        eventData: (eventEl) => {
          return {
            title: eventEl.innerText
          };
        }
      });
    }
  }, []);

  const handleEventReceive = (info) => {
    // Prevent adding duplicate events
    const newEvent = {
      title: info.event.title,
      start: info.event.start,
      allDay: info.event.allDay
    };

    info.view.calendar.addEvent(newEvent);
    info.event.remove(); // Remove the temporary event
  };

  return (
    <>
      <div className={"calendar-wrapper " + store.theme + '-bg'}>
        <div className="calendar-container">
          <div className="top">
            <h3>{t('calendar.title')}</h3> <PathToTab parent={t('calendar.path_to_tab.parent')} tab={t('calendar.path_to_tab.tab')} />
          </div>
          <div className="middle">
            <div className="section-1">
              <div className={"calendar " + store.theme + '-cardd'}>
                <div className="left">
                  <div className="draggable-events">
                    <h3>{t('calendar.draggable_events')}</h3>
                    <ul id="events">
                      <li className="event">Birthday Party</li>
                      <li className="event">Meeting With Team.</li>
                      <li className="event">Tour & Picnic</li>
                      <li className={"event"}>Tour & Picnic</li>
                      <li className={"event"}>Reporting Schedule</li>
                    </ul>
                  </div>
                </div>
                <div className="right">

                  <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialEvents={INITIAL_EVENTS}
                    editable
                    droppable
                    eventReceive={handleEventReceive}

                  />
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
