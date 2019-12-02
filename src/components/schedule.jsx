import React, { Component } from "react";
import "../css/schedule.css";
 
class Schedule extends Component {
 
render() {
  return (
    <>
 
     <div className="scheduleBg">
     <h1 className="header-text white-text">Schedule</h1>
 
 
      <input type="radio" name="choice" id="day1" checked="checked" />
      <input type="radio" name="choice" id="day2" />
      <label for="day2"></label>
      <label for="day1"></label>
 
      <div class={"cards"}>
        <div class="cards__content">IsoHack</div><br/>
        <div class="cards__content">Hackathon duration</div><br/>
        <div class="cards__content">7th, 00:00</div>
        <div class="cards__content">to</div>
        <div class="cards__content">9th, 12:00</div>
        <footer class="cards__footer">
          <span>This season, hack for a reason</span>
        </footer>
      </div>
 
 
      <div class="cards cards--answer cards--day2">
        <div class="cards__content">9th February</div><br/>
        <div className="row">
          <div className="col s4 m4 l4">12:00</div>
          <div className="col s8 m8 l8">End of hack</div>
        </div>
        <div className="row">
          <div className="col s4 m4 l4">15:00</div>
          <div className="col s8 m8 l8">Presentations start</div>
        </div>
        <div className="row">
          <div className="col s4 m4 l4">18:00</div>
          <div className="col s8 m8 l8">Presentations end</div>
        </div>
        <div className="row">
          <div className="col s4 m4 l4">18:30</div>
          <div className="col s8 m8 l8">Results</div>
        </div>
        <div className="row">
          <div className="col s4 m4 l4">19:00</div>
          <div className="col s8 m8 l8">Terminus</div>
        </div>
      </div>
 
 
      <div class="cards cards--answer cards--day1">
        <div class="cards__content">7th February</div><br/>
        <div className="row">
          <div className="col s4 m4 l4">16:00</div>
          <div className="col s8 m8 l8">Arrival</div>
        </div>
        <div className="row">
          <div className="col s4 m4 l4">18:00</div>
          <div className="col s8 m8 l8">Registration</div>
        </div>
        <div className="row">
          <div className="col s4 m4 l4">20:00</div>
          <div className="col s8 m8 l8">Dinner</div>
        </div>
        <div className="row">
          <div className="col s4 m4 l4">21:30</div>
          <div className="col s8 m8 l8">Inaugration</div>
        </div>
        <div className="row">
          <div className="col s4 m4 l4">23:00</div>
          <div className="col s8 m8 l8">Setup</div>
        </div>
      
      </div>
  
    </div>
    </>
 
  );
}
}
export default Schedule;