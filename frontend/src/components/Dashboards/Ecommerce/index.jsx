import './style.scss'
import PathToTab from '../../common/PathToTab'
import productData from '../../../db/productData.json'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, elements } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import Circle from '../../common/Circle'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, elements);

function Ecommerce() {
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
                                <Circle color={'#5c61f2'}/>
                                </div>
                            <div className="card 2">
                                <Circle color={'#ff9766'}/>
                                
                                </div>
                            <div className="card 3">
                                <Circle color={'#61ae41'}/>
                                </div>
                            <div className="card 4">
                                <Circle color={'#44A8D7'}/>
                                
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ecommerce;