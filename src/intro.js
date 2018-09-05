import React from "react";

class Introduction extends React.Component {
  render() {
    return (
      <div className="main-introduction">
        <img src="https://www.docplanner.com/img/sygnet@2x.png" width="40px" />
        <h1 className="first-title" style={{ color: "#00b39b" }}>
          Making the healthcare experience more human
        </h1>
        <div className="main-paragraphs">
          <p className="paragraph">
            We want patients to find the perfect doctor and book an appointment
            in the most easy way. The patient journey should be enjoyable, and
            that's why we are always next to them: to help them find the best
            possible care. Anytime, anywhere.
          </p>
          <p className="paragraph">
            We also help doctors to better manage their practice and build their
            online reputation. With our integrated end-to-end solution, doctors
            are able not only to improve their online presence, but also to
            devote their time to what really matters: their patients.
          </p>
        </div>
      </div>
    );
  }
}

export default Introduction;
