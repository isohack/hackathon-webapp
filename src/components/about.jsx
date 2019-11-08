import React from "react";

const About = () => (
  <div
    className="section"
    style={{ backgroundColor: "#02244aff"}}
  >
    <div className="row">
      <div className="col s12 m6 l6">
        <h1 className="header center white-text">About</h1>
        <p
          style={{ marginLeft: "100px", fontSize: "18px" }}
          className="cyan-text text-darken-1"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br/><br/>
          Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
          <br/><br/>
          Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
          <br/><br/>
          Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo voluptas nulla pariatur?
        </p>
        <br />
        <div className="row">
          <div col="s12 m4 l4">
            <p
              style={{ marginLeft: "100px", fontSize: "28px" }}
              className="orange-text text-darken-2"
            >
              <strong className="white-text">Venue: </strong> Acropolis
              Technical Campus
            </p>
          </div> <br/>
          <div col="s12 m4 l4">
            <p
              style={{ marginLeft: "100px", fontSize: "28px" }}
              className="orange-text text-darken-2"
            >
              <strong className="white-text">Date: </strong> February 7 - February 9, 2020
            </p>
          </div>
          
        </div>
        
      </div>
      <div className="col s12 m6 l6 hide-on-med-and-down">
          <img style={{marginLeft: '70px'}} src="https://webstockreview.net/images/network-clipart-business-networking-5.png" alt="network" />
      </div>
    </div>
  </div>
);

export default About;
