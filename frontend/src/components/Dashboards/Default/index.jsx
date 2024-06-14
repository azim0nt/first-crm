import './style.scss'
import PathToTab from '../../common/PathToTab';

function Default() {
    return (
        <>
            <div className="default-wrapper">
                <div className="default-content">
                    <div className="top">
                        <h3>Default Dashboard</h3>
                    <PathToTab parent={'Dashboards'} tab={'Default'} />
                    </div>
                    <div className="middle">
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Default;