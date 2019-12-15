import React, { Component } from "react";
import "../css/faq.css";
import "../js/faq";
class Faq extends Component {
  render() {
    return (
      <div className="faqBackground">
        <h1 className="faq-header">FAQ</h1>

        <div class="content">
          <div class="acc">
            <div class="acc__card">
              <div class="acc__title">
                Where will the event be held and when will it start?
              </div>
              <div class="acc__panel">
                IsoHack will be held in the ATC CSE Department. You can find the
                detailed schedule, along with the venue and contact details of
                SPOC and organizers <a href="help_info.html">here.</a>
              </div>
            </div>
            <div class="acc__card">
              <div class="acc__title">
                What should I bring on the event with me?
              </div>
              <div class="acc__panel">
                Bring your laptops, mobile phones, wearable computing devices
                and whatever technology inspires you. Make sure that you will
                feel comfortable during intense hacking and if you are going to
                sleep on the venue, please bring a blanket or a sleeping bag.
                Above all, bring your energy and your brain!
              </div>
            </div>
            <div class="acc__card">
              <div class="acc__title">What about food?</div>
              <div class="acc__panel">
                We will make sure that you don’t run out of energy during
                intense hacking! Besides breakfast, lunch and dinner, there will
                always be coffee and snacks provided in the refreshments corner.
                If you have any special dietary needs, let us know in the
                application form or directly email to us.
              </div>
            </div>
            <div class="acc__card">
              <div class="acc__title">
                When is the deadline for registration and submission of problem
                statement?
              </div>
              <div class="acc__panel">
                The final deadline for the application is January 15, 2020. We
                have limited amount of space, so hurry up!
              </div>
            </div>
            <div class="acc__card">
              <div class="acc__title">
                What is the expected output of the event and how are the final
                presentations going to look like?
              </div>
              <div class="acc__panel">
                We expect that you will develop a working prototype which will
                represent your idea. We suggest to focus more on the working of
                your project rather than displaying a presentation. Final
                presentations are limited to a 5 minute pitch and possible Q&A
                from the judges.
              </div>
            </div>
            <div class="acc__card">
              <div class="acc__title">Can I apply to multiple challenges?</div>
              <div class="acc__panel">
                Yes, you can. Your ideas can present the solutions for more than
                one themes and problem statements. Problem statements are there
                to guide you to think about current issues in the society that
                are of our partners’ interests. All the hacks presented on
                Sunday will compete for the Best IsoHack award.
              </div>
            </div>
            <div class="acc__card">
              <div class="acc__title">
                I am not developer or designer, can I still apply?
              </div>
              <div class="acc__panel">
                Yes, but keep in mind that you have to develop a working
                prototype in 36 hours. It is not a problem if you are not a
                programmer, we will have mentors and volunteers to guide you
                throughout the hackathon and hear out your doubts and navigate
                you through the problems you and your team are facing.
              </div>
            </div>
            <div class="acc__card">
              <div class="acc__title">
                Are there any rules that I should follow during the event?
              </div>
              <div class="acc__panel">
                Yes, see them <a href="code_of_conduct.html">here.</a>
              </div>
            </div>
            <div class="acc__card">
              <div class="acc__title">Do you have more questions for us?</div>
              <div class="acc__panel">
                Email us at info.isohack@gmail.com and let us know how we can
                help.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
