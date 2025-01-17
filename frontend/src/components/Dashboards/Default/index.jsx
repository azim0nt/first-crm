import './style.scss'
import PathToTab from '../../common/PathToTab';
import Welcome from '../../../assets/images/welcome.png'
import { Line, Bar } from 'react-chartjs-2';
import priceData from '../../../db/priceData.json'
import productData from '../../../db/productData.json'
import userData from '../../../db/userData.json'
import { useState, useContext } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, elements } from 'chart.js';
import { useTranslation } from 'react-i18next'
import {context} from '../../../store'
import Product1 from '../../../assets/images/products/1.png'
import Product2 from '../../../assets/images/products/2.png'
import Product3 from '../../../assets/images/products/3.png'
import Product4 from '../../../assets/images/products/4.png'

import User1 from '../../../assets/images/users/1.png'
import User2 from '../../../assets/images/users/2.png'
import User3 from '../../../assets/images/users/3.png'
import User4 from '../../../assets/images/users/4.png'

import OrdersTable from '../../common/OrdersTable'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, elements);

function Default() {
    const images = [Product1, Product2, Product3, Product4]
    const usersImages = [User1, User2, User3, User4]
    const {store, setStore} = useContext(context)
    const {t} = useTranslation()
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
            <div className={"default-wrapper "+store.theme+'-bg'}  > 
                <div className="default-content">
                    <div className="top">
                        <h3>{t('default_dashboard.title')}</h3>
                        <PathToTab parent={t('default_dashboard.path_to_tab.parent')} tab={t('default_dashboard.path_to_tab.tab')} />
                    </div>
                    <div className="middle">
                        <div className="section-1">
                            <div className="premium-card">
                                <div className="card-body">
                                    <div className="info">
                                        <h1>{t('default_dashboard.premium_card.title')}</h1>
                                        <p>{t('default_dashboard.premium_card.description')}</p>
                                        <button>{t('default_dashboard.premium_card.go_premium')}</button>
                                    </div>
                                    <div className="image"> <img src={Welcome} width={'100%'} alt="" /></div>

                                </div>
                            </div>
                            <div className={"total-earnings-card "+store.theme+'-cardd'}  >
                                <h4>
                                    {t('default_dashboard.total_earnings_card')}
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
                            <div className={"total-expenses-card "+store.theme+'-cardd'}  >
                                <h4>
                                {t('default_dashboard.total_expenses_card')}
                                </h4>
                                <div id="bar-chart">
                                    <Bar data={barChartData} options={options}></Bar>
                                </div>
                                <div className={"total-expenses "+store.theme+'-cardd'}>
                                    <h2>

                                        $ {
                                            totalPrices
                                        }
                                    </h2>
                                </div>
                            </div>
                            <div className={"top-selling-product-card "+store.theme+'-cardd' } >
                                <h4>
                                    {t('default_dashboard.top_selling_product_card')}
                                </h4>
                                <div className="cards">
                                    {
                                        productData.map((item, index) => {
                                            return (
                                                <div className={`cardd product-${index + 1}`} key={index}>
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
                        <div className="section-22">
                            <div className={"recent-order-card " +store.theme+'-cardd'} >
                               <OrdersTable data={userData} title={'R'} images={usersImages}/>
                            </div>
                            <div className={"our-growth-card "+store.theme+'-cardd'}  >
                                <h4>
                                   {t('default_dashboard.our_growth_card')}
                                </h4>
                                <div className="growth-chart">
                                    <Line
                                        data={{
                                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep'],
                                            datasets: [
                                                {
                                                    label: 'Dataset',
                                                    data: [220, 195, 280, 180, 250, 195, 250, 170, 290, 190, 220, 190, 230, 250, 190, 225, 225],
                                                    borderColor: '#5c61f2',
                                                    fill: false,
                                                    stepped: true,
                                                }
                                            ]
                                        }}
                                        options={{
                                            responsive: true,
                                            maintainAspectRatio: false,
                                            plugins:{
                                                legend:false,
                                            },
                                            scales:{
                                                x:{

                                                    grid:{
                                                        display:false
                                                    }
                                                }
                                            }
                                        }} />
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