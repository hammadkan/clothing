import React from "react";
import {Route, Link} from 'react-router-dom';
import "./App.css";

import HomePage from "./pages/homepage/homepage.component.jsx";

const HatsPage = () => (
<div>
<h1>HATS PAGE</h1>
</div>
)

  const Sneakers = () => (
    <div>
    <h1>Sneakers PAGE</h1>
    </div>
    )

    const Womens = () => (
      <div>
      <h1>Womens PAGE</h1>
      </div>
      )
 
      const Mens = () => (
        <div>
        <h1>Mens PAGE</h1>
        </div>
        )
              
const Jackets = props => {
  console.log(props);
  return(
  <div>
  <h1>Jackets</h1>
  </div>
  );
  };

function App() {
  return <div> 
  <Route exact path='/' component={HomePage} />
  <Route path='/hats' component={HatsPage} />
  <Route path='/jackets' component={Jackets} />
  <Route path='/sneakers' component={Sneakers} />
  <Route path='/womens' component={Womens} />
  <Route path='/mens' component={Mens} />
  </div>;
}

export default App;
