import React, { Component } from 'react';
import GhibliList from './components/ghiblilist';

const BASE_URL = 'https://ghibliapi.herokuapp.com/films';
// const OTHER_URL = 'https://ghibliapi.herokuapp.com/people';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            filmToggle: false
        }
    }

    componentDidMount = () => {
        fetch(`${BASE_URL}`)
            .then((results) => {
                return results.json()
            }).then((result) => {
                    this.setState({
                        filmToggle: true,
                        data: result
                    });
                }).then((error) => {
                    this.setState({error})
                })

    }

    showFilms = () => {
		this.setState({filmToggle: !this.state.filmToggle});
    }
    
    showPeople = () => {
		this.setState({filmToggle: !this.state.filmToggle});
	}
    
    render() {
    
    if (!this.state.filmToggle) {    
        return (
            <React.Fragment>
                <h1 className="text-center text-shadow">STUDIO GHIBLI</h1>
                <button id="card-button" className="btn btn-success d-flex mx-auto shadow" onClick={this.showFilms}>Hide Films</button>
                <GhibliList items={this.state.data} />
            </React.Fragment>) 
    } else {
        return (
            <React.Fragment>
                <h1 className="text-center text-shadow">STUDIO GHIBLI</h1>
                <button id="card-button" className="btn btn-success d-flex mx-auto shadow" onClick={this.showFilms}>See Films</button>
                <button id="card-button" className="btn btn-success d-flex mx-auto shadow" onClick={this.showPeople}>See People</button>
            </React.Fragment>
            )
        }
    }
}




export default App;
