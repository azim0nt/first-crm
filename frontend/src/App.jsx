import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CurrentPage from './components/CurrentPage';
import Default from './components/Dashboards/Default';
import Ecommerce from './components/Dashboards/Ecommerce';
import Project from './components/Dashboards/Project';
import Login from './components/Login';
import Register from './components/Register';
import { useReducer,useContext } from 'react';
import { context, initialState, globalReducer } from './store';
import ProjectList from './components/Applications/ProjectList'
import CreateNew from './components/Applications/CreateNew'
import Kanban from './components/Applications/Kanban';
import UserProfile from './components/Applications/UserProfile';
import UserEdit from './components/Applications/UserEdit';
import UserCards from './components/Applications/UserCards'
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
function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState)
  const contextPayload = {
    store: state,
    setStore: dispatch
  }

  return (
    <context.Provider value={contextPayload}>
      <BrowserRouter>

        <div className="app-wrapper">
          <div id="container">
            <Routes>

              <Route
                path="/"
                element={

                  <CurrentPage />

                }
              >
                <Route index element={<Default />} />
                <Route path='dashboard_01' element={<Default />} />
                <Route path="dashboard_02" element={<Ecommerce />} />
                <Route path="dashboard_03" element={<Project />} />
                <Route path="projects" element={<ProjectList />} />
                <Route path="project_create" element={<CreateNew />} />
                <Route path="kanban" element={<Kanban />} />
                <Route path="user_profile" element={<UserProfile />} />
                <Route path="edit_profile" element={<UserEdit />} />
                <Route path="user_cards" element={<UserCards />} />
                <Route path="add_products" element={<AddProduct />} />
                <Route path="product_cards" element={<Product />} />
                <Route path="product_page" element={<ProductPage />} />
                <Route path="list_products" element={<ProductList />} />
                <Route path="payment_details" element={<PaymentDetails />} />
                <Route path="order_history" element={<OrderHistory />} />
                <Route path="cart" element={<Cart />} />
                <Route path="list_wish" element={<Wishlist />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="letter-box" element={<LetterBox />} />
                <Route path='bookmarks' element={<Bookmarks/>}/>
              </Route>

              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </context.Provider>
  );
}

export default App;
