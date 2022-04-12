import HTML from "./images/html5.svg";
import CSS from "./images/css3.svg";
import muilogo from "./images/muilogo.png";
import reactlogo from "./images/reactt.svg";
import heroku from "./images/heroku.svg";
import aws from "./images/AWS.png";
import express from "./images/express.svg";
import bootstrap from "./images/bootstrap.svg";
import javascript from "./images/javascript.svg";
import mongo from "./images/mongodb.svg";
import netlify from "./images/netlify.png";
import node from "./images/nodejs.svg";
import postman from "./images/postman.png";
import vscode from "./images/vscode.svg";

export function About() {
  const skillimg = [
    { logo: reactlogo, name: "React" },
    { logo: javascript, name: "Javascript" },
    { logo: CSS, name: "CSS" },
    { logo: HTML, name: "HTML" },
    { logo: node, name: "Node" },
    { logo: heroku, name: "Heroku" },
    { logo: mongo, name: "MongoDB" },
    { logo: netlify, name: "Netlify" },
    { logo: express, name: "Express" },
    { logo: postman, name: "Postman" },
    { logo: vscode, name: "VScode" },
    { logo: muilogo, name: "MUI" },
    { logo: bootstrap, name: "Bootstrap" },
    { logo: aws, name: "AWS" },
  ];
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="about-div1">
        <h3 style={{ margin: "10px 0px 15px 0px" }}>A bit About Me</h3>
        <p className="aboutme">
          I'm Harisudhan , a Full Stack Developer(MERN) and has graduation in
          BSC., Computer Science. Passionate Fersher , Love to create
          functionable and Responsive website and Eager to learn New
          Techonologies.
        </p>

        <h3>Techonologies and Tools</h3>
        <div className="skill">
          {skillimg.map((skill) => (
            <div className="skillimg" key={skill.name}>
              <img
                src={skill.logo}
                style={{ width: "3.5rem", height: "3.5rem" }}
              />
              <p style={{ fontSize: "1rem" }}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
