import React, { Component } from 'react';
import Filmcard from './components/filmcard';

const BASE_URL = 'https://ghibliapi.herokuapp.com/films';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: [],
        }
    }
    componentDidMount = () => {
        fetch(`${BASE_URL}`)
            .then((results) => {
                return results.json()
            }).then(
              (result) => {
                this.setState({
                  id: result.id
                });
            })

    }

    render() {
        const { id } = this.state;
        
        return (
  
            <React.Fragment>
                <Filmcard />
            </React.Fragment>
           
        )
    }
}




export default App;

// let filmData = {
//     username: document.getElementById("title").value,
//     chirp: document.getElementById("description").value
//   };


// componentDidMount = () => {
//     fetch((obj) => console.log(obj))
// }

// {title.map(title =>
//     <div key={title.objectID}>
//       