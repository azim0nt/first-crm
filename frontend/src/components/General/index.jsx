import './style.scss'
import { useState } from 'react';
// import Logo from '../../assets/images/logo.png'
import LogoIcon from '../../assets/images/aileet-icon.png'
import Accordion from '../common/Accordion';
import { NavLink } from 'react-router-dom';
import { FaWallet, FaRegCalendarAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoBookmarksSharp } from "react-icons/io5";
const generalItems = [
  {
    title: 'Dashboards',
    icon: 'FaHome',
    content: [
      { name: 'Default', url: 'dashboard_01' },
      { name: 'Ecommerce', url: 'dashboard_02' },
      { name: 'Project', url: 'dashboard_03' }
    ]
  },
  {
    title: 'Widgets',
    icon: 'FaChartPie',
    content: [
      { name: 'Genaral', url: 'general_widget' },
      { name: 'Chart', url: 'chart_widget' }
    ]
  },
  {
    title: 'Page Layout', icon: 'FaClipboardList',
    content: [
      { name: 'Boxed', url: 'box_layout' },
      { name: 'RTL', url: 'layout_rtl' },
      { name: 'Dark Layout', url: 'layout_dark' },
      { name: 'Hide Nav Scroll', url: 'hide_on_scroll' }
    ]
  }
];
const appItems = [
  {
    title: 'Project',
    icon: 'FaHome',
    content: [
      { name: 'Project List', url: 'projects' },
      { name: 'Create New', url: 'project_create' },
    ]
  }
]
const usersItems = [
  {
    title: 'Users',
    icon: 'FaHome',
    content: [
      { name: 'User Profile', url: 'user_profile' },
      { name: 'User Edit', url: 'edit_profile' },
      { name: 'User Cards', url: 'user_cards' }
    ]
  }
]
const ecommerceItems = [
  {
    title: 'Ecommerce',
    icon: 'FaHome',
    content: [
      { name: "Add Product", url: "add_products" },
      { name: "Product", url: "product_cards" },
      { name: "Product Page", url: "product_page" },
      { name: "Product List", url: "list_products" },
      { name: "Payment Details", url: "payment_details" },
      { name: "Order History", url: "order_history" },
      { name: "Cart", url: "cart" },
      { name: "Wishlist", url: "list_wish" },
      { name: "Checkout", url: "checkout" },
      { name: "Pricing", url: "pricing" },
    ]
  }
]
const chatItems = [
  {
    title:'Chat',
    icon:'BiSolidMessageRounded',
    content:[
      {name:"Private Chat", url:"private_chat"},
      {name:"Group Chat",url:"group_chat"}
    ]
  }
]
function General() {
  const [isFree, setIsFree] = useState('unfree')
  return (
    <>
      <div className={"general-wrapper "+isFree}>
        <div className="general-header">
          <div className="general-logo">
        <div className="left">
          <img src={LogoIcon} width={40} alt="" />
        </div>
        <div className="right">
          <p>AiLeet</p>  
        </div>
          </div>
          <div className="general-toggle-sidebar">
            <button onClick={()=>{setIsFree(isFree === 'unfree' ? 'free': 'unfree')}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-layout-sidebar" viewBox="0 0 16 16">
                <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5-1v12h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM4 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="general-menu">

          <div id="general">
            <p id="title">General</p>

            <Accordion items={generalItems} />
          </div>
          <div id="applications">
            <p id="title">Applications</p>
            <Accordion items={appItems} />
            <div className="kanban-board">
              <div className='logo-link'>
                <div className="left">
                  <FaWallet size={15} color='#9FA8C1' />
                </div>
                <div className="right">
                  <NavLink to={'kanban'}>Kanban Board</NavLink>
                </div>
              </div>

            </div>
            <Accordion items={ecommerceItems} />
            <div className='logo-link'>
              <div className="left">
                <MdEmail size={15} color='#9FA8C1' />
              </div>
              <div className="right">
                <NavLink to={'letter-box'}>Letter Box</NavLink>
              </div>
            </div>
            <div className='logo-link'>
              <div className="left"><FaRegCalendarAlt size={15} color='#9FA8C1' /></div>
              <div className="right"><NavLink to={'calendar_basic'}>Calendar</NavLink></div>
            </div>
            <Accordion items={chatItems}/>
            <Accordion items={usersItems} />
            <div className='logo-link'>
              <div className="left"><IoBookmarksSharp size={15} color='#9FA8C1' /></div>
              <div className="right"><NavLink to={'bookmarks'}>Bookmarks</NavLink></div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default General;