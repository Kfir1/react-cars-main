import React from 'react';

import './App.css';
import CarsView from './components/CarsView';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Spinner } from 'react-bootstrap';

import Car from './data-models/Car';
import { Route } from 'react-router';
import { HashRouter, Link } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import SingleCar from './components/SingleCar';



// ./ means the current directory
// ../ means go up one directory
// ./components/CarsView
class App extends React.Component {
  // 1) After loading the page, get the data from cars-data.json
  // 2) Convert data to Car class
  // 3) Pass the cars into the carsData prop
  // Where should I put the AJAX call?
  constructor(props){
    super(props);
    this.state = {
      carsData: [],
    }
    // 1) Create a componentDidMount Hook
    // 2) Save the json data into a variable
    // 3) Save the json data into state
    // 4) use State to pass to the carsData prop
  }
  componentDidMount = () => {
    fetch('/cars-data.json')
      .then( (bytes) => {return bytes.json()})
      .then(res => {
        const carsData = res.map( car => new Car(car.brand, car.model, car.year, car.km, car.id));
        this.setState({carsData: carsData});
        
      })
      .catch((err) => {
        alert('the ajax has failed')
        console.log(err)
      })
  }

  render(){

    return (
      <HashRouter>
      <div>

        {/* <a href="/">HOME </a> */}
        {/* <a href="/#/about">ABOUT </a>
        <a href="/#/contact">CONTACT</a> */}
        <Jumbotron>
          <ul>
                  <li><Link to="/">HOME </Link></li>
                  <li><Link to="/about">ABOUT </Link></li>
                  <li><Link to="/contact">CONTACT </Link></li>
          </ul>
          </Jumbotron>
        
          <Route exact path = "/">
              <div>
              {
              (this.state.carsData && this.state.carsData.length > 0) ? 
                <CarsView carsData={this.state.carsData}/> :
                <h1>Loading...<Spinner animation="border" variant="primary" /></h1>
              }
              </div>
        </Route>
        <Route exact path = "/about">
           <About />
        </Route> 
        <Route exact path = "/contact">
            <Contact />
        </Route>   
        {/* /car/ is static part and :carId is dynamic part from. we can add another dynamic part (/car/:userName)  a*/}
        <Route exact path='/car/:carId'>
              <SingleCar carsData={this.state.carsData} />
        </Route>
      </div>
      </HashRouter>
    );    
  }

}

export default App;


// npm install react-router-dom
  // Wrap the whole app with HashRouter
  // Create AboutComp which will simply show some text
  // Create 2 routes:
  // 1. The cars table <Route exact path ="/">
  // 2. The about route
  // Add 2 links for homepage and the about, dont forget the #yarons-channel


  // Stage 2
  // Add a dynamic route <Route exact path='/staticPart/:someId'>
  // Wrap the export with withRouter i.e. export default withRouter(Mycomp);
  // In the component that the someId variable is used-> this.props.match.params.someId
  // Add links to the different Routes i.e.:
      /// /staticPart/1
      /// /staticPart/2
      /// /staticPart/3 (edited) 

    