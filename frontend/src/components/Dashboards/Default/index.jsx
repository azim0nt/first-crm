import './style.scss'
import PathToTab from '../../common/PathToTab';
import Welcome from '../../../assets/images/welcome.png'
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, elements } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,  elements);

function Default() {
    const priceData = [
        { price: 25, count: 3 },
        { price: 30, count: 2 },
        { price: 35, count: 5 },
        { price: 40, count: 3 },
        { price: 45, count: 7 },
        { price: 50, count: 13 },
    ]
    const chartData = {
        labels: priceData.map(item => `${item.price}`),
        datasets: [
            {
                label: 'Total Earnings',
                data: priceData.map(item => item.count),
                backgroundColor: '#fff',
                borderColor: '#5c60f2',
                borderWidth: 2,
                pointRadius: 0,
                borderCapStyle: 'round',

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
            <div className="default-wrapper">
                <div className="default-content">
                    <div className="top">
                        <h3>Default Dashboard</h3>
                        <PathToTab parent={'Dashboad'} tab={'Default'} />
                    </div>
                    <div className="middle">
                        <div class="premium-card">
                            <div class="card-body">
                                <div class="info">
                                    <h1>Hello,Anna Miller.</h1>
                                    <p>Welcome to the Admin clan!   We appreciate your interest in our dashboard.</p>
                                    <button>Go Premium</button>
                                </div>
                                <div class="image"> <img src={Welcome} width={'100%'} alt="" /></div>

                            </div>
                        </div>
                        <div className="total-earnings-card">
                            <h5>
                            Total Earnings
                            </h5>
                            <div id='line-chart' >
                            <Line data={chartData} options={options} />
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Default;