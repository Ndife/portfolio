import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        { id: "PHP_skill", content: "NodeJS", porcentage: "85%", value: "70" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Django",
          content: "Python",
          porcentage: "50%",
          value: "75"
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "GraphQl",
          content: "Wordpress",
          porcentage: "50%",
          value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a Full-Stack Web Application developer with a passion for web technologies. I write robust, clean,re-usable and maintainable code. This also means I strive to follow best practices and use industry-standard tools, including git-flow Continous Integration (Travis-CI), linting (ESLint, Prettier), package management (Yarn and NPM), and modern build tools (Webpack, Babel). Although I've a wide range of experience, the technology I prefer and/or am most familiar with includes React, Redux, Node, JavaScript ES6, Sass/CSS/, HTML."
        },
        {
          id: "second-p-about",
          content:
            "Lorem <h3>cc</h3>ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
        },
        {
          id: "third-p-about",
          content:
            "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {/* {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })} */}
                        <p className="lead">
                          <p> I am a Full-Stack Web Application developer with a passion for web technologies. I write robust, clean,re-usable and maintainable code. This also means I strive to follow best practices and use industry-standard tools, including git-flow Continous Integration (Travis-CI), linting (ESLint, Prettier), package management (Yarn and NPM), and modern build tools (Webpack, Babel). Although I've a wide range of experience, the technology I prefer and/or am most familiar with includes React, Redux, Node, JavaScript ES6, Sass/CSS/, HTML.</p>
                        </p>
                        <h3>Frontend Development</h3>
                        <h3>
                          <span style={{margin:"10px"}} class="badge badge-pill badge-primary">HTML</span>
                          <span style={{margin:"10px"}} class="badge badge-pill badge-primary">CSS</span>
                          <span style={{margin:"10px"}} class="badge badge-pill badge-primary">JavaScript</span>
                          <span style={{margin:"10px"}} class="badge badge-pill badge-primary">React</span>
                          <span style={{margin:"10px"}} class="badge badge-pill badge-primary">Apollo</span>
                          <span style={{margin:"10px"}} class="badge badge-pill badge-primary">Redux</span>
                          <span style={{margin:"10px"}} class="badge badge-pill badge-primary">Styled-Components</span>
                          <span style={{margin:"10px"}} class="badge badge-pill badge-primary">SASS</span>
                        </h3><br/>

                        <h3>Backend Development</h3>
                        <h3>
                          <span style={{margin:"10px"}} class="badge badge-pill badge-primary">NodeJs</span>
                          <span style={{margin:"10px"}} class="badge badge-pill badge-primary">Django</span>
                          <span style={{margin:"10px"}} class="badge badge-pill badge-primary">GraphQL</span>
                          <span style={{margin:"10px"}} class="badge badge-pill badge-primary">MongoDB</span>
                          <span style={{margin:"10px"}} class="badge badge-pill badge-primary">SQL</span>
                          <span style={{margin:"10px"}} class="badge badge-pill badge-primary">MYSQL</span>
                          <span style={{margin:"10px"}} class="badge badge-pill badge-primary">Heroku</span>
                        </h3><br/>

                        <h3>Version Control</h3>
                        <h3>
                          <span style={{margin:"10px"}} class="badge badge-pill badge-primary">GitHub</span>
                          <span style={{margin:"10px"}} class="badge badge-pill badge-primary">GitLab</span>
                        </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
