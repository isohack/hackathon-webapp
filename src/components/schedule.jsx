import React, { Component } from "react";
import "../css/schedule.css";
import scheduleDarkGrass from '../img/schedule-dark-grass.svg'
import scheduleLightGrass from '../img/schedule-light-grass.svg'
import scheduleBackground from '../img/schedule-background-grass.svg'
import teepee from '../img/teepee.png'

import M from 'materialize-css'

class Schedule extends Component {

state={
  scheduleDarkGrass : scheduleDarkGrass,
  scheduleLightGrass : scheduleLightGrass,
  scheduleBackground : scheduleBackground,
  teepee: teepee
}


componentDidMount(){
  M.AutoInit()
}

render() {
  return (
    <>
 
    <div className="scheduleBg">
     <img className={"schedule-background"} src={this.state.scheduleBackground} alt="schedule bg"/>
     <img className={"schedule-dark-grass"} src={this.state.scheduleDarkGrass} alt="schedule bg"/>
     <img className={"schedule-light-grass"} src={this.state.scheduleLightGrass} alt="schedule bg"/>
     <img className="teepee-one modal-trigger" href="#modal1" src={this.state.teepee} alt="teepee"/>
     <img className="teepee-two modal-trigger" href="#modal1" src={this.state.teepee} alt="teepee"/>
     <img className="teepee-three modal-trigger" href="#modal1" src={this.state.teepee} alt="teepee"/>
     <img className="teepee-four modal-trigger" href="#modal1" src={this.state.teepee} alt="teepee"/>
     <img className="teepee-five modal-trigger" href="#modal1" src={this.state.teepee} alt="teepee"/>
     <img className="teepee-six modal-trigger" href="#modal1" src={this.state.teepee} alt="teepee"/>
    </div>


    <div id="modal1" class="modal bottom-sheet">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
          
    </>
 
  );
}
}
export default Schedule;