import React, { Component } from 'react';
import Filmlist from './components/filmlist';

const BASE_URL = 'https://ghibliapi.herokuapp.com/films';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: [],
        }
    }

    componentDidMount = () => {
        fetch(`${BASE_URL}`)
            .then((results) => {
                return results.json()
            }).then(
                (result) => {
                    this.setState({
                        movie: result
                    });
                })

    }

    render() {

        return (

            <React.Fragment>
                <h1 className="text-center">STUDIO GHIBLI FILMS</h1>
                <Filmlist items={this.state.movie} />
            </React.Fragment>

        )
    }
}




export default App;
