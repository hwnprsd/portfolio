import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/components/link-menu.css';

class LinkMenu extends Component {
  componentDidMount() {
    this.hoverLinks();
  }
  render() {
    return (
      <div className="LinkMenu">
        {/* Links to my different profiles */}
        <div className="link-container">
          {/* Github */}
          <a
            className="link"
            href="https://github.com/d3fkon"
            target="_blank"
          >
            <i className="fab fa-github" />
            <div className="name">Github</div>
          </a>
          <a
            className="link"
            href="https://about.ashwinxprasad.xyz/view-resume"
            target="_blank"
          >
            <i className="fas fa-id-badge" aria-hidden="false"></i>

            <div className="name">Resume</div>
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/ashwin-prasad-a38610197/"
            target="_blank"
          >
            <i className="fab fa-linkedin" aria-hidden="false"></i>

            <div className="name">LinkedIn</div>
          </a>
        </div>
      </div>
    );
  }

  // Hovering over the links
  hoverLinks() {
    var links = $('.LinkMenu .link');

    setTimeout(function () {
      // Remember each links original width)
      for (var i = 0; i < links.length; i++) {
        var link = links.eq(i);
        link.attr('data-namewidth', link.children('.name').outerWidth());
        link.children('.name').css('width', '0px');
      }
      $('.LinkMenu .link').on('mouseenter', function (e) {
        $(this)
          .children('.name')
          .css('width', $(this).attr('data-namewidth'));
      });
      $('.LinkMenu .link').on('mouseleave', function (e) {
        $(this)
          .children('.name')
          .css('width', 0);
      });
    }, 1000);
  }
}

export default LinkMenu;
