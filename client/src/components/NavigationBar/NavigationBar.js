import React from "react";

import './NavigationBar.css'

import logo from './logo_west_small.png'

function NavigationBar(props) {
  return (
    <div className="navigation-bar">
      <img src={logo}/>
      <h1>Science Expirement</h1>
    </div>
  );
}

export default NavigationBar

