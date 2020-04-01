import React from "react";
import RellaxWrapper from "react-rellax-wrapper";

const Header = () => {
  return (
    <React.Fragment>
      <section className="section section-top">
        <div className="name">
          <div>
            <RellaxWrapper speed={1} data-rellax-speed="1">
              <h2>
                <span className="hello">Hello</span>
                <br />
                je suis
                <br />
                Thomas Rovayaz
              </h2>
              <div className="divider" />
            </RellaxWrapper>
            <RellaxWrapper speed={-1} data-rellax-speed="-1">
              <div className="socials">
                <a href="">
                  <i className="fab fa-linkedin fa-2x" />
                </a>
                <a href="">
                  <i className="fab fa-github fa-2x" />
                </a>
              </div>
            </RellaxWrapper>
          </div>
        </div>
        <div className="face-space" />
        <div className="job">
          <RellaxWrapper
            speed={-1}
            data-rellax-mobile-speed="-1"
            data-rellax-tablet-speed="1"
            data-rellax-xs-speed="0"
            data-rellax-speed="-1"
          >
            <h1>
              Ing FullStack
              <br />
              et Mobile.
            </h1>
          </RellaxWrapper>
          <RellaxWrapper
            speed={-1}
            data-rellax-mobile-speed="-1"
            data-rellax-tablet-speed="1"
            data-rellax-xs-speed="0"
            data-rellax-speed="-2"
          >
            <h3>
              Créer des solutions
              <br />
              simplement et utilement
              <br />
              est mon leitmotiv
            </h3>
            <a href="#" className="btn btn-primary">
              Mon histoire
            </a>
          </RellaxWrapper>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Header;
