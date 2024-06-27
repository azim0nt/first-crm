import './style.scss'
import PathToTab from '../../common/PathToTab'
import priceData from '../../../db/priceData.json'
import userData from '../../../db/userData.json'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, elements, plugins } from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import Circle from '../../common/Circle'
import CardImage from '../../../assets/images/cardImage.png'
import OrdersTable from '../../common/OrdersTable'
import { useContext } from 'react';
import { context } from '../../../store';
import User1 from '../../../assets/images/users/1.png'
import User2 from '../../../assets/images/users/2.png'
import User3 from '../../../assets/images/users/3.png'
import User4 from '../../../assets/images/users/4.png'


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, elements);

function Ecommerce() {
    const {store, setStore} = useContext(context)
    const usersImages = [User1, User2, User3, User4]
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
            <div className="ecommerce-wrapper" style={{backgroundColor:store.theme.backBgColor, color:store.theme.textColor}}>
                <div className="ecommerce-content">
                    <div className="top">
                        <h2>Ecommerce Dashboard</h2>
                        <PathToTab parent={'Dashboard'} tab={'E-Commerce'} />
                    </div>
                    <div className="middle">
                        <div className="section-1">
                            <div className="four-cards">
                                <div className="cardd 1"  style={{backgroundColor:store.theme.bgColor, boxShadow:`  1px 1px 20px ${store.theme.bgColor}`}}>
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
                                <div className="cardd 2"  style={{backgroundColor:store.theme.bgColor, boxShadow:`  1px 1px 20px ${store.theme.bgColor}`}}>
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
                                <div className="cardd 3"  style={{backgroundColor:store.theme.bgColor, boxShadow:`  1px 1px 20px ${store.theme.bgColor}`}}>
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
                                <div className="cardd 4"  style={{backgroundColor:store.theme.bgColor, boxShadow:`  1px 1px 20px ${store.theme.bgColor}`}}>
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
                                            labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
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
                            <div className="daily-visitors-card" style={{backgroundColor:store.theme.bgColor}}>
                                <div className="left">
                                    <h4>Daily Visitors</h4>
                                    <div className="chart">
                                        <Line data={{
                                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
                                            datasets: [
                                                {
                                                    label: 'Dataset 1',
                                                    data: [10, 30, 39, 20, 25, 34, -10],
                                                    borderColor: '#ff9766',
                                                    backgroundColor: '#fff',
                                                    borderCapStyle: 'round',
                                                },
                                                {
                                                    label: 'Dataset 2',
                                                    data: [18, 33, 22, 19, 11, 39, 30],
                                                    borderColor: '#5c61f2',
                                                    backgroundColor: '#fff',
                                                    borderCapStyle: 'round',
                                                }
                                            ]
                                        }}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                plugins: {
                                                    legend: false,
                                                    title: {
                                                        display: false

                                                    },
                                                    tooltip: {
                                                        enable: false
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
                                                },
                                                elements: {
                                                    line: {
                                        
                                        
                                                        borderCapStyle: 'round',
                                                        tension: 0.3,
                                        
                                        
                                                    },
                                                },
                                            }}
                                        ></Line>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="top-part">
                                        <div className="deals">
                                            <h3>350</h3>
                                            <p>Deals</p>
                                        </div>
                                        <div className="order-price">
                                            <h3>$31K</h3>
                                            <p>Order Price</p>
                                        </div>
                                    </div>
                                    <div className="bottom-part">
                                        <div className="chart_line 1">
                                            <span><p>Visits</p> <p>20,000</p></span>
                                            <div className="chart blue">
                                            <div></div>
                                            </div>
                                        </div>
                                        <div className="chart_line 2">
                                            <span><p>Order Value</p> <p>15,610</p></span>
                                            <div className="chart orange">
                                            <div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-2">
                            <div className="top-product-card"  style={{backgroundColor:store.theme.bgColor}}>
                                <h4>Top Product</h4>
                                <p id='subtitle'>According to overall sales, the top 4 this week</p>
                                <div className="cards">
                                        <div className="cardd">
                                            <div className="image">
                                                <img src={CardImage} alt="" />
                                            </div>
                                            <div className="about">
                                                <h5>Full Sleeve Men Jacket</h5>
                                                <span><p>$ 14.00 </p> <p>$ 15.00</p></span>
                                            </div>
                                        </div>
                                        <div className="cardd">
                                            <div className="image">
                                                <img src={CardImage} alt="" />
                                            </div>
                                            <div className="about">
                                                <h5>Full Sleeve Men Jacket</h5>
                                                <span><p>$14.00 </p> <p>$15.00</p></span>
                                            </div>
                                        </div>
                                        <div className="cardd">
                                            <div className="image">
                                                <img src={CardImage} alt="" />
                                            </div>
                                            <div className="about">
                                                <h5>Full Sleeve Men Jacket</h5>
                                                <span><p>$ 14.00 </p> <p>$ 15.00</p></span>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="open-invoices">
                                <OrdersTable data={userData} title={'Open Invoices'} images={usersImages}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ecommerce;