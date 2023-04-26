import { Fragment } from 'react';
import './App.css';
import { Card } from './component/card';



function App() {
 
  return (
    <Fragment>
    <div className="App">
      <Card img="tshirt1.jpg" color="red" itemname='T-shirt'description='Cotton Crew-Neck T-shirt'mrp='350'rating="rating: 3"/>
      <Card img="tshirt2.jpg" color="red" itemname='T-shirt'description='Cotton Crew-Neck T-shirt'mrp='500'rating="rating: 4"/>
      <Card img="tshirt3.jpg" color="red" itemname='T-shirt'description='Cotton Crew-Neck T-shirt'mrp='450'rating="rating: 4"/>
      </div>
      <div className="App">
      <Card img="tshirt4.jpg" color="red" itemname='T-shirt'description='Cotton Crew-Neck T-shirt'mrp='600'rating="rating: 1"/>
      <Card img="tshirt5.jpg" color="red" itemname='T-shirt'description='Cotton Crew-Neck T-shirt'mrp='400'rating="rating: 5"/>
    </div>
  
    </Fragment>
  );
}

export default App;
