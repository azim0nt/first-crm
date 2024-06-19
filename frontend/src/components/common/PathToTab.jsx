import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import './PathToTab.scss'
function PathToTab(props) {
  return (
    <>
      <div className="path-to-tab-wrapper">
        <div className="path-to-tab-content">
          <span><Link to={'/dashboard_01'}><FaHome color="#5c61f2" size={20} /></Link> / <span id="parent">{props.parent} </span>/ <span id="tab">{props.tab}</span></span>
        </div>
      </div>
    </>
  );
}

export default PathToTab;