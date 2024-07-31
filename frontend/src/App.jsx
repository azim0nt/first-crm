import React, { useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { context, initialState, globalReducer } from './store';
import PrivateRoute from './components/PrivateRoute'; // Импортируйте PrivateRoute

// Импортируйте компоненты
import ProjectList from './components/Applications/ProjectList';
import CreateNew from './components/Applications/CreateNew';
import Kanban from './components/Applications/Kanban';
import UserProfile from './components/Applications/UserProfile';
import UserEdit from './components/Applications/UserEdit';
import UserCards from './components/Applications/UserCards';
import AddProduct from './components/Applications/AddProduct';
import Product from './components/Applications/Product';
import ProductPage from './components/Applications/ProductPage';
import ProductList from './components/Applications/ProductList';
import PaymentDetails from './components/Applications/PaymentDetails';
import OrderHistory from './components/Applications/OrderHistory';
import Cart from './components/Applications/Cart';
import Wishlist from './components/Applications/Wishlist';
import Checkout from './components/Applications/Checkout';
import Pricing from './components/Applications/Pricing';
import LetterBox from './components/Applications/LetterBox';
import Bookmarks from './components/Applications/Bookmarks';
import Calendar from './components/Applications/Calendar';
import PrivateChat from './components/Applications/PrivateChat';
import GroupChat from './components/Applications/GroupChat';
import CurrentPage from './components/CurrentPage';
import Default from './components/Dashboards/Default';
import Ecommerce from './components/Dashboards/Ecommerce';
import Project from './components/Dashboards/Project';
import Login from './components/Login';

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const contextPayload = {
    store: state,
    setStore: dispatch,
  };

  return (
    <context.Provider value={contextPayload}>
      <BrowserRouter>
        <div className="app-wrapper">
          <div id="container">
            <Routes>
              <Route path="/" element={<PrivateRoute element={<Login />} />} />
              <Route path="login" element={<Login />} />
              <Route path="/" element={<PrivateRoute element={<CurrentPage />} />}>
                <Route index element={<PrivateRoute element={<Default />} />} />
                <Route path="dashboard_01" element={<PrivateRoute element={<Default />} />} />
                <Route path="dashboard_02" element={<PrivateRoute element={<Ecommerce />} />} />
                <Route path="dashboard_03" element={<PrivateRoute element={<Project />} />} />
                <Route path="projects" element={<PrivateRoute element={<ProjectList />} />} />
                <Route path="project_create" element={<PrivateRoute element={<CreateNew />} />} />
                <Route path="kanban" element={<PrivateRoute element={<Kanban />} />} />
                <Route path="user_profile" element={<PrivateRoute element={<UserProfile />} />} />
                <Route path="edit_profile" element={<PrivateRoute element={<UserEdit />} />} />
                <Route path="user_cards" element={<PrivateRoute element={<UserCards />} />} />
                <Route path="add_products" element={<PrivateRoute element={<AddProduct />} />} />
                <Route path="product_cards" element={<PrivateRoute element={<Product />} />} />
                <Route path="product_page" element={<PrivateRoute element={<ProductPage />} />} />
                <Route path="list_products" element={<PrivateRoute element={<ProductList />} />} />
                <Route path="payment_details" element={<PrivateRoute element={<PaymentDetails />} />} />
                <Route path="order_history" element={<PrivateRoute element={<OrderHistory />} />} />
                <Route path="cart" element={<PrivateRoute element={<Cart />} />} />
                <Route path="list_wish" element={<PrivateRoute element={<Wishlist />} />} />
                <Route path="checkout" element={<PrivateRoute element={<Checkout />} />} />
                <Route path="pricing" element={<PrivateRoute element={<Pricing />} />} />
                <Route path="letter-box" element={<PrivateRoute element={<LetterBox />} />} />
                <Route path="bookmarks" element={<PrivateRoute element={<Bookmarks />} />} />
                <Route path="calendar_basic" element={<PrivateRoute element={<Calendar />} />} />
                <Route path="private_chat" element={<PrivateRoute element={<PrivateChat />} />} />
                <Route path="group_chat" element={<PrivateRoute element={<GroupChat />} />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </context.Provider>
  );
}

export default App;
