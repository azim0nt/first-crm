import './style.scss';
import PathToTab from '../../common/PathToTab';
import { useContext, useState, useEffect } from 'react';
import { context } from '../../../store';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useTranslation } from 'react-i18next';

const CountdownTimer = ({ diedline }) => {
    const calculateTimeLeft = (targetDate) => {
      const now = new Date();
      const endDate = new Date(targetDate);
      const difference = endDate - now;
  
      if (difference <= 0) {
        return { expired: true };
      }
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      return {
        expired: false,
        days,
        hours,
        minutes,
        seconds
      };
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(diedline));
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft(diedline));
      }, 1000);
  
      return () => clearInterval(timer);
    }, [diedline]);
  
    if (timeLeft.expired) {
      return <span>Время истекло</span>;
    }
  
    return (
      <span>
        {timeLeft.days} дней {timeLeft.hours} часов {timeLeft.minutes} минут {timeLeft.seconds} секунд
      </span>
    );
  };
  
function ProjectList() {
    const { store } = useContext(context);
    const [isOpen, setIsOpen] = useState('close');
    const [warning, setWarning] = useState(0);
    const [projectData, setProjectData] = useState([]);
    const token = localStorage.getItem('token'); // Исправлено для получения токена
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

    useEffect(() => {
        console.log('Fetching data...');
        const fetchData = async () => {
            try {
                const taskResponse = await fetch(`${store.url}admin/get_task/all`, { // Исправлено URL
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        '-x-token': `${token}`, // Используйте корректное название заголовка
                    },
                });

                console.log('Response status:', taskResponse.status);

                if (taskResponse.ok) {
                    const data = await taskResponse.json();
                    console.log('Fetched data:', data);
                    setProjectData(data); // Устанавливаем данные в состояние
                } else {
                    console.log('Failed to fetch data with status:', taskResponse.status);
                }
            } catch (error) {
                console.error('An error occurred while fetching tasks:', error);
            }
        };

        fetchData();
    }, [store.url, token]);

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
            setWarning(1);
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
            <div className={"project-list-wrapper " + store.theme + '-bg'}>
                <div className="project-list-content">
                    <div className="top">
                        <h3>{t('project_list.title')}</h3>
                        <PathToTab parent={t('project_list.path_to_tab.parent')} tab={t('project_list.path_to_tab.tab')} />
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
                                {projectData.map((project, i) => (
                                    <div className={`project ${i} ` + store.theme + '-bg'} key={i}>
                                        <ul>
<li><b>Name: </b>{project.name}</li>
                                            <li><b>Description: </b>{project.description}</li>
                                            <li><b>Diedline: </b><CountdownTimer diedline={project.diedline} /></li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"modal-window-bg " + isOpen}>
                <div className={"modal-window " + store.theme + '-cardd'}>
                    <div className="header">
                        <h3>{t('project_list.modal.title')}</h3>
                        <span>
                            <h3>{t('project_list.modal.close')}</h3>
                            <button onClick={() => { setIsOpen(isOpen === 'open' ? 'close' : 'open') }}>
                                <IoIosCloseCircleOutline size={30} className={store.theme + '-text'} />
                            </button>
                        </span>
                    </div>
                    <div className="form">
                        {warning === 0 ? '' : <p style={{ color: 'red' }}>Заполните форму</p>}
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
