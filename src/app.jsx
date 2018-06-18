import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(films) {
        console.log(films);
    });
    }

    render() {
        return (
            <h1>Hello World</h1>
        )
    }
}

export default App;