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
            <div className="text">My Work</div>
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
    name: 'Acharya Institutes ERP Mobile App',
    link: 'https://github.com/d3fkon/acharya-erp-info',
    description: `
     Noticed by my work on the <b>Acharya Habba 2019</b> mobile app, the chair of Acharya Institutes, invited me to join the ERP Team
     of the organization. The ERP team already had a web application in production and was looking forward to port the same on to the mobile plataform.
     <br/><br/>
     I starting interning part-time where, I led the mobile team of two more interns and started porting the 
     web application to mobile.
     <br/><br/>
     Along with my team, we built a <b>RESTful API</b> service using the Yii PHP framework, and used <b>JWT</b> Token based authentication. I independently developed
     both the android and iOS applications in flutter, consuming this API service.
     <br/><br/>
     Proficient in design patterns like Business Logic Components (BLoC) and Provider, I used them successfully to build a scalable mobile application.
      <br/><br/>
      Since it's deployment in fall 2019, the application has been rolled out to 100% of the staff members is on track to being released
      to over <b>50000 students</b> across all institutes under acharya umbrella. 
    `,
    images: ['/canby-ed-foundation/1.jpg', '/canby-ed-foundation/2.jpg']
  },
  
  {
    name: 'Old Dominion University',
    link: '',
    description: `
      I <b>interned as a research assistant</b> at Old Dominion University, Virginia during the Summer of 2019, where I worked on the project titled 
      <b>Agression Detection and Intervention in Alzheimer's and Dementia patients</b>.
      <br/><br/>
      Aggression is one of the most significant symptoms of patients suffering from degenrative diseases such as Alzheimer's and Dimentia.
      The research involved using data from sensors on smart devices such as Fitbit Versa and Google Pixel, to detect aggression beforehand,
      preventing harmful causations from this aggression.
      <br/><br/>
      Along with my team, I developed a <b>Caregiver Dashboard</b> where, we used motor, vital and the voice data from various sensors/devices
      to classify whether the patient was under going a aggressive activity or not. We used <b>RNN with NLP</b> to filter out and classify the voice data 
      coming from the microphone along with a <b>GMM Classifier</b> for classifying the Motor data coming from a 3-axis accelerometer on the Fitbit Versa (Expected 
      to be worn by the patient) and combined it with the Vital data again coming from the Versa to build a final classification layer. All the data had to be cleaned and processed
      in real-time due to which we implemented web-sockets for the communication between these devices and the server. 
      <br/><br/>
      Our solution to this problem was hailed a success and I also was awarded with the <b>"Outstanding Performer"</b> award among the interns.
    `,
    images: ['/portfolio/1.jpg']
  },
  {
    name: 'Habba 2019',
    link: 'https://github.com/d3fkon/habba-2019-info',
    description: `
    <b>Acharya Habba</b>, is a national level annual techno-cultural festival held at Acharya Institute, Bangalore.
     This festival typically spans for the better part of March and attracts well over 10000 participants from all 
     around the state and beyond.
      <br/> <br/>
    I had the opportunity to work as an iOS developer in the 2018's iteration of this festival and used <b>react-native</b> 
    to  develop a performant iOS application. 
    
      <br/> <br/>
    Impressed by this, the Director of my institute, Vishesh Chandrashekar, appointed me as an intern during my
     winter break to lead the team of 8 outstanding developers to create an android, iOS and a web application.
    
      <br/> <br/>
    Along with my skillful team, I lead the way to develop an exhaustive API service using express js and MySQL
     (deployed on the <b>Amazon AWS EC2 and RDS</b> instances, coupled with NGINX) and also individually developed the android and iOS application using <b>Flutter</b>, where I used the Provider dataflow pattern along with Rx Streams for state management. 
    
      <br/> <br/>
    As a team, we adpoted Agile practices, and employed 1 week sprints due to the tight timeline.
     This was a great opportunity for me to work as a team and work against deadlines. The apps were hailed a huge success,
      and all the developers took away a lot of experiece from this.
      
    `,
    images: ['/gatorstep/1.jpg']
    // 0831 2498131
  }
];

export default MyWork;
