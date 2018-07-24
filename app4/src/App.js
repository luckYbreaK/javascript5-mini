import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {

      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    const mappedCars = this.state.cars.map( (car, i) => {
      return(
        <div key={i}>
          <p>Make: {car.make}, Model: {car.model}, Year: {car.year},</p>
          <p>Color: {car.color}, Price: ${car.price}</p>
        </div>
      );
    });
    return (
      <div className="App">
        <button onClick={() => this.getCars()}>Get cars</button>
        {mappedCars}
      </div>
    );
  }
}

export default App;
