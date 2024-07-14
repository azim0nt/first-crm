import './style.scss'
import PathToTab from '../../common/PathToTab';
import { useContext, useState } from 'react';
import { context } from '../../../store';
import { Link } from 'react-router-dom';
import { IoIosCloseCircleOutline } from "react-icons/io";
import {useTranslation} from 'react-i18next'
function ProjectList() {
    const { store, setStore } = useContext(context);
    const [isOpen, setIsOpen] = useState('close')
    const [warning, setWarning] = useState(0)
    const colors = ['#5c61f2', '#ff9766', '#61ae41', '#44a8d7', '#e7ae2f', '#f81f58', '#5c61f2', '#ff9766', '#61ae41', '#44a8d7', '#e7ae2f', '#f81f58']
    const [projectData, setProjectData] = useState([
        {
            "project": "Enzo admin Design",
            "where": "Themeforest, australia",
            "desc": "Enzo Admin is a full featured, multipurpose, premium bootstrap admin template.",
            "Issues": 12,
            "resolved": 5,
            "comment": 7,
            "progress": 70
        },
        {
            "project": "Govo admin Design",
            "where": "Envato, australia",
            "desc": "Govo Admin is a full featured, multipurpose, premium bootstrap admin template.",
            "Issues": 24,
            "resolved": 24,
            "comment": 40,
            "progress": 45
        },
        {
            "project": "Poco admin Design",
            "where": "Themeforest, australia",
            "desc": "Poco Admin is a full featured, multipurpose, premium bootstrap admin template.",
            "Issues": 40,
            "resolved": 40,
            "comment": 20,
            "progress": 99
        },
        {
            "project": "Xolo admin Design",
            "where": "Themeforest, australia",
            "desc": "Xolo Admin is a full featured, multipurpose, premium bootstrap admin template.",
            "Issues": 24,
            "resolved": 24,
            "comment": 40,
            "progress": 13
        },
        {
            "project": "Zeta admin Design",
            "where": "Themeforest, australia",
            "desc": "Zeta Admin is a full featured, multipurpose, premium bootstrap admin template.",
            "Issues": 12,
            "resolved": 5,
            "comment": 7,
            "progress": 50
        },
        {
            "project": "Tivo admin Design",
            "where": "Themeforest, australia",
            "desc": "Tivo Admin is a full featured, multipurpose, premium bootstrap admin template.",
            "Issues": 12,
            "resolved": 5,
            "comment": 7,
            "progress": 88
        }
    ]);

    // i18n 
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        project: '',
        where: '',
        desc: '',
        Issues: '',
        resolved: '',
        comment: '',
        progress: 0
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.project === '' || formData.where === '' || formData.desc === '' || formData.Issues === '' || formData.resolved === '' || formData.comment === '') {
            setWarning(1)
            return;
        }
        setProjectData(prevData => [...prevData, formData]);
        setFormData({
            project: '',
            where: '',
            desc: '',
            Issues: '',
            resolved: '',
            comment: '',
            progress: 0
        });
        setIsOpen('close');
    };


    return (
        <>
            <div className={"project-list-wrapper " + store.theme + '-bg'}  >
                <div className="project-list-content">
                    <div className="top">
                        <h3>{t('project_list.title')}</h3> <PathToTab parent={t('project_list.path_to_tab.parent')} tab={t('project_list.path_to_tab.tab')} />
                    </div>
                    <div className="middle">
                        <div className="section-1">
                            <div className={"filter-card " + store.theme + '-cardd'}>
                                <div className="left">
                                    <button className={"btn 1 " + store.theme + '-input'}>All</button>
                                    <button className={"btn 2 " + store.theme + '-input'}>Doing</button>
                                    <button className={"btn 3 " + store.theme + '-input'}>Done</button>
                                </div>
                                <div className="right">
                                    <button className="blue-btn" onClick={() => { setIsOpen(isOpen === 'close' ? 'open' : 'close') }}>
                                        {t('project_list.filter_card.button')}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="section-2">
                            <div className={"projects-board-card " + store.theme + '-cardd'}>
                                {
                                    projectData.map((project, i) => {

                                        return (
                                            <div className={`project ${i} ` + store.theme + '-bg'} key={i} >
                                                <div className="top-part">
                                                    <div><h4>{project.project}</h4> <span style={{ backgroundColor: colors[i] }}>Doing</span></div>
                                                    <div><span className='circle'></span><p className="where">{project.where}</p></div>
                                                </div>
                                                <div className="middle-part">
                                                    <p className="desc">
                                                        {project.desc}
                                                    </p>
                                                    <div className="statistics">
                                                        <div><p>Issues</p><p style={{ color: colors[i] }}>{project.Issues}</p></div>
                                                        <div><p>Resolved</p><p style={{ color: colors[i] }}>{project.resolved}</p></div>
                                                        <div><p>Romment</p><p style={{ color: colors[i] }}>{project.comment}</p></div>
                                                    </div>
                                                </div>
                                                <div className="bottom-part">
                                                    <p>{project.progress}%</p>
                                                    <div className='progress'>
                                                        <div style={{ width: `${project.progress}%`, backgroundColor: colors[i] }}></div>
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
            <div className={"modal-window-bg " + isOpen}>
                <div className={"modal-window " + store.theme + '-cardd'}>
                    <div className="header">
                        <h3>{t('project_list.modal.title')}</h3>
                        <span><h3>{t('project_list.modal.close')}</h3> <button onClick={() => { setIsOpen(isOpen === 'open' ? 'close' : 'open') }}><IoIosCloseCircleOutline size={30} className={store.theme + '-text'} /></button></span>
                    </div>
                    <div className="form">
                        {warning === 0 ? '' : <p style={{color:'red'}}>Заполните форму</p>}
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="project">{t('project_list.modal.project_name')}</label>
                            <input pattern='[a-zA-Z0-9]+' type="text" id='project' className={store.theme + '-input'} value={formData.project} onChange={handleChange} />
                            <label htmlFor="where">{t('project_list.modal.where')}</label>
                            <input type="text" id='where' className={store.theme + '-input'} value={formData.where} onChange={handleChange} />
                            <label htmlFor="desc">{t('project_list.modal.description')}</label>
                            <input type="text" id='desc' className={store.theme + '-input'} value={formData.desc} onChange={handleChange} />
                            <label htmlFor="Issues">{t('project_list.modal.issues')}</label>
                            <input type="number" id='Issues' className={store.theme + '-input'} value={formData.Issues} onChange={handleChange} />
                            <label htmlFor="resolved">{t('project_list.modal.resolved')}</label>
                            <input type="number" id='resolved' className={store.theme + '-input'} value={formData.resolved} onChange={handleChange} />
                            <label htmlFor="comment">{t('project_list.modal.comment')}</label>
                            <input type="number" id='comment' className={store.theme + '-input'} value={formData.comment} onChange={handleChange} />
                            <label htmlFor="progress">{t('project_list.modal.how_complete_is_it')}? {formData.progress}%</label>
                            <input type="range" id='progress' className={store.theme + '-input'} value={formData.progress} onChange={handleChange} />
                            <button type="submit" className='blue-btn'>{t('project_list.modal.add_new_project')}</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectList;