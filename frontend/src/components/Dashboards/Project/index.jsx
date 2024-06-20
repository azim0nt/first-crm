import './style.scss'
import PathToTab from '../../common/PathToTab'
import priceData from '../../../db/priceData.json'
import { useContext } from 'react';
import { context } from '../../../store'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, elements, plugins } from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, elements);
function Project() {
    const { store, setStore } = useContext(context)

    return (
        <>
            <div className="project-wrapper" style={{ backgroundColor: store.theme.backBgColor, color: store.theme.textColor }}>
                <div className="project-content">
                    <div className="top">
                        <h3>Project Dashboard</h3> <PathToTab parent={'Dashboad'} tab={'Project'} />
                    </div>
                    <div className="middle">

                        <div className="section-1">
                            <div className="two-cards">
                                <div className="card n-1" style={{ backgroundColor: store.theme.bgColor }}>
                                    <div className="top-part">
                                        <p>Website Design</p> <p>Running</p>
                                    </div>
                                    <div className="middle-part">
                                        <p>Task Completed: 8/10</p>
                                        <div className="chart-line">
                                            <div className="chart"></div>
                                        </div>
                                    </div>
                                    <div className="bottom-part">
                                        <div className="left">
                                            <p>Client: Brave Wings</p>
                                            <p>Deadline: 25 April 2024</p>
                                        </div>
                                        <div className="right">
                                            <div className="rank"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card n-2" style={{ backgroundColor: store.theme.bgColor }}>
                                    <div className="top-part">
                                        <p>NFT App Design</p> <p>Running</p>
                                    </div>
                                    <div className="middle-part">
                                        <p>Task Completed: 8/10</p>
                                        <div className="chart-line">
                                            <div className="chart"></div>
                                        </div>
                                    </div>
                                    <div className="bottom-part">
                                        <div className="left">
                                            <p>Client: Brave Wings</p>
                                            <p>Deadline: 25 April 2024</p>
                                        </div>
                                        <div className="right">
                                            <div className="rank"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="total-revenue-card" style={{ backgroundColor: store.theme.bgColor }}>
                                <div className="left">
                                    <h4>Total Revenue</h4>
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
                            
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Project;