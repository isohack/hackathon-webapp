import React, { Component } from "react";
import "../css/schedule.css";
import pineTree from '../img/pine-trees.png'
import teepee from '../img/schedule-tent.png'
import M from 'materialize-css'
import Bonfire from '../img/bonfire.png'

class Schedule extends Component {

state={
  pineTree: pineTree,
  teepee: teepee,
  Bonfire: Bonfire
}


componentDidMount(){
  M.AutoInit()
}

render() {
  return (
    <>
 
    <div className="scheduleBg">
      <h3 className={"schedule-header center"}>Schedule</h3>
     <img className={"schedule-background"} src={this.state.pineTree} alt="schedule bg"/>
     <img className="bonfire modal-trigger" href="#modal1" src={this.state.Bonfire} alt="bonfire"/>
     <img className="teepee-one modal-trigger" href="#modal1" src={this.state.teepee} alt="teepee"/>
     <img className="teepee-two modal-trigger" href="#modal1" src={this.state.teepee} alt="teepee"/>
     <img className="teepee-three modal-trigger" href="#modal1" src={this.state.teepee} alt="teepee"/>
     <img className="teepee-four modal-trigger" href="#modal1" src={this.state.teepee} alt="teepee"/>
     {/**<img className="teepee-one modal-trigger" href="#modal1" src={this.state.teepee1} alt="teepee"/>
     <img className="teepee-two modal-trigger" href="#modal1" src={this.state.teepee2} alt="teepee"/>
     <img className="teepee-three modal-trigger" href="#modal1" src={this.state.teepee3} alt="teepee"/>
     <img className="teepee-four modal-trigger" href="#modal1" src={this.state.teepee4} alt="teepee"/>
     <img className="teepee-five modal-trigger" href="#modal1" src={this.state.teepee5} alt="teepee"/>
     <img className="teepee-six modal-trigger" href="#modal1" src={this.state.teepee6} alt="teepee"/> */}
    
     
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