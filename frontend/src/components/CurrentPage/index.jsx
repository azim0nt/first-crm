import Header from '../Header'
import { Outlet } from 'react-router-dom';
function CurrentPage() {
    return ( 
        <>
        <Outlet/>
        </>
     );
}

export default CurrentPage;