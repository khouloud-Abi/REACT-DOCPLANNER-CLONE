import React from "react";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: [
        {
          image: "https://www.docplanner.com/images/warsaw.png",
          name: "Warsaw",
          link: "https://www.docplanner.com/career?&loc=poland#jobs-offers"
        },
        {
          image: "https://www.docplanner.com/images/barcelona.png",
          name: "Barcelona",
          link: "https://www.docplanner.com/career?&loc=spain#jobs-offers"
        },
        {
          image: "https://www.docplanner.com/images/istanbul.png",
          name: "Istanbul",
          link: "https://www.docplanner.com/career?&loc=rome#jobs-offers"
        },
        {
          image: "https://www.docplanner.com/images/rome.png",
          name: "Rome",
          link: "https://www.docplanner.com/career?&loc=italy#jobs-offers"
        },
        {
          image: "https://www.docplanner.com/images/mexico-city.png",
          name: "Mexico-city",
          link: "https://www.docplanner.com/career?&loc=mexico#jobs-offers"
        },
        {
          image: "https://www.docplanner.com/images/curitiba.png",
          name: "Curitiba",
          link: "https://www.docplanner.com/career?&loc=brazil#jobs-offers"
        }
      ]
    };
  }

  render() {
    return (
      <div className="locs">
        <div className="locs-intro main-introduction">
          <h1 className="locs-title">
            Improve the lives of millions. Change yours forever
          </h1>
          <p className="locs-desc">
            More than 500 team mates share our same vision, goals and passion.
            With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and
            Curitiba, our search for great talent never stops.
          </p>
        </div>
        <div className="locs-main">
          {this.state.tab.map((e, i) => (
            <div className="locs-container">
              <a className="locs-links" href={e.link}>
                {" "}
                <div>
                  <img
                    className="locs-img"
                    src={e.image}
                    alt="image not found"
                  />
                </div>
                <div className="locs-info">
                  <h3 className="locs-stitle">{e.name}</h3>
                  <span className="see-open">SEE OPENINGS</span>
                </div>{" "}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Location;
