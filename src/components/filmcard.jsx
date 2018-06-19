import React from 'react';

const Filmcard = (props) => {
    return (
    <div> 
        {this.state.id.map(id => (
        <div className="card bg-light mb-3 m-0 ">
            <div key={id.title}> className="card-header bg-primary text-white" id="title">{props.title}</div>
            <div className="card-body ">
                <h5 key={id.description} className="card-title">{props.description}</h5>
            </div>
        </div> ))}
    </div>);  
}

export default Filmcard


//title + description

// return (
//     <ul>
//       {items.map(item => (
//         <li key={item.name}>
//           {item.name} {item.price}
//         </li>
//       ))}
//     </ul>