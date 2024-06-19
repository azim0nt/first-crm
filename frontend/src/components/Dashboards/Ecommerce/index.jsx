import './style.scss'
import PathToTab from '../../common/PathToTab'
import priceData from '../../../db/priceData.json'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, elements } from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import Circle from '../../common/Circle'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, elements);

function Ecommerce() {
    const barChartData = {
        labels: priceData.map(item => `${item.price}$`),
        datasets: [
            {
                label: 'Total Expenses',
                data: priceData.map(item => item.price),
                backgroundColor: '#5c61f2',
                borderColor: '#5c61f2',
                borderWidth: 1
            }
        ]
    }
    const options = {
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
        },
    };
    return (
        <>
            <div className="ecommerce-wrapper">
                <div className="ecommerce-content">
                    <div className="top">
                        <h2>Ecommerce Dashboard</h2>
                        <PathToTab parent={'Dashboard'} tab={'E-Commerce'} />
                    </div>
                    <div className="middle">
                        <div className="four-cards">
                            <div className="card 1">
                                <Circle color={'#5c61f2'} />
                                <div className="info">
                                    <div className="total">
                                        <p>$73,927</p>
                                        <div className="title">
                                            Total Revenue
                                        </div>
                                    </div>
                                </div>
                                <div className="chart">
                                    <Bar data={barChartData} options={options}></Bar>
                                </div>
                            </div>
                            <div className="card 2">
                                <Circle color={'#ff9766'} />
                                <div className="info">
                                    <div className="total">
                                        <p>$73,927</p>
                                        <div className="title">
                                            Total Revenue
                                        </div>
                                    </div>
                                </div>
                                <div className="chart">
                                    <Line data={{
                                        labels: priceData.map(item => `${item.price}$`),
                                        datasets: [
                                            {
                                                label: 'Total Expenses',
                                                data: priceData.map(item => item.price),
                                                backgroundColor: '#ff9766',
                                                borderColor: '#ff9766',
                                                borderWidth: 1
                                            }
                                        ]
                                    }} options={options}></Line>
                                </div>
                            </div>
                            <div className="card 3">
                                <Circle color={'#61ae41'} />
                                <div className="info">
                                    <div className="total">
                                        <p>$73,927</p>
                                        <div className="title">
                                            Total Revenue
                                        </div>
                                    </div>
                                </div>
                                <div className="chart">
                                    <Line data={{
                                        labels: priceData.map(item => `${item.price}$`),
                                        datasets: [
                                            {
                                                label: 'Total Expenses',
                                                data: priceData.map(item => item.price),
                                                backgroundColor: '#61ae41',
                                                borderColor: '#61ae41',
                                                borderWidth: 1
                                            }
                                        ]
                                    }} options={options}></Line>
                                </div>
                            </div>
                            <div className="card 4">
                                <Circle color={'#44A8D7'} />
                                <div className="info">
                                    <div className="total">
                                        <p>$73,927</p>
                                        <div className="title">
                                            Total Revenue
                                        </div>
                                    </div>
                                </div>
                                <div className="chart">
                                    <Doughnut data={{
                                        labels:  ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
                                        datasets: [
                                            {
                                                label: 'Total Expenses',
                                                data: priceData.map(item => item.price),
                                                backgroundColor: ['red', 'orange', 'green', 'blue', '#44A8D7'],
                                                borderWidth: 1
                                            }
                                        ]
                                    }} options={options}></Doughnut>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ecommerce;