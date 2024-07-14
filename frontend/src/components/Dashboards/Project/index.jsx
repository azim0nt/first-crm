import './style.scss'
import PathToTab from '../../common/PathToTab'
import priceData from '../../../db/priceData.json'
import usersData from '../../../db/userData.json'
import { useContext, useState, useEffect } from 'react';
import { context } from '../../../store'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, elements, plugins } from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import tasksData from '../../../db/tasksData.json'
import Upgrade from '../../../assets/images/upgrade.png'
import OrdersTable from '../../common/OrdersTable'
import { useTranslation } from 'react-i18next'

import User1 from '../../../assets/images/users/1.png'
import User2 from '../../../assets/images/users/2.png'
import User3 from '../../../assets/images/users/3.png'
import User4 from '../../../assets/images/users/4.png'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, elements);
function Project() {
    const { store, setStore } = useContext(context)
    const { t } = useTranslation()
    const usersImages = [User1, User2, User3, User4]

    const [tasks, setTasks] = useState(tasksData);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        if (filter === 'All') {
            setTasks(tasksData);
        } else {
            const filteredTasks = tasksData.filter(task => task.type && task.type.includes(filter.toLowerCase()));
            setTasks(filteredTasks);
        }
    }, [filter]);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };
    return (
        <>
            <div className={"project-wrapper "+store.theme+'-bg'}>
                <div className="project-content">
                    <div className="top">
                        <h3>{t('project.title')}</h3> <PathToTab parent={t('project.path_to_tab.parent')} tab={t('project.path_to_tab.tab')} />
                    </div>
                    <div className="middle">

                        <div className="section-1">
                            <div className="two-cards">
                                <div className={"card n-1 "+store.theme+'-cardd'}>
                                    <div className="top-part">
                                        <p>{t('project.two_cards.card_1.name')}</p> <p>{t('project.two_cards.card_1.status')}</p>
                                    </div>
                                    <div className="middle-part">
                                        <p>{t('project.two_cards.card_1.task_completed')}: 8/10</p>
                                        <div className="chart-line">
                                            <div className="chart"></div>
                                        </div>
                                    </div>
                                    <div className="bottom-part">
                                        <div className="left">
                                            <p>{t('project.two_cards.card_1.client')}: Brave Wings</p>
                                            <p>{t('project.two_cards.card_1.deadline')}: 25 April 2024</p>
                                        </div>
                                        <div className="right">
                                            <div className="rank"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"card n-2 "+store.theme+'-cardd'}>
                                    <div className="top-part">
                                        <p>{t('project.two_cards.card_2.name')}</p> <p>{t('project.two_cards.card_2.status')}</p>
                                    </div>
                                    <div className="middle-part">
                                        <p>{t('project.two_cards.card_2.task_completed')}: 8/10</p>
                                        <div className="chart-line">
                                            <div className="chart"></div>
                                        </div>
                                    </div>
                                    <div className="bottom-part">
                                        <div className="left">
                                            <p>{t('project.two_cards.card_1.client')}: Brave Wings</p>
                                            <p>{t('project.two_cards.card_1.deadline')}: 25 April 2024</p>
                                        </div>
                                        <div className="right">
                                            <div className="rank"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className={"total-revenue-card "+store.theme+'-cardd'}>
                                <div className="left">
                                    <h4>{t('project.total_revenue_card')}</h4>
                                    <div className="chart">
                                        <Bar data={{
                                            labels: [1, 2, 3, 4, 5, 6, 7],
                                            datasets: [
                                                {
                                                    label: 'Dataset 1',
                                                    data: [10, 20, 30, 40, 50, 60],
                                                    backgroundColor: '#5c61f2',
                                                    borderColor: '#5c61f2'
                                                },
                                                {
                                                    label: 'Dataset 2',
                                                    data: [-10, -20, -30, -40, -50, -60],
                                                    backgroundColor: '#ff9766',
                                                    borderColor: '#ff9766'
                                                }
                                            ]
                                        }}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                plugins: {
                                                    legend: {
                                                        display: true
                                                    },
                                                    title: {
                                                        display: false,
                                                        text: 'Chart.js Bar Chart'
                                                    }

                                                },
                                                scales: {
                                                    x: {
                                                        grid: {
                                                            display: false
                                                        }
                                                    },
                                                    y: {
                                                        grid: {
                                                            display: false
                                                        }
                                                    }

                                                }
                                            }}></Bar>
                                    </div>
                                </div>
                                <div className="right">
                                    <h2>$25,837</h2>
                                    <p>Total : 23,000</p>
                                    <div className="chart">
                                        <Line
                                            data={{
                                                labels: [1, 2, 3, 4, 5, 6, 7],
                                                datasets: [
                                                    {
                                                        label: 'Total Earnings',
                                                        data: [20, 54, 8, 634, 42, 54, 12],
                                                        backgroundColor: '#fff',
                                                        borderColor: '#5c60f2',
                                                        borderWidth: 2,
                                                        pointRadius: 0,
                                                        borderCapStyle: 'round',

                                                    }
                                                ]
                                            }}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                plugins: {
                                                    legend: {
                                                        display: false,


                                                    },
                                                    title: {
                                                        display: false

                                                    },
                                                    tooltip: {
                                                        enable: false
                                                    }
                                                },
                                                scales: {
                                                    x: {
                                                        display: false,
                                                        grid: {
                                                            display: false,
                                                        },
                                                    },
                                                    y: {
                                                        display: false,
                                                        grid: {
                                                            display: false,
                                                        },
                                                        beginAtZero: true,
                                                    },
                                                },
                                                elements: {
                                                    line: {


                                                        borderCapStyle: 'round',
                                                        tension: 0.3,


                                                    },
                                                }
                                            }}
                                        >

                                        </Line>
                                    </div>
                                    <button className='blue-btn'>Increase</button>
                                </div>
                            </div>
                            <div className={"upgrade-card"} style={{backgroundColor:store.theme === 'dark'?'#171829': '#fff'}}>
                                <h4>{t('project.upgrade_card.title')}</h4>
                                <p> 
                                        {t('project.upgrade_card.description')}
    
                                </p>
                                <div>
                                    <button className="blue-btn">
                                        {t('project.upgrade_card.button')}

                                    </button>
                                </div>
                                <img src={Upgrade} alt="" />
                            </div>
                        </div>
                        <div className="section-2">
                            <div className={"today-task-card "+store.theme+'-cardd'}>
                                <div className="top"><h4>{t('project.today_task_card.title')}</h4></div>
                                <div className="filters">
                                    <button className={filter === 'All' ? 'active' : ''} onClick={() => handleFilterChange('All')}>{t('project.today_task_card.filters.all')}</button>
                                    <button className={filter === 'important' ? 'active' : ''} onClick={() => handleFilterChange('important')}>{t('project.today_task_card.filters.important')}</button>
                                    <button className={filter === 'notes' ? 'active' : ''} onClick={() => handleFilterChange('notes')}>{t('project.today_task_card.filters.notes')}</button>
                                    <button className={filter === 'links' ? 'active' : ''} onClick={() => handleFilterChange('links')}>{t('project.today_task_card.filters.links')}</button>
                                </div>
                                <div className="tasks">
                                    {
                                        tasks.map((task, index) => (
                                            <div key={index} className={`task ${index + 1}`}>
                                                <div className="left">
                                                    <input type="checkbox" name="" id="" /><p>{task.task}</p>
                                                </div>
                                                <div className="middle">
                                                    <button className={`${task.status.toLowerCase()}`}>{task.status}</button>
                                                </div>
                                                <div className="right">
                                                    <p>{task.date}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="project-summery">
                                <OrdersTable data={usersData} title={'Project Summery'} images={usersImages} />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Project;