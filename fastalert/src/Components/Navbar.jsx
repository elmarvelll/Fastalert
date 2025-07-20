import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import Button from "./ButtonLayout";
function Navbar(){
return (
/* <div> */
/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Pricing</a>
        </li>
        <li class="nav-item">
          <a href="/" class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */

  
<div className="navbar navbar-expand-lg navbar-light Navbar">
  <div className="firstNavSection">
    <div className="headerandLogo">
    <FontAwesomeIcon icon={faBolt} size = '2x' />
    <h1>Fastalert</h1>
    </div>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
    <div class="collapse-div collapse navbar-collapse " id="navbarNav">
<div className="navLinks">
        <li>Save</li>
        <li>Invest</li> 
        <li>Stories</li>
        <li>FAQ's</li>
        <li>Resources</li>
       </div>
       <div className="signButtons">
        <Button class = 'customButtonStyle transparent' text = "Log In"/>
        <Button class = 'customButtonStyle black' text = "Sign Up for Free"/>
       </div>
  </div>
    </div>    

// </div>
)
}
export default Navbar