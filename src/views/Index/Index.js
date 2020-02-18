import React, { Component } from "react";

export default class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <h1>Hi.</h1>
            <p>
              You'll have to wait for some time, <br></br>this website is
              under construction.
            </p>
            <br></br>
            <p>
              If you'd like to know who I am and what I do,<br></br>
              <a
                className="App-link"
                href="https://github.com/aakashhemadri"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aakash Hemadri
              </a>
            </p>
          </header>
        </div>
      </React.Fragment>
    );
  }
}
