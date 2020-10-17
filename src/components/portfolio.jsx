import React from "react";

//import images
import afrilearn from "../img/afrilearn/afrilearn.png";
import afrilearn2 from "../img/afrilearn/afrilearn2.png";
import afrilearn3 from "../img/afrilearn/afrilearn3.png";

import clothtify from "../img/clothtify/clothtify.png";
import clothtify2 from "../img/clothtify/clothtify2.png";
import clothtify3 from "../img/clothtify/clothtify3.png";

import docbook from "../img/docbook/docbook.png";
import docbook1 from "../img/docbook/docbook1.png";
import docbook2 from "../img/docbook/docbook2.png";
import docbook3 from "../img/docbook/docbook3.png";

import rating from "../img/rating/rating_system.png";
import rating2 from "../img/rating/rating_system2.png";
import rating3 from "../img/rating/rating_system3.png";

import voting from "../img/voting/voting_system.png";
import voting2 from "../img/voting/voting_system2.png";
import voting3 from "../img/voting/voting_system3.png";

import mysite from "../img/mysite.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                {/* <p className="subtitle-a">
                  Incididunt nostrud id aute culpa excepteur pariatur consequat
                  elit culpa nulla enim anim incididunt.
                </p> */}
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-md-4">
              <div className="work-box">
              <a href={clothtify} data-lightbox="gallery-vmarine">
                {/* <a href="https://www.google.com" target="_blank"> */}
                  <div className="work-img">
                    <img src={clothtify} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Clothtify</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJS |Node-sass |Styled-component |Redux |Firebase
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={clothtify2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={clothtify3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href={afrilearn} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={afrilearn} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Aflearn</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJS |NodeJS |CSS |MongoDB
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={afrilearn2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={afrilearn3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href={docbook} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={docbook} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">DocBook</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJS |Redux |CSS |Semantic-UI |Django
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={docbook1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={docbook2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={docbook3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="work-box">
                <a href={rating} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={rating} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Rating System</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJS |Redux |NodeJS |CSS |Semantic-UI |MongoDB
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={rating2}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={rating3}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href={voting} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={voting} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Voting System</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJS |NodeJS |CSS |React-Bootstrap |Mysql
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={voting2}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={voting3}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href={mysite} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={mysite} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">My Site</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 |CSS3 |Bootstrap |ReactJS
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
