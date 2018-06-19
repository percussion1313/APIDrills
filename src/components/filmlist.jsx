import React from 'react';
import Filmcard from './filmcard.jsx';


const Filmlist = (props) => {

    let films = props.items.map((movie, index) => {
        return <Filmcard key={index} filmDetails={movie} />;
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">{films}</div>
            </div>
        </div>

    );
};




export default Filmlist;