import React, {Component} from "react";

class ScrollUp extends Component{

	state = {
		display:"not visible"
	};

	componentDidMount(){
		
		
	}

	


	render(){
		return(
			<>
			<div className="fixed-action-btn">
				// eslint-disable-next-line react/jsx-no-target-blank
				<a className="btn-floating red scroll-up-button scale-transition scale-out scale-in" 
				id="scroll-up-button" onClick={()=>{ window.scrollTo(0, 0); }}>
					<i className="material-icons scroll-up-button-icon">keyboard_arrow_up</i>
				</a>
			</div>
			</>
		);
	}
}

export default ScrollUp;
