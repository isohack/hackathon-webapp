import React, { Component } from "react";
import "../css/schedule.css";
import scheduleDarkGrass from '../img/schedule-dark-grass.svg'
import scheduleLightGrass from '../img/schedule-light-grass.svg'
import scheduleBackground from '../img/schedule-background-grass.svg'
import teepee1 from '../img/teepee1.png'
import teepee2 from '../img/teepee2.png'
import teepee3 from '../img/teepee3.png'
import teepee4 from '../img/teepee4.png'
import teepee5 from '../img/teepee5.png'
import teepee6 from '../img/teepee6.png'

import M from 'materialize-css'

class Schedule extends Component {

state={
  scheduleDarkGrass : scheduleDarkGrass,
  scheduleLightGrass : scheduleLightGrass,
  scheduleBackground : scheduleBackground,
  teepee1: teepee1,
  teepee2: teepee2,
  teepee3: teepee3,
  teepee4: teepee4,
  teepee5: teepee5,
  teepee6: teepee6
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
     <img className="teepee-one modal-trigger" href="#modal1" src={this.state.teepee1} alt="teepee"/>
     <img className="teepee-two modal-trigger" href="#modal1" src={this.state.teepee2} alt="teepee"/>
     <img className="teepee-three modal-trigger" href="#modal1" src={this.state.teepee3} alt="teepee"/>
     <img className="teepee-four modal-trigger" href="#modal1" src={this.state.teepee4} alt="teepee"/>
     <img className="teepee-five modal-trigger" href="#modal1" src={this.state.teepee5} alt="teepee"/>
     <img className="teepee-six modal-trigger" href="#modal1" src={this.state.teepee6} alt="teepee"/>
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