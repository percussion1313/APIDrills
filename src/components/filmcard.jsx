import React from 'react';

const Filmcard = (props) => {
    return (
    
        <div className="card bg-light m-4">
            <div className="card-header bg-dark text-white">{props.filmDetails.title}</div>
            <div className="card-body">
                <h5 className="card-title">{props.filmDetails.description}</h5>
            </div>
        </div>
    )
   
}

export default Filmcard

