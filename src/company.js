import React from "react";

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: [
        {
          link: "https://www.znanylekarz.pl",
          image: "https://www.docplanner.com/img/sygnet@2x.png",
          name: "Znanylekarz"
        },
        {
          link: "https://www.doctoralia.es/",
          image: "https://www.docplanner.com/img/sygnet@2x.png",
          name: "Doctoralia"
        },
        {
          link: "https://www.miodottore.it",
          image: "https://www.docplanner.com/img/sygnet@2x.png",
          name: "Miodottore"
        },
        {
          link: "https://www.doktortakvimi.com",
          image: "https://www.docplanner.com/img/sygnet@2x.png",
          name: "Doktortakvimi"
        },
        {
          link: "https://www.znamylekar.cz/",
          image: "https://www.docplanner.com/img/sygnet@2x.png",
          name: "Znamylekar"
        }
      ]
    };
  }
  render() {
    return (
      <div className="main-introduction main-paragraphs">
        <h1 class="company-title">
          We are a global company with local culture
        </h1>
        <div className="company-links">
          {this.state.tab.map((e, i) => (
            <a className="links" href={e.link}>
              <img className="img-comp" src={e.image} />
              <h3 className="title-com">{e.name}</h3>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Company;
