import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer main-introduction">
        <p>
          We are leaders in 8 countries:
          <a href="//www.znanylekarz.pl" target="_blank">
            Poland
          </a>,{" "}
          <a href="//www.doktortakvimi.com" target="_blank">
            Turkey
          </a>,
          <a href="//www.doctoralia.es" target="_blank">
            Spain
          </a>,
          <a href="//www.miodottore.it" target="_blank">
            Italy
          </a>,
          <a href="//www.doctoralia.com.mx" target="_blank">
            Mexico
          </a>,
          <a href="http://www.doctoralia.com.br" target="_blank">
            Brazil
          </a>,
          <a href="http://www.doctoraliar.com" target="_blank">
            Argentina
          </a>{" "}
          en{" "}
          <a href="http://www.doctoralia.cl" target="_blank">
            Chile
          </a>
        </p>
        <p>
          This site uses cookies to deliver services in accordance with this
          Privacy Policy. You can specify the conditions for storing or
          accessing cookies on your browser.
        </p>
        www.docplanner.com © 2018
      </div>
    );
  }
}

export default Footer;
