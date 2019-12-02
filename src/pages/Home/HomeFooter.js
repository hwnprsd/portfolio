import React, { Component } from 'react';
import '../../styles/pages/home/home-footer.css';

class HomeFooter extends Component {
  render() {
    return (
      <div className="HomeFooter">
        <div className="content">
          <div className="text-container">
            <div>-</div>
            <div>ashwinxprasad@gmail.com</div>
          </div>
          <div className="line" />
          <div className="link-container">
            {/* Github */}
            <a
              className="link"
              href="https://github.com/d3fkon"
              target="_blank"
            >
              <i className="fab fa-github" />
            </a>

            {/* Stack Overflow */}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeFooter;
