import React from "react";

export default function IamCompany() {
  const divStyle={
    width: "70%",
    
    margin: "5% auto 5% auto",
    border: "2px solid #04295E",
    padding: "3%",
    boxSizing: "border-box",
    position: "relative",
    flexWrap: "wrap",
  }
  return (
    <div>
      <section style={divStyle}>
        <div>
          <h2>SET AN OFFER</h2>
          <h4>
            Please set an offer by sending an email to <br />
            test.cloud123@domain.net
          </h4>
        </div>
        <div
          style={{
            border: "2px solid #04295E",
            margin: "10px",
            textAlign: "left",
            right: "2%"
          }}
        >
          Please write your email in this format:
          <ul>
            <li>Subject: Offer Header</li>
            <li>Company Name</li>
            <li>Location of the Company</li>
            <li>Which skills you look for</li>
            <li>Number of the volunteers you look for</li>
            <li>The start and end date for the work</li>
            <li>Any additional note</li>
          </ul>
        </div>
      </section>
      <section style={divStyle}>
        <h4>
          By Setting an offer YOU are gaining an opportunity <br />
          to have a skillfull volunteer for your company!{" "}
        </h4>
        <h4>User Experiences</h4>
        <p>
          I am a Paula. Thanks to LinguaSphere, I am ready to work in Belgium!
          <br />
          Let me tell you how: I had worked for 10 years as Pharmacist in
          Argantina before I moved to Belgium. My Dutch level is C1 which is
          pretty enough for any job opportunity in the market yet I didnot have
          the courege to apply any job application due to lack of mondeling
          skills. Also I needed to learn the Pharmaceutical Terms in Dutch which
          is not thought in language courses. With LinguaSphere I have found 2
          Pharmacist that matched my profile. I have made my language-intern
          with one of them and now I am ready for real work!
        </p>
      </section>
    </div>
  );
}
