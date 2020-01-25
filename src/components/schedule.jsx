import React, {Component} from "react";
import "../css/schedule.css";
import pineTree from '../img/pine-trees.png'
import teepee from '../img/schedule-tent.png'
import M from 'materialize-css'
import Bonfire from '../img/bonfire.png'
import RegisterDate from '../img/registration-date.png'
import ShortlistDate from '../img/shortlist-date.png'
import FirstDay from '../img/first-day-date.png'
import SecondDay from '../img/second-day-date.png'

class Schedule extends Component {

  state = {
    pineTree: pineTree,
    teepee: teepee,
    Bonfire: Bonfire,
    RegisterDate: RegisterDate,
    ShortlistDate: ShortlistDate,
    FirstDay: FirstDay,
    SecondDay: SecondDay
  }


  componentDidMount() {
    M.AutoInit()
  }

  render() {
    return (
      <>

        <div className="scheduleBg">
          <h3 className={"schedule-header center"}>Schedule</h3>
          <img className={"schedule-background"} src={this.state.pineTree} alt="schedule bg"/>
          <div className={"row center white-text schedule-body"}>
            <div className={"col s3 m3 l3"}>
              <a className="btn-floating btn-large pulse modal-trigger red" href="#modal2"><i className="material-icons">cloud</i></a>
              <p>28th of December, 2019</p>
            </div>
            <div className={"col s3 m3 l3"}>
              <a className="btn-floating btn-large modal-trigger" href="#modal3"><i className="material-icons">cloud</i></a>
              <p>10th of Feburary, 2020</p>
            </div>
            <div className={"col s3 m3 l3"}>
              <a className="btn-floating btn-large modal-trigger" href="#modal4"><i className="material-icons">cloud</i></a>
              <p>22nd of February, 2020</p>
            </div>
            <div className={"col s3 m3 l3"}>
              <a className="btn-floating btn-large modal-trigger" href="#modal1"><i className="material-icons">cloud</i></a>
              <p>23nd of Feburary, 2020</p>
            </div>
          </div>
          {/*<img className="bonfire" src={this.state.Bonfire} alt="bonfire"/>*/}
          {/*<img className="teepee-one modal-trigger" href="#modal1" src={this.state.teepee} alt="teepee"/>*/}
          {/*<img className="register-date" src={this.state.RegisterDate} alt="register-date"/>*/}
          {/*<img className="teepee-two modal-trigger" href="#modal2" src={this.state.teepee} alt="teepee"/>*/}
          {/*<img className="shortlist-date" src={this.state.ShortlistDate} alt="shortlist-date"/>*/}
          {/*<img className="teepee-three modal-trigger" href="#modal3" src={this.state.teepee} alt="teepee"/>*/}
          {/*<img className="first-day-date" src={this.state.FirstDay} alt="first-date"/>*/}
          {/*<img className="teepee-four modal-trigger" href="#modal4" src={this.state.teepee} alt="teepee"/>*/}
          {/*<img className="second-day-date" src={this.state.SecondDay} alt="second-date"/>*/}
          {/**<img className="teepee-one modal-trigger" href="#modal1" src={this.state.teepee1} alt="teepee"/>
           <img className="teepee-two modal-trigger" href="#modal1" src={this.state.teepee2} alt="teepee"/>
           <img className="teepee-three modal-trigger" href="#modal1" src={this.state.teepee3} alt="teepee"/>
           <img className="teepee-four modal-trigger" href="#modal1" src={this.state.teepee4} alt="teepee"/>
           <img className="teepee-five modal-trigger" href="#modal1" src={this.state.teepee5} alt="teepee"/>
           <img className="teepee-six modal-trigger" href="#modal1" src={this.state.teepee6} alt="teepee"/> */}


        </div>


        <div id="modal1" className="modal bottom-sheet">
          <div className="modal-content">
            <h4 className="center">23/2/2020</h4>
            <table className="centered highlight responsive-table">
              <thead>
              <tr>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Event</th>
              </tr>
              </thead>

              <tbody>
              <tr>
                <td>__:__</td>
                <td>__:__</td>
                <td>Breakfast</td>
              </tr>
              <tr>
                <td>__:__</td>
                <td>__:__</td>
                <td>Lunch</td>
              </tr>
              <tr>
                <td>__:__</td>
                <td>__:__</td>
                <td>Presentations Begin</td>
              </tr>
              <tr>
                <td>__:__</td>
                <td>__:__</td>
                <td>Winners Announcement</td>
              </tr>
              <tr>
                <td>__:__</td>
                <td>__:__</td>
                <td>Goodbye with warm memories</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>


        <div id="modal2" className="modal bottom-sheet">
          <div className="modal-content">
            <h4 className="header center">28/12/2019 to 7/2/2020</h4>
            <h5 className="center">Registration starts and ends</h5>

          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>


        <div id="modal3" className="modal bottom-sheet">
          <div className="modal-content">
            <h4 className="header center">10/2/2020</h4>
            <h5 className="center">Shortlisted teams annonuced and RSVP sent to shortlisted teams</h5>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>


        <div id="modal4" className="modal bottom-sheet">
          <div className="modal-content">
            <h4 className="center">22/2/20</h4>
            <table className="centered highlight responsive-table">
              <thead>
              <tr>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Event</th>
              </tr>
              </thead>

              <tbody>
              <tr>
                <td>__:__</td>
                <td>__:__</td>
                <td>Checkin and registration of participants</td>
              </tr>
              <tr>
                <td>__:__</td>
                <td>__:__</td>
                <td>Opening ceremony</td>
              </tr>
              <tr>
                <td>__:__</td>
                <td>__:__</td>
                <td>Keynote session</td>
              </tr>
              <tr>
                <td>__:__</td>
                <td>__:__</td>
                <td>Dinner</td>
              </tr>
              <tr>
                <td>__:__</td>
                <td>__:__</td>
                <td>Workshop A</td>
              </tr>
              <tr>
                <td>__:__</td>
                <td>__:__</td>
                <td>Release of Problem Statements</td>
              </tr>
              <tr>
                <td>__:__</td>
                <td>__:__</td>
                <td>Hackathon begins</td>
              </tr>
              <tr>
                <td>__:__</td>
                <td>__:__</td>
                <td>Snacks Break</td>
              </tr>
              <tr>
                <td>__:__</td>
                <td>__:__</td>
                <td>Breakfast</td>
              </tr>
              <tr>
                <td>__:__</td>
                <td>__:__</td>
                <td>Lunch</td>
              </tr>
              <tr>
                <td>__:__</td>
                <td>__:__</td>
                <td>Dinner</td>
              </tr>
              <tr>
                <td>__:__</td>
                <td>__:__</td>
                <td>Midnight Snacks Break</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>


      </>

    );
  }
}

export default Schedule;