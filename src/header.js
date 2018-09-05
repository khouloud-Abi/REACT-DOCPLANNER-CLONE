import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/home">
          <img
            width="300"
            src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
          />
        </Link>
        <div className="nav-bar">
          <Link
            exact
            to="https://www.docplanner.com/about-us"
            className="nav-item"
          >
            About Us{" "}
          </Link>

          <a href="https://www.docplanner.com/career" className="nav-item">
            Career
          </a>

          <Link to="#">
            <div className="dropdown">
              <Link to="#" className="nav-item">
                Department
                <div className="dropdown-content">
                  <Link to="https://www.docplanner.com/department?dep=marketing">
                    Marketing & PR
                  </Link>
                  <Link to="https://www.docplanner.com/department?dep=customer">
                    Customer Succes & Sales
                  </Link>
                  <Link to="https://www.docplanner.com/department?dep=it">
                    IT, Product, Design & UX
                  </Link>
                  <Link to="https://www.docplanner.com/department?dep=finance">
                    Finnance & Administration
                  </Link>
                  <Link to="https://www.docplanner.com/department?dep=hr">
                    HR & more
                  </Link>
                </div>
              </Link>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default Main;
