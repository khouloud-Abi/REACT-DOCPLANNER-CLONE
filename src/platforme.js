import React from "react";

class Platforme extends React.Component {
  render() {
    return (
      <div className="main-platforme">
        <div className="platforme-items-left">
          <h1 className="title">The world's biggest healthcare platform</h1>
          <p className="desc">
            We work from 6 offices all over the world, bringing Docplanner Group
            to life in almost 20 countries.
          </p>
          <img src="https://uploads.codesandbox.io/uploads/user/d0bb8d01-630c-4782-b308-b54cce71db59/G0Vx-21.png" />
        </div>

        <div className="platforme-items-right">
          <div className="items-left">
            <div className="stats-item">
              <img
                className="stats-img"
                src="https://www.docplanner.com/img/flag.png"
              />
              <h3 className="stats-stitle">Leader in 8 countries</h3>
              <p className="stats-para">
                Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and
                Chile
              </p>
            </div>
            <div className="stats-item">
              <img
                className="stats-img"
                src="https://www.docplanner.com/img/patients.png"
              />
              <h3 className="stats-stitle">20 million unique patients</h3>
              <p className="stats-para">visit us every month</p>
            </div>
          </div>
          <div className="items-right">
            <div className="stats-item">
              <img
                className="stats-img"
                src="https://www.docplanner.com/img/visits.png"
              />
              <h3 className="stats-stitle">600 000 appointments</h3>
              <p className="stats-para">booked last month</p>
            </div>
            <div className="stats-item">
              <img
                className="stats-img"
                src="https://www.docplanner.com/img/doctors.png"
              />
              <h3 className="stats-stitle">35 000 active doctors</h3>
              <p className="stats-para">trust in our solutions</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Platforme;
