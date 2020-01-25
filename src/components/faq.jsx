import React, { Component } from "react";
import "../css/faq.css";
import "../js/faq";
class Faq extends Component {
  render() {
    return (
      <>
        <div className="faqBackground">
          <div className="row">
            <h1
              className="header-text text-gradient"
              style={{ fontFamily: "'Lilita One', cursive" }}
            >
              F.A.Q
            </h1>
          </div>
          <div className="row faq-section">
            <div className="col s12 m6 l6">
              <ul className={"collapsible z-depth-0"}>
                <li style={{ fontSize: "20px" }}>
                  <div className={"collapsible-header"}>
                    <i className={"material-icons"}>add_circle_outline</i> What
                    is a hackathon?
                  </div>
                  <div className={"collapsible-body"}>
                    <span>
                      A hackathon is made from two words: "hack" and "marathon" and is best described as an “invention marathon”.
                      Anyone who has an interest in technology attends a
                      hackathon to learn, build and share their creations over the
                      course of the event in an electric and welcoming atmosphere.
                      You don’t have to be a programmer and you certainly don’t
                      have to be majoring in Computer Science.
                    </span>
                  </div>
                </li>
                <li style={{ fontSize: "20px" }}>
                  <div className={"collapsible-header"}>
                    <i className={"material-icons"}>add_circle_outline</i>What
                    should I bring on the event with me?
                  </div>
                  <div className={"collapsible-body"}>
                    <span>
                      {" "}
                      Bring your laptops, mobile phones, wearable computing
                      devices and whatever technology inspires you. Make sure
                      that you will feel comfortable during the intense hacking
                      and if you are going to sleep on the venue, please bring a
                      blanket or a sleeping bag. Above all, bring your energy
                      and your brain!
                    </span>
                  </div>
                </li>
                <li style={{ fontSize: "20px" }}>
                  <div className={"collapsible-header"}>
                    <i className={"material-icons"}>add_circle_outline</i>What
                    about food?
                  </div>
                  <div className={"collapsible-body"}>
                    <span>
                      We will make sure that you don’t run out of energy!
                      Besides breakfast, lunch and dinner, there will always be
                      coffee and snacks provided in the refreshments corner. If
                      you have any special dietary needs, let us know in the
                      application form or shoot us an email.
                    </span>
                  </div>
                </li>
                <li style={{ fontSize: "20px" }}>
                  <div className={"collapsible-header"}>
                    <i className={"material-icons"}>add_circle_outline</i>When
                    is the deadline for registration ?
                  </div>
                  <div className={"collapsible-body"}>
                    <span>
                      The final deadline for the application is February 7,
                      2020. We have limited amount of space, so hurry up!
                    </span>
                  </div>
                </li>
                <li style={{ fontSize: "20px" }}>
                  <div className={"collapsible-header"}>
                    <i className={"material-icons"}>add_circle_outline</i>What
                    is the expected output of the event and how are the final
                    presentations going to look like?
                  </div>
                  <div className={"collapsible-body"}>
                    <span>
                      We expect that you will develop a working prototype which
                      will represent your idea and satisfy the problem
                      statement(s) given at the hackathon
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col s12 m6 l6">
              <ul className={"collapsible z-depth-0"}>
                <li style={{ fontSize: "20px" }}>
                  <div className={"collapsible-header"}>
                    <i className={"material-icons"}>add_circle_outline</i> Where
                    will the hackathon be held and when will it start?
                  </div>
                  <div className={"collapsible-body"}>
                    <span>
                      IsoHack will be held within the campus of Acropolis
                      Technical Campus, Indore. The 36-hour hackathon will start
                      on the 22nd of February 2020 and end on the 24th of
                      February 2020.
                    </span>
                  </div>
                </li>
                <li style={{ fontSize: "20px" }}>
                  <div className={"collapsible-header"}>
                    <i className={"material-icons"}>add_circle_outline</i>I am
                    neither a developer nor a designer, can I still apply?
                  </div>
                  <div className={"collapsible-body"}>
                    <span>
                      Yes, but keep in mind that you have to develop a working
                      prototype in 36 hours. It is not a problem if you are not
                      a programmer, we will have mentors and volunteers to guide
                      you throughout the hackathon and hear out your doubts and
                      navigate you through the problems you and your team are
                      facing.
                    </span>
                  </div>
                </li>
                <li style={{ fontSize: "20px" }}>
                  <div className={"collapsible-header"}>
                    <i className={"material-icons"}>add_circle_outline</i>Are
                    there any rules that I should follow during the event?
                  </div>
                  <div className={"collapsible-body"}>
                    <span>
                      Yes, you can find the code of conduct{" "}
                      <a href="index.html">here</a>.
                    </span>
                  </div>
                </li>
                <li style={{ fontSize: "20px" }}>
                  <div className={"collapsible-header"}>
                    <i className={"material-icons"}>add_circle_outline</i> What
                    should the team size be?
                  </div>
                  <div className={"collapsible-body"}>
                    <span>
                      {" "}
                      The team size can be anywhere between 1-3 members.
                    </span>
                  </div>
                </li>
                <li style={{ fontSize: "20px" }}>
                  <div className={"collapsible-header"}>
                    <i className={"material-icons"}>add_circle_outline</i>Do you
                    have any more questions?
                  </div>
                  <div className={"collapsible-body"}>
                    <span>Shoot us an email at atc.isohack@gmail.com</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Faq;
