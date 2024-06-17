import './style.scss'
import PathToTab from '../../common/PathToTab';
import Welcome from '../../../assets/images/welcome.png'
import { Line, Bar } from 'react-chartjs-2';
import priceData from '../../../db/priceData.json'
import productData from '../../../db/productData.json'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, elements, BarElement } from 'chart.js';


import Product1 from '../../../assets/images/products/1.png'
import Product2 from '../../../assets/images/products/2.png'
import Product3 from '../../../assets/images/products/3.png'
import Product4 from '../../../assets/images/products/4.png'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, elements);

function Default() {
    const images = [Product1, Product2, Product3, Product4]


    const totalPrices = priceData.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
    }, 0);

    const lineChartData = {
        labels: priceData.map(item => `${item.price}$`),
        datasets: [
            {
                label: 'Total Earnings',
                data: priceData.map(item => item.count),
                backgroundColor: '#fff',
                borderColor: '#5c60f2',
                borderWidth: 2,
                pointRadius: 5,
                borderCapStyle: 'round',

            }
        ]
    }
    const barChartData = {
        labels: priceData.map(item => `${item.price}$`),
        datasets: [
            {
                label: 'Total Expenses',
                data: priceData.map(item => item.price),
                backgroundColor: '#FF443350',
                borderColor: '#FF4433',
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
                            <h4>
                                Total Earnings
                            </h4>
                            <div id='line-chart' >
                                <Line data={lineChartData} options={options} />
                            </div>
                            <div className="total-sum">
                                <h2>
                                    $ {
                                        totalPrices
                                    }
                                </h2>
                            </div>
                        </div>
                        <div className="total-expenses-card">
                            <h4>
                                Total Expenses
                            </h4>
                            <div id="bar-chart">
                                <Bar data={barChartData} options={options}></Bar>
                            </div>
                            <div className="total-expenses">
                                <h2>

                                $ {
                                    totalPrices
                                }
                                </h2>
                            </div>
                        </div>
                        <div className="top-selling-product-card">
                            <h4>
                            Top Selling Product
                            </h4>
                            <div className="cards">
                            {
                                productData.map((item, index)=>{
                                    return (
                                        <div className="card" key={index}>
                                            <div className="left">
                                                <span className='img-container'>

                                                <img width={30} height={30} src={images[index]} alt="" />
                                                </span>
                                                <div>
                                                <p className='title'>{item.name}</p>
                                                <p className='article'>#{item.article}</p>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <p className='price'>$ {item.price}</p>
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

export default Default;