import React from 'react';
import Filmcard from './filmcard.jsx';


const GhibliList = (props) => {

    let ghibliData = props.items.map((data, index) => {
        return <Filmcard key={index} siteDetails={data} />;
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">{ghibliData}</div>
            </div>
        </div>

    );
};




export default GhibliList;