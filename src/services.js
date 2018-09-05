import React from "react";
import ReactDOM from "react-dom";

class Services extends React.Component {
  render() {
    return (
      <div className="main-introduction main-paragraphs">
        <div className="patients-services paragraph">
          <p>For patients</p>
          <h2>
            Find a doctor, book a visit and solve any health-related doubt
          </h2>
          <select>
            <option selected disabled>
              CHOOSE COUNTRY
            </option>
            <option>ARGENTINA</option>
            <option>AUSTRALIA</option>
            <option>BRAZIL</option>
            <option>CHILE</option>
            <option>FRANCE</option>
            <option>ITALY</option>
            <option>MEXICO</option>
            <option>SPAIN</option>
            <option>TURKEY</option>
            <option>UK</option>
          </select>
          <img
            className="services-img"
            src="https://www.docplanner.com/img/screen-marketplace@2x.png"
            width="400px"
          />
        </div>

        <div
          className="patients-services paragraph"
          style={{ background: "#3d83df" }}
        >
          <p>For doctors</p>
          <h2>Save time managing visits and cut no-shows by half</h2>
          <img
            className="services-img"
            src="https://www.docplanner.com/img/screen-saas@2x.png"
            width="400px"
          />
        </div>
      </div>
    );
  }
}

export default Services;
