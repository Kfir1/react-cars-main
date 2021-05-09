import React from 'react';
import { withRouter } from 'react-router';



class SingleCar extends React.Component{
    constructor(props){
    super(props);

    }

    render(){
// this.props.match exists because I used withRouter()
        const carIndex = this.props.match.params.carId;  // what the user puts in carId 
        const currentCar = this.props.carsData[carIndex];
        
        return (
            <div>
                <p>{currentCar.brand}</p>
                <p>{currentCar.model}</p>
                <p>{currentCar.year}</p>
            </div>
        )
    }
}

export default withRouter(SingleCar);
//if not using withRouter() we can not use (this.props.match.params.carId;)

//withRouter
//You can get access to the history object’s properties and the closest <Route>'s
// match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.