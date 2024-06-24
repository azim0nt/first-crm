import './style.scss'
import PathToTab from '../../common/PathToTab';
import { useContext } from 'react';
import { context } from '../../../store';
import { Link } from 'react-router-dom';
import projectData from '../../../db/projectData.json'
function ProjectList() {
    const {store, setStore} = useContext(context);
    const colors = ['#5c61f2','#ff9766','#61ae41','#44a8d7', '#e7ae2f','#f81f58']
    return ( 
        <>
        <div className="project-list-wrapper" style={{backgroundColor:store.theme.backBgColor, color:store.theme.textColor}}>
            <div className="project-list-content">
                <div className="top">
                    <h3>Project List</h3> <PathToTab parent={'Project'} tab={'Project List'}/>
                </div>
                <div className="middle">
                    <div className="section-1">
                        <div className="filter-card" style={{backgroundColor:store.theme.bgColor}}>
                            <div className="left">
                                <button style={{color:store.theme.textColor}} className="btn 1">All</button>
                                <button style={{color:store.theme.textColor}} className="btn 2">Doing</button>
                                <button style={{color:store.theme.textColor}} className="btn 3">Done</button>
                            </div>
                            <div className="right">
                                <Link to={'/project_create'} className="blue-btn">
                                    Create New Project
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="section-2">
                        <div className="projects-board-card" style={{backgroundColor:store.theme.bgColor}}>
                            {
                                projectData.map((project, i) =>{
                                    
                                    return (
                                        <div className={`project ${i}`} key={i}  style={{backgroundColor:store.theme.backBgColor}}>
                                            <div className="top-part">
                                                <div><h4>{project.project}</h4> <span style={{backgroundColor:colors[i]}}>Doing</span></div> 
                                                <div><span className='circle'></span><p className="where">{project.where}</p></div>
                                            </div>
                                            <div className="middle-part">
                                                <p className="desc">
                                                    {project.desc}
                                                </p>
                                                <div className="statistics">
                                                    <div><p>Issues</p><p style={{color:colors[i]}}>{project.Issues}</p></div>
                                                    <div><p>Resolved</p><p style={{color:colors[i]}}>{project.resolved}</p></div>
                                                    <div><p>Romment</p><p style={{color:colors[i]}}>{project.comment}</p></div>
                                                </div>
                                            </div>
                                            <div className="bottom-part">
                                                <p>{project.progress}%</p>
                                                <div className='progress'>
                                                    <div style={{width:`${project.progress}%`, backgroundColor:colors[i]}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default ProjectList;