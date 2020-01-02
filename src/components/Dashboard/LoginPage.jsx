import React, {Component} from 'react';
import './LoginPage.css';
import loginBackgroundGround from '../../img/login-background-ground.png';
import loginBackgroundGroundInvert from '../../img/login-background-ground-invert.png';
import loginBackgroundBuilding from '../../img/login-background-building.png';
import loginBackgroundBuildingInvert from '../../img/login-background-building-invert.png';
import loginBackgroundTreeOne from '../../img/login-background-tree-1.png';
import loginBackgroundTreeTwo from '../../img/login-background-tree-2.png';
import loginBackgroundTreeInvertOne from '../../img/login-background-tree-invert-1.png';
import loginBackgroundTreeInvertTwo from '../../img/login-background-tree-invert-2.png';
import {getToken} from '../../services/hackathon';

class LoginPage extends Component {
    state = {
        backgroundImage: loginBackgroundGround,
        backgroundBuilding: loginBackgroundBuilding,
        backgroundTreeOne: loginBackgroundTreeOne,
        backgroundTreeTwo: loginBackgroundTreeTwo,
		username:'',
		password:''
    };

    componentDidMount() {
    }

    makeNegative() {
        this.setState({
            backgroundImage: loginBackgroundGroundInvert,
            backgroundBuilding: loginBackgroundBuildingInvert,
            backgroundTreeOne: loginBackgroundTreeInvertOne,
            backgroundTreeTwo: loginBackgroundTreeInvertTwo
        });
        document.getElementsByClassName('login-sky')[0].classList.add('main-background-grad-hover');
        document.getElementsByClassName('login-sky')[0].classList.add('grad-night');
    }

    makePositive() {
        this.setState({
            backgroundImage: loginBackgroundGround,
            backgroundBuilding: loginBackgroundBuilding,
            backgroundTreeOne: loginBackgroundTreeOne,
            backgroundTreeTwo: loginBackgroundTreeTwo
        });
        document.getElementsByClassName('login-sky')[0].classList.remove('main-background-grad-hover');
        document.getElementsByClassName('login-sky')[0].classList.remove('grad-night');

    }

	handleClick(event){
		
		 const payload={
			 "email":this.state.username,
			 "password":this.state.password
		 }
		 getToken(payload).then((data) => {
			console.log('token:', data.data.token);
			// store token
			localStorage.setItem("token", data.data.token);
			}).catch((err) => {
			console.log(err);
		 });
	}

    render() {
        return (
            <div className={"login-sky"}>
                <img className={"login-bg-building"} src={this.state.backgroundBuilding} alt={""} />
                <img className={"login-bg-tree-one hide-on-med-and-down"} src={this.state.backgroundTreeOne} alt={""} />
                <img className={"login-bg-tree-two hide-on-med-and-down"} src={this.state.backgroundTreeTwo} alt={""} />
                <img className={"login-bg"} src={this.state.backgroundImage} alt={""} />
                <div>
                        <div className="row">
                            <div className="col s12 m6 l5">
                                <div className="card blue-grey darken-1 login-card">
                                    <div className="card-content white-text">
                                        <span className="card-title login-title">Login</span>
                                        <div className="input-field">
                                            <input id="email" type="text" className="validate white-text"
												onChange={() => {
                                                       this.setState({
															backgroundImage: loginBackgroundGroundInvert,
															backgroundBuilding: loginBackgroundBuildingInvert,
															backgroundTreeOne: loginBackgroundTreeInvertOne,
															backgroundTreeTwo: loginBackgroundTreeInvertTwo,
															username:document.getElementById('email').value,
															password:document.getElementById('password').value
														});
                                                }}
											
											/>
                                                <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="input-field">
                                            <input id="password" type="password" className="validate white-text"
                                                   onFocus={() => {
                                                       this.makeNegative()
                                                   }}
                                                   onBlur={() => {
                                                       this.makePositive()
                                                   }}

												   onChange={() => {
                                                       this.setState({
															backgroundImage: loginBackgroundGroundInvert,
															backgroundBuilding: loginBackgroundBuildingInvert,
															backgroundTreeOne: loginBackgroundTreeInvertOne,
															backgroundTreeTwo: loginBackgroundTreeInvertTwo,
															username:document.getElementById('email').value,
															password:document.getElementById('password').value
														});
                                                }}

                                            />
                                            <label htmlFor="password">Password</label>										
                                        </div>
                                    </div>
									<div>
										<button className="btn btn-success"onClick={(event) => this.handleClick(event)}>Submit</button>
									</div>
                                    <div className="card-action">
                                        <a href="/login">Need help ?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;