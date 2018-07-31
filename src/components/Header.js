import React, { Component } from 'react';
import '../css/style.css'

export default class Header extends Component {
  render() {
    return (
     <div>
        <header className="header clearfix">
          <nav>
            <ul className="nav nav-pills float-right">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Register</a></li>
            </ul>
          </nav>
          <h3 className="text-muted">ReactJS Boilerplate</h3>
        </header>
      </div>
      );
  }
}