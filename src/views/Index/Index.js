import React, { Component } from "react";
import Avatar from "../../assets/img/avatar.jpeg";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light"
    };
  }
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <div className="Index">
          <header className="Index-header">
            <img
              src={Avatar}
              className="Index-image"
              alt="Avatar - Aakash Hemadri"
            />
            <div className="Index-title">$ ./Aakash\ Hemadri</div>
          </header>
          <div className="Index-content">
            <a
              className="Index-link"
              href="https://blog.aakashhemadri.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              * blog *
            </a>
            <a
              className="Index-link"
              href="https://portfolio.aakashhemadri.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              % portfolio %
            </a>
            <a
              className="Index-link"
              href="https://tutorials.aakashhemadri.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ? tutorials ?
            </a>
            <a
              className="Index-link"
              href="https://github.com/aakashhemadri"
              target="_blank"
              rel="noopener noreferrer"
            >
              &#123; github &#125;
            </a>
            <a
              className="Index-link"
              href="https://www.linkedin.com/in/aakashhemadri/"
              target="_blank"
              rel="noopener noreferrer"
            >
              -_- linkedin -_-
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
