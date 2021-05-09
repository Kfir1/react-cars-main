import React from 'react';
import { Jumbotron, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './CarsView.css';
// ./ means the current directory
// ../ means go up one directory
// ./components/CarsView
class CarsView extends React.Component{
    constructor(props){
    super(props);
       this.state = {
           currentCar : {}
       };

    }
    chooseCar = (car) => {
        this.setState(
            {
                currentCar: car
            }
        )
    }
    render(){
        const carRows = this.props.carsData.map( (car, index) => {
            return (
            <tr key={index} onClick={() => this.chooseCar(car)}>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.km}</td>
                <td>{car.kmPerYear()}</td>
                <td><Link to={`/car/${index}`}>Click Me</Link></td>
                {/* create a link dynamically bring index from map to --exact path='/car/:carId'-- in App.js . click will give specific car info by it's index */}
            </tr>
                )
        })
        return (
            <div>
            <Table striped className="my-table">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>KM</th>
                        <th>KM per year</th>
                    </tr>
                </thead>
                <tbody>
                    {carRows}
                </tbody>
            </Table>
            <Jumbotron>
                <h1>Selected car info</h1>
                <h2>{this.state.currentCar.brand}</h2>
                <h3>{this.state.currentCar.model}</h3>
            </Jumbotron>
            </div>
        )
    }
}

export default CarsView;