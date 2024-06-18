import './style.scss'
import PathToTab from '../../common/PathToTab';
import Welcome from '../../../assets/images/welcome.png'
import { Line, Bar } from 'react-chartjs-2';
import priceData from '../../../db/priceData.json'
import productData from '../../../db/productData.json'
import userData from '../../../db/userData.json'
import { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, elements } from 'chart.js';


import Product1 from '../../../assets/images/products/1.png'
import Product2 from '../../../assets/images/products/2.png'
import Product3 from '../../../assets/images/products/3.png'
import Product4 from '../../../assets/images/products/4.png'

import User1 from '../../../assets/images/users/1.png'
import User2 from '../../../assets/images/users/2.png'
import User3 from '../../../assets/images/users/3.png'
import User4 from '../../../assets/images/users/4.png'


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, elements);

function Default() {
    const images = [Product1, Product2, Product3, Product4]
    const usersImages = [User1, User2, User3, User4]

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
    const [data, setData] = useState(userData);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [searchQuery, setSearchQuery] = useState('');

    // Функция для обработки сортировки
    const sortData = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sortedData = [...data].sort((a, b) => {
            let aValue = a[key];
            let bValue = b[key];

            if (key === 'date') {
                aValue = formatDate(aValue);
                bValue = formatDate(bValue);
            } else if (key === 'amount') {
                aValue = parseFloat(aValue.replace(/[$,]/g, ''));
                bValue = parseFloat(bValue.replace(/[$,]/g, ''));
            } else if (key === 'id') {
                aValue = parseInt(aValue);
                bValue = parseInt(bValue);
            }

            if (aValue < bValue) {
                return direction === 'asc' ? -1 : 1;
            }
            if (aValue > bValue) {
                return direction === 'asc' ? 1 : -1;
            }
            return 0;
        });

        setData(sortedData);
        setSortConfig({ key, direction });
    };

    // Функция для форматирования даты
    const formatDate = (dateString) => {
        const [day, month, year] = dateString.split('/');
        return new Date(`${year}-${month}-${day}`);
    };

    // Функция для фильтрации данных
    const filteredData = data.filter(user => user.fullname.toLowerCase().includes(searchQuery.toLowerCase()));
    const [checkedState, setCheckedState] = useState({});

    const handleCheckboxChange = (userId) => {
        setCheckedState(prevState => ({
            ...prevState,
            [userId]: !prevState[userId]
        }));
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
                        <div className="section-1">
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
                                        productData.map((item, index) => {
                                            return (
                                                <div className={`card product-${index + 1}`} key={index}>
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
                        <div className="section-2">
                            <div className="recent-order-card">
                                <div className="top-part">
                                    <h4>Recent Order</h4>
                                    <div className="input">
                                        <p>Search: <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                                        </p>
                                    </div>
                                </div>
                                <div className="cards">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th><input type="checkbox" /></th>
                                                <th><button onClick={() => sortData('index')}>No</button>.</th>
                                                <th><button onClick={() => sortData('fullname')}>CustomerName</button></th>
                                                <th><button onClick={() => sortData('id')}>ID</button></th>
                                                <th><button onClick={() => sortData('date')}>Date</button></th>
                                                <th><button onClick={() => sortData('city')}>City</button></th>
                                                <th><button onClick={() => sortData('status')}>Status</button></th>
                                                <th><button onClick={() => sortData('amount')}>Amount</button></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredData.map((user, index) => (
                                                <tr key={index}>
                                                    <td><input type="checkbox"
                                                        checked={checkedState[user.index ] || false}
                                                        onChange={() => handleCheckboxChange(user.index)} /></td>
                                                    <td><p>{user.index}</p></td>
                                                    <td className='avatar-fullname'><img src={usersImages[user.index - 1]} alt="" /><p>{user.fullname}</p></td>
                                                    <td><p>#{user.id}</p></td>
                                                    <td className='date'><p>{user.date}</p></td>
                                                    <td><p>{user.city}</p></td>
                                                    <td><p className={`${user.status.toLowerCase()}`}>{user.status}</p></td>
                                                    <td><p>${user.amount}</p></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Default;