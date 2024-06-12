import './style.scss'
import Logo from '../../assets/images/logo.png'
import Accordion from '../common/Accordion';
const generalItems = [
    {
      title: 'Dashboards',
      content: [
        { name: 'Default', url: '/link1-1' },
        { name: 'Ecommerce', url: '/link1-2' },
        { name: 'Project', url: '/link1-3' }
      ]
    },
    {
      title: 'Widgets',
      content: [
        { name: 'Genaral', url: '/link2-1' },
        { name: 'Chart', url: '/link2-2' }
      ]
    },
    {
      title: 'Page Layout',
      content: [
        { name: 'Boxed', url: '/link3-1' },
        { name: 'RTL', url: '/link3-2' },
        { name: 'Dark Layout', url: '/link3-3' },
        { name: 'Hide Nav Scroll', url: '/link3-3' }
      ]
    }
  ];
function General() {
    return (
        <>
            <div className="general-wrapper">
                <div className="general-header">
                    <div className="general-logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="general-toggle-sidebar">
                        <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-layout-sidebar" viewBox="0 0 16 16">
                            <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5-1v12h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM4 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2z" />
                        </svg>
                        </button>
                    </div>
                </div>
                <div className="general-menu">
                    <div id="general">
                        <p id="title">General</p>
                        
                     <Accordion items={generalItems}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default General;