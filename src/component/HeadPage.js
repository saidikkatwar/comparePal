import React from 'react';
import PropTypes from 'prop-types';
import './_headpage.scss';

const HeadPage=(prop)=>{
    return(
        <div id="headpagemain">
            <div className="maincard">
                <h1 className="title">{prop.title}</h1>
                <p className="para">{prop.desc}</p>
            </div>
        </div>
    );
}
HeadPage.propTypes ={
    title:PropTypes.string,
    desc:PropTypes.string
}

export default HeadPage;