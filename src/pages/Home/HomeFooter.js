import React, { Component } from 'react';
import '../../styles/pages/home/home-footer.css';

class HomeFooter extends Component {
  render() {
    return (
      <div className="HomeFooter">
        <div className="content">
          <div className="text-container">
            <div>-</div>
            <div>mail@ashwinxprasad.xyz</div>
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
            <a
            className="link"
            href="https://about.ashwinxprasad.xyz/view-resume"
            target="_blank"
          >
            <i className="fas fa-id-badge" aria-hidden="false"></i>

          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/ashwin-prasad-a38610197/"
            target="_blank"
          >
            <i className="fab fa-linkedin" aria-hidden="false"></i>

          </a>
            {/* Stack Overflow */}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeFooter;
