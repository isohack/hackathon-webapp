import React, {Component} from 'react';   
import "../css/CodeOfConductPage.css";
import IsohackLogo from "../img/isohack.png";

class CodeOfConductPage extends Component {
  state = {
    
  };

  componentDidMount() {
  }

  render() {
    return (

	<>
		<div className="wrapper flow-text">
			<div className="main_content">
			<div>
				<img className={"logo"} src={IsohackLogo} alt={"navbar-logo"} />
				<h2>Code of Conduct</h2>
			</div>
				<h4>The Quick Version</h4>
				<p>Isohack is dedicated to providing a safe and comfortable environment
					and harassment-free experience for everyone, regardless of the
					following:</p>
				<ul>
					<li>gender</li>
					<li>gender identity and expression</li>
					<li>age</li>
					<li>sexual orientation</li>
					<li>disability</li>
					<li>physical appearance</li>
					<li>body size</li>
					<li>race</li>
					<li>ethnicity</li>
					<li>nationality</li>
					<li>religion</li>
					<li>political views</li>
					<li>previous hackathon attendance or lack of</li>
					<li>computing experience or lack of</li>
					<li>chosen programming language or tech stack</li>
				</ul>
				<p>We do not tolerate harassment of hackathon participants in any form. Sexual
				language and imagery is not appropriate at any hackathon venue, this
				includes the following:</p>
				<ul>
					<li>hacks</li>
					<li>talks, presentations, or demos</li>
					<li>demos</li>
					<li>any parties associated with the hackathon</li>
					<li>social media</li>
					<li>any other online media</li>
				</ul>
				<h3>The Less Quick Version</h3>
				<p>Harassment includes offensive verbal comments related to gender, gender
				identity and expression, age, sexual orientation, disability, physical
				appearance, body size, race, ethnicity, nationality, religion or political views,
				sexual images in public spaces, deliberate intimidation, stalking, following,
				photography or audio/video recording against reasonable consent, sustained
				disruption of talks or other events, inappropriate physical contact, and
				unwelcome sexual attention.</p>
				<p>Photography is encouraged, but other participants must be given a reasonable
				chance to opt-out of being photographed. If they object to the taking of their
				photograph, comply with their request. It is inappropriate to take photographs in
				contexts where people have a reasonable expectation of privacy (in bathrooms
				or where participants are sleeping).</p>
				<p>Participants asked to stop any harassing behavior are expected to comply
				immediately.</p>
				<p>As this is a hackathon, we like to explicitly note that the hacks created at our
				hackathon are equally subject to the anti-harassment policy.</p>
				<p>Sponsors and partners are also subject to the anti-harassment policy. In
				particular, sponsors should not use sexualized images, activities, or other
				material. Sponsor representatives (including volunteers) should not use
				sexualized clothing/uniforms/costumes or otherwise create a sexualized
				environment.</p>
				<p>If you are being harassed, notice that someone else is being harassed, or
				have any other concerns, please contact a member of the hackathon staff
				immediately.</p>
				<p>Hackathon staff will be happy to help participants contact any local security or
				local law enforcement, provide escorts, or otherwise assist those experiencing
				harassment to feel safe for the duration of the hackathon. We value your
				attendance.</p>
				<p>If a participant engages in harassing behavior, the hackathon organizers may
				take any action they deem appropriate. This includes warning the offender,
				expulsion from the hackathon with no refund (if applicable), or reporting their
				behavior to local law enforcement.</p>
				<p>Deliberate efforts at trying to break the hackathon website ( https://isohack.in )
				will not be tolerated. Every such conduct will cause immediate disqualification
				from the hackathon.</p>
				<p>Plagiarism is strictly prohibited. We encourage the teams to try to inspire
				code/solutions from the web but copy-paste is just undermining the work and
				spirit of your peers and the organizers. Hence, will cause the team’s
				termination.</p>
				<p>We expect participants to follow these rules at hackathon and workshop
				venues and hackathon-related social events.</p>
				<section className="foot-note">Our code of conduct is based on the <a href="https://hackcodeofconduct.org/">Hack Code of Conduct</a> .</section>
			</div>
		</div>
	</>

	)
  };
}

export default CodeOfConductPage;

  

