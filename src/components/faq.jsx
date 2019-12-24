import React, { Component } from "react";
import "../css/faq.css";
import "../js/faq";
import FAQ from "../img/isohack1.svg";
class Faq extends Component {
  state = {
    FaqImage: FAQ
  };
  render() {
    return (
      <>
      
        <div className="faqBackground">
          <div className="row">
          <h1 className="header-text text-gradient" style={{fontFamily: "'Lilita One', cursive"}}>F.A.Q</h1>

          </div>
          <div className="row faq-section">
            <div className="col s12 m6 l6">
              <ul class="collapsible z-depth-0">
                <li style={{fontSize: '20px'}}>
                  <div class="collapsible-header">
                    <i class="material-icons">add_circle_outline</i> Where will the event be held and when will it start?
                  </div>
                  <div class="collapsible-body">
                    <span> IsoHack will be held in the ATC CSE Department. You can
                      find the detailed schedule, along with the venue and
                      contact details of SPOC and organizers</span>
                  </div>
                </li>
                <li style={{fontSize: '20px'}}>
                  <div class="collapsible-header">
                    <i class="material-icons">add_circle_outline</i>What should I bring on the event with me?
                  </div>
                  <div class="collapsible-body">
                    <span> Bring your laptops, mobile phones, wearable computing
                      devices and whatever technology inspires you. Make sure
                      that you will feel comfortable during intense hacking and
                      if you are going to sleep on the venue, please bring a
                      blanket or a sleeping bag. Above all, bring your energy
                      and your brain!</span>
                  </div>
                </li>
                <li style={{fontSize: '20px'}}>
                  <div class="collapsible-header">
                    <i class="material-icons">add_circle_outline</i>What about food?

                  </div>
                  <div class="collapsible-body">
                    <span>We will make sure that you don’t run out of energy during
                      intense hacking! Besides breakfast, lunch and dinner,
                      there will always be coffee and snacks provided in the
                      refreshments corner. If you have any special dietary
                      needs, let us know in the application form or directly
                      email to us.</span>
                  </div>
                </li>
                <li style={{fontSize: '20px'}}>
                  <div class="collapsible-header">
                    <i class="material-icons">add_circle_outline</i>When is the deadline for registration and submission of
                      problem statement?

                  </div>
                  <div class="collapsible-body">
                    <span>The final deadline for the application is February 15,
                      2020. We have limited amount of space, so hurry up!</span>
                  </div>
                </li>
                <li style={{fontSize: '20px'}}>
                  <div class="collapsible-header">
                    <i class="material-icons">add_circle_outline</i>What is the expected output of the event and how are the
                      final presentations going to look like?

                  </div>
                  <div class="collapsible-body">
                    <span>We expect that you will develop a working prototype which
                      will represent your idea. We suggest to focus more on the
                      working of your project rather than displaying a
                      presentation. Final presentations are limited to a 5
                      minute pitch and possible Q&A from the judges.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col s12 m6 l6"><ul class="collapsible z-depth-0">
                <li style={{fontSize: '20px'}}>
                  <div class="collapsible-header">
                    <i class="material-icons">add_circle_outline</i>Can I apply to multiple challenges?
                  </div>
                  <div class="collapsible-body">
                    <span>
                      Yes, you can. Your ideas can present the solutions for
                      more than one themes and problem statements. Problem
                      statements are there to guide you to think about current
                      issues in the society that are of our partners’ interests.
                      All the hacks presented on Sunday will compete for the
                      Best IsoHack award.</span>
                  </div>
                </li>
                <li style={{fontSize: '20px'}}>
                  <div class="collapsible-header">
                    <i class="material-icons">add_circle_outline</i>I am not developer or designer, can I still apply?
                  </div>
                  <div class="collapsible-body">
                    <span>Yes, but keep in mind that you have to develop a working
                      prototype in 36 hours. It is not a problem if you are not
                      a programmer, we will have mentors and volunteers to guide
                      you throughout the hackathon and hear out your doubts and
                      navigate you through the problems you and your team are
                      facing.</span>
                  </div>
                </li>
                <li style={{fontSize: '20px'}}>
                  <div class="collapsible-header">
                    <i class="material-icons">add_circle_outline</i>Are there any rules that I should follow during the event?
                  </div>
                  <div class="collapsible-body">
                    <span>Yes, see them <a href="code_of_conduct.html">here.</a></span>
                  </div>
                </li>
                <li style={{fontSize: '20px'}}>
                  <div class="collapsible-header">
                    <i class="material-icons">add_circle_outline</i> What is the team size?
                  </div>
                  <div class="collapsible-body">
                    <span> The team size can be anywhere between 1-3 members</span>
                  </div>
                </li>
                <li style={{fontSize: '20px'}}>
                  <div class="collapsible-header">
                    <i class="material-icons">add_circle_outline</i>Do you have any more questions?
                  </div>
                  <div class="collapsible-body">
                    <span>Shoot us an email at atc.isohack@gmail.com</span>
                  </div>
                </li>
              </ul></div>
          </div>
          {/**
                 
                    </p>
                  </div>
                  <div class="collapsible-body" style={{ border: "none" }}>
                    <span className="white-text">
                     
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </>
    );
  }
}

export default Faq;
