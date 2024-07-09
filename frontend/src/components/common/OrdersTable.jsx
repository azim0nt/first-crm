import React, { useState, useContext } from 'react';
import { context } from '../../store';
import './OrdersTable.scss'
function OrdersTable(props) {
    const {store, setStore} = useContext(context)
    const [data, setData] = useState(props.data);
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
           <div className={"order-table "+store.theme+'-cardd'} >
                                <div className="top-part">
                                    <h4>{props.title}</h4>
                                    <div className="input">
                                        <p>Search: <input    type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                                        </p>
                                    </div>
                                </div>
                                <div className="cards">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th><input type="checkbox" /></th>
                                                <th><button  className={store.theme+'-text'} onClick={() => sortData('index')}>No</button>.</th>
                                                <th><button  className={store.theme+'-text'} onClick={() => sortData('fullname')}>CustomerName</button></th>
                                                <th><button  className={store.theme+'-text'} onClick={() => sortData('id')}>ID</button></th>
                                                <th><button  className={store.theme+'-text'} onClick={() => sortData('date')}>Date</button></th>
                                                <th><button  className={store.theme+'-text'} onClick={() => sortData('city')}>City</button></th>
                                                <th><button  className={store.theme+'-text'} onClick={() => sortData('status')}>Status</button></th>
                                                <th><button  className={store.theme+'-text'} onClick={() => sortData('amount')}>Amount</button></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredData.map((user, index) => (
                                                <tr key={index}>
                                                    <td><input type="checkbox"
                                                        checked={checkedState[user.index ] || false}
                                                        onChange={() => handleCheckboxChange(user.index)} /></td>
                                                    <td><p>{user.index}</p></td>
                                                    <td className='avatar-fullname'><img src={props.images[user.index - 1]} alt="" /><p>{user.fullname}</p></td>
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
        </>
    );
}

export default OrdersTable;