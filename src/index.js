import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Main from "./header.js";
import Introduction from "./intro.js";
import Services from "./services.js";
import Company from "./company.js";
import Platforme from "./platforme.js";
import Location from "./location.js";
import Footer from "./footer.js";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Main />
        </BrowserRouter>

        <Introduction />

        <Services />

        <BrowserRouter>
          <Company />
        </BrowserRouter>
        <Platforme />
        <Location />
        <Footer />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
