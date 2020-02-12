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
              <p>10th of Feburary, 2020</p>
            </div>
            <div className={"col s3 m3 l3"}>
              <a className="btn-floating btn-large modal-trigger" href="#modal3"><i className="material-icons">cloud</i></a>
              <p>22nd of February, 2020</p>
            </div>
            <div className={"col s3 m3 l3"}>
              <a className="btn-floating btn-large modal-trigger" href="#modal4"><i className="material-icons">cloud</i></a>
              <p>23rd of February, 2020</p>
            </div>
            <div className={"col s3 m3 l3"}>
              <a className="btn-floating btn-large modal-trigger" href="#modal1"><i className="material-icons">cloud</i></a>
              <p>24th of Feburary, 2020</p>
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
            <h4 className="center">24/2/2020</h4>
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
                <td>1:00</td>
                <td></td>
                <td>Final Mentor Round</td>
              </tr>
              <tr>
                <td>2:00</td>
                <td>2:30</td>
                <td>Midnight Snacks</td>
              </tr>
              <tr>
                <td>5:00</td>
                <td></td>
                <td>Hackathon Ends</td>
              </tr>
              <tr>
                <td>6:00</td>
                <td>10:00</td>
                <td>Presentation Rounds</td>
              </tr>
              <tr>
                <td>10:00</td>
                <td>10:30</td>
                <td>Breakfast</td>
              </tr>
              <tr>
                <td>10:30</td>
                <td>11:00</td>
                <td>Prize Distribution Ceremony and goodbye with warm memories</td>
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
            <h4 className="header center">10/2/2020</h4>
            <h5 className="center">Shortlisted teams announced and RSVP mails sent</h5>

          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>


        <div id="modal3" className="modal bottom-sheet">
          <div className="modal-content">
            <h4 className="header center">22/2/2020</h4>
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
                <td>15:00</td>
                <td>17:00</td>
                <td>Checkin and registration of participants</td>
              </tr>
              <tr>
                <td>17:00</td>
                <td>19:00</td>
                <td>Isohack inaugration with keynote sessions from mentors</td>
              </tr>
              <tr>
                <td>19:00</td>
                <td>20:00</td>
                <td>Dinner</td>
              </tr>
              <tr>
                <td>20:00</td>
                <td>20:30</td>
                <td>Release of Problem Statements</td>
              </tr>
              <tr>
                <td>20:30</td>
                <td></td>
                <td>Hackathon begins</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>


        <div id="modal4" className="modal bottom-sheet">
          <div className="modal-content">
            <h4 className="center">23/2/20</h4>
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
                <td>2:00</td>
                <td>2:30</td>
                <td>Midnight Snacks</td>
              </tr>
              <tr>
                <td>4:00</td>
                <td></td>
                <td>Mentor Round - 1</td>
              </tr>
              <tr>
                <td>9:00</td>
                <td>9:30</td>
                <td>Breakfast</td>
              </tr>
              <tr>
                <td>12:00</td>
                <td></td>
                <td>Mentor Round - 2</td>
              </tr>
              <tr>
                <td>13:30</td>
                <td>14:30</td>
                <td>Lunch</td>
              </tr>
              <tr>
                <td>15:00</td>
                <td>15:30</td>
                <td>Keynote session by Sameer Khan</td>
              </tr>
              <tr>
                <td>17:30</td>
                <td>18:00</td>
                <td>High Tea</td>
              </tr>
              <tr>
                <td>20:00</td>
                <td></td>
                <td>Mentor Round - 3</td>
              </tr>
              <tr>
                <td>21:00</td>
                <td>22:00</td>
                <td>Dinner</td>
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