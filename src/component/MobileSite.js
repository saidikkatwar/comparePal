import React from 'react';
import './MobileSite.scss';
import mobile from './resources/user-interface.png';

function MobileSite(){
    return(
        <div className="root">
            <div className="card">
                <div className="title">Mobile</div>
                <div className="icon">
                    <img 
                        className="img"
                        src={mobile} 
                        alt="mobile"
                        height='400px'
                        width='400px' />
                </div>
            </div>
        </div>
    )
}

export default MobileSite;