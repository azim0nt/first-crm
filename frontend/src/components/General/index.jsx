import './style.scss'
import { useState } from 'react';
// import Logo from '../../assets/images/logo.png'
import LogoIcon from '../../assets/images/aileet-icon.png'
import Accordion from '../common/Accordion';
import { NavLink } from 'react-router-dom';
import { FaWallet, FaRegCalendarAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoBookmarksSharp } from "react-icons/io5";
import {useTranslation} from 'react-i18next'
function General() {
  const {t} = useTranslation()
  let generalItems = [
    {
      title: t('general.dashboards.title'),
      icon: 'FaHome',
      content: [
        { name: t('general.dashboards.content.0'), url: 'dashboard_01' },
        { name: t('general.dashboards.content.1'), url: 'dashboard_02' },
        { name: t('general.dashboards.content.2'), url: 'dashboard_03' }
      ]
    }
  ];
  let appItems = [
    {
      title: t('general.applications.title'),
      icon: 'FaHome',
      content: [
        { name: t('general.applications.content.0'), url: 'projects' },
        { name: t('general.applications.content.1'), url: 'project_create' },
      ]
    }
  ]
  let usersItems = [
    {
      title: t('general.users.title'),
      icon: 'FaHome',
      content: [
        { name: t('general.users.content.0'), url: 'user_profile' },
        { name: t('general.users.content.1'), url: 'edit_profile' },
        { name: t('general.users.content.2'), url: 'user_cards' }
      ]
    }
  ]
  let ecommerceItems = [
    {
      title: t('general.ecommerce.title'),
      icon: 'FaHome',
      content: [
        { name: t('general.ecommerce.content.0'), url: "add_products" },
        { name: t('general.ecommerce.content.1'), url: "product_cards" },
        { name: t('general.ecommerce.content.2'), url: "product_page" },
        { name: t('general.ecommerce.content.3'), url: "list_products" },
        { name: t('general.ecommerce.content.4'), url: "payment_details" },
        { name: t('general.ecommerce.content.5'), url: "order_history" },
        { name: t('general.ecommerce.content.6'), url: "cart" },
        { name: t('general.ecommerce.content.7'), url: "list_wish" },
        { name: t('general.ecommerce.content.8'), url: "checkout" },
        { name: t('general.ecommerce.content.9'), url: "pricing" },
      ]
    }
  ]
  let chatItems = [
    {
      title:t('general.chat.title'),
      icon:'BiSolidMessageRounded',
      content:[
        {name:t('general.chat.content.0'), url:"private_chat"},
        {name:t('general.chat.content.1'),url:"group_chat"}
      ]
    }
  ]
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
                  <NavLink to={'kanban'}>{t('general.kanban')}</NavLink>
                </div>
              </div>

            </div>
            <Accordion items={ecommerceItems} />
            <div className='logo-link'>
              <div className="left">
                <MdEmail size={15} color='#9FA8C1' />
              </div>
              <div className="right">
                <NavLink to={'letter-box'}>{t('general.letter_box')}</NavLink>
              </div>
            </div>
            <div className='logo-link'>
              <div className="left"><FaRegCalendarAlt size={15} color='#9FA8C1' /></div>
              <div className="right"><NavLink to={'calendar_basic'}>{t('general.calendar')}</NavLink></div>
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