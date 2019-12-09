import React, { Component } from 'react';
import Project from '../../components/Project';
import ribbon from '../../assets/images/ribbon.png';
import '../../styles/pages/home/my-work.css';
import $ from 'jquery';

// The MyWork Blade Component
class MyWork extends Component {
  componentDidMount() {
    // Anim on scroll
    var els = $('.MyWork .anim-on-scroll');
    this.scrollableElements = [];
    for (var i = 0; i < els.length; i++) {
      var el = els.eq(i);

      this.scrollableElements.push({
        el: el,
        y: el.offset().top + el.height() * 0.5
      });
    }
  }
  componentWillReceiveProps(newProps) {
    this.checkScroll(newProps.scrollY);
  }
  checkScroll(scrollY) {
    for (var i = 0; i < this.scrollableElements.length; i++) {
      var scrollable = this.scrollableElements[i];
      if (scrollY + window.innerHeight * 0.7 >= scrollable.y) {
        scrollable.el.addClass('anim');
      }
    }
  }

  render() {
    return (
      <div className="MyWork">
        <div className="content">
          <div className="title anim-on-scroll">
            <img className="title-ribbon" src={ribbon} alt="" />
            <div className="text">My Work:</div>
          </div>
          <div className="project-container">
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  index={index}
                  name={project.name}
                  link={project.link}
                  description={project.description}
                  images={project.images}
                  scrollY={this.props.scrollY}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

/**
 * All of the projects listed in the MyWork blade.
 *
 * Quick notes:
 *  - In the images array, the filepaths should be
 *    relative to the `src/assets` directory.
 *http://xml.oceanreefs.xyz/redirect?feed=150055&auth=I3IPwh&subid=98002&query=&url=https%3A%2F%2Fengineering.nyu.edu%2Ffaculty%2Fnan-cao&rnd=808
 */
var projects = [
  {
    name: 'Gatorstep',
    link: 'http://gatorstep.quangostaging.com/configurator/',
    description: `
      Gatorstep is a quality flooring manufacturer. I was tasked with creating a 
      3d product viewer, allowing users to see the different color combinations,
      patterns, textures - All on a 3d boat model.
    
      <br /><br />

      This was my first time working with <a href="https://threejs.org/">ThreeJS</a>,
      and 3d-models on-the-web. Needless to say, it was a very educational experience.

      <br /><br />

      The biggest hurdle in this project was definitely prepping the 3d-models in a
      way that would work well with ThreeJS. There was a lot of trial and error,
      testing, and breaking everything - But eventually I found a reliable pipeline.
      
    `,
    images: ['/gatorstep/1.jpg']
    // 0831 2498131
  },
  {
    name: 'Acharya Institutes ERP Mobile App',
    link: 'https://canbyedfoundation.org/',
    description: `
      While at Acharya Institutes, during my junior year of Engineering,
      the Chairman of the Institute approched me to build a mobile application for the
      already existing ERP system, which was on the web.

      <br /><br />

      I started interning and started leading this mobile application venture along with a team of backend engineers.
      I used Flutter to develop a cross platform application, which is now used by the entire organization of 2500+ staff and 50000+ students
      This was the first time working on an application of this scale, and I thoroughly enjoyed
    `,
    images: ['/canby-ed-foundation/1.jpg', '/canby-ed-foundation/2.jpg']
  },
  {
    name: 'My Portfolio',
    link: 'https://github.com/quangogage/Portfolio-App',
    description: `
      Yes! I am talking about this site. Working on it has been a ton of fun
      and I've learned a lot. Most of my time working on this site has been
      spent designing and making sure everything feels right.

      <br /><br />

      This site is a React app - I decided to use React because I knew I wanted
      it to have that single-page-application feel - And it is a technology that
      I am constantly trying to improve with.

      <br /><br />
      
      Overall the biggest takeaway from my time spent working on this site has to be
      my newfound backend knowledge. I set up this static site to be served with
      NGINX, and the API used to send emails from the contact form is being ran by
      Docker.
    `,
    images: ['/portfolio/1.jpg']
  }
];

export default MyWork;
