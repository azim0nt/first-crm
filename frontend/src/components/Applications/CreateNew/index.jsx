import './style.scss'
import '../../common/PathToTab'
import { useContext ,useState } from 'react';
import { context } from '../../../store'
import PathToTab from '../../common/PathToTab';
import DragDrop from '../../common/DragDrop';


function CreateNew() {
    const { store, setStore } = useContext(context)
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div className={"create-new-wrapper "+store.theme+'-bg'}> 
                <div className="create-new-content">
                    <div className="top">
                        <h3>Project Create</h3>
                        <PathToTab parent={'Apps'} tab={'Project Create'} />
                    </div>
                    <div className="middle">
                        <div className={"form-card "+store.theme+'-cardd'}>
                            <div className="project-title cardd">
                                <h4>Project Title</h4>
                                <input className={store.theme+'-input'} type="text" placeholder='Project name'     />   
                            </div>
                            <div className="client-name cardd">
                                <h4>Client name</h4>
                                <input className={store.theme+'-input'} type="text" placeholder='Name client or company name'     />
                            </div>
                            <div className="three-inputs">
                                <div className="project-rate">
                                    <h4>Project Rate</h4>
                                    <input className={store.theme+'-input'} type="text" placeholder='Enter project Rate'     />
                                </div>
                                <div className="project-type">
                                    <h4>Project Type</h4>
                                    <select className={store.theme+'-input'}  >
                                        <option value="hourly">Hourly</option>
                                        <option value="fix-price">Fix price</option>
                                    </select>
                                </div>
                                <div className="priority">
                                    <h4>Priority</h4>
                                    <select className={store.theme+'-input'}>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                        <option value="urgent">Urgent</option>
                                    </select>
                                </div>
                            </div>
                            <div className="date">
                                <div className="project-size">
                                    <h3>Project Size</h3>
                                    <select className={store.theme+'-input'}>
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="big">Big</option>
                                    </select>
                                </div>
                                <div className="starting-date">
                                    <h3>Starting date</h3>
                                    <div id='datepick'>
                                    <input className={store.theme+'-input'} type="date"    />
                                    </div>
                                </div>
                                <div className="ending-date">
                                    <h3>Ending date</h3>
                                    <div id='datepick'>
                                    <input className={store.theme+'-input'} type="date"    />
                                    </div>
                                </div>

                            </div>
                            <div className="enter-some-details cardd">
                                <h4>Enter some Details</h4>
                                <textarea className={store.theme+'-input'}></textarea>
                            </div>
                            <div className="upload-project-file cardd">
                                <h4>Upload project file</h4>
                                <DragDrop></DragDrop>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateNew;