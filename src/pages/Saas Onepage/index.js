import React, { Component } from 'react';
import { Container } from 'reactstrap';

//Import AOS animation
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';

//Import Components
import Section from './Section';
// import Section from '../Business/section';
import Features from './Features';
import Process from './Process';

import Shape from './Shape';
import Partners from '../../components/Shared/Partners';
import ContactUs from './ContactUs';
import GoogleMap from './GoogleMap';
import Popup from '../../components/Layout/popup';
import Appointment from './Appointment';

class SaasOnepage extends Component {
  constructor(props, context) {
    super(props, context);
    //Initilize Aos Animation
    AOS.init();
  }

  componentDidMount() {
    //Refresh Aos Animation whenever components will render
    AOS.refresh();

    document.body.classList = '';
    window.addEventListener('scroll', this.scrollNavigation, true);

    //set AOS atttributes to section title and desc
    var elementsTitle = document.getElementsByName('sectiontitle');
    var elementsDesc = document.getElementsByName('sectiondesc');

    for (var i = 0; i < elementsTitle.length; i++) {
      elementsTitle[i].setAttribute('data-aos', 'fade-up');
      elementsTitle[i].setAttribute('data-aos-duration', '1200');
      elementsDesc[i].setAttribute('data-aos', 'fade-up');
      elementsDesc[i].setAttribute('data-aos-duration', '1000');
    }

    //set AOS atttributes to slider <Media> tags
    var elements = document.getElementsByName('clientsreview');
    for (var j = 0; j < elements.length; j++) {
      elements[j].setAttribute('data-aos', 'fade-up');
      elements[j].setAttribute('data-aos-duration', '1800');
    }

    //set AOS atttributes to Features
    var features = document.getElementsByName('featurebox');
    for (var f = 0; f < features.length; f++) {
      features[f].setAttribute('data-aos', 'fade-up');
      features[f].setAttribute('data-aos-duration', '1800');
    }

    //set AOS atttributes to partners
    for (var k = 1; k <= 6; k++) {
      document
        .getElementById('partner' + k)
        .setAttribute('data-aos', 'fade-up');
      document
        .getElementById('partner' + k)
        .setAttribute('data-aos-duration', '1800');
    }

    //set AOS atttributes to pricing
    var pricing = document.getElementsByName('pricing');
    for (var a = 0; a < pricing.length; a++) {
      pricing[a].setAttribute('data-aos', 'fade-up');
      pricing[a].setAttribute('data-aos-duration', '1400');
    }

    //set AOS atttributes to team
    var team = document.getElementsByName('team');
    for (var b = 0; b < team.length; b++) {
      team[b].setAttribute('data-aos', 'fade-up');
      team[b].setAttribute('data-aos-duration', '1200');
    }

    //set AOS atttributes to footer
    var footer = document.getElementsByName('footercolumn');
    for (var fcol = 0; fcol < footer.length; fcol++) {
      footer[fcol].setAttribute('data-aos', 'fade-up');
      footer[fcol].setAttribute('data-aos-duration', '1400');
    }
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    const navBar = document.getElementById('topnav');
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (navBar != null) {
      if (top > 80) {
        navBar.classList.add('nav-sticky');
      } else {
        navBar.classList.remove('nav-sticky');
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        {/* section */}
        <Section />

        <section className="section pb-150" id="service">
          {/* features */}
          <Features />

          {/* process */}
          <Process />
        </section>
        <Shape />
        <section id="documentation">
          <Appointment />
        </section>

        {/* block container */}
        {/* <BlockContainer /> */}

        {/* modal Video */}
        {/* <ModalVideoSection /> */}

        {/* shape */}

        <section className="section pt-0 pb-0 mb-0" id="testimonial">
          {/* testimonials */}
          {/* <Testimonials /> */}

          {/* partners */}
          <Partners />
        </section>

        {/* pricing */}
        {/* <Price /> */}
        {/* <section className="section pb-0" id="team"> */}
        {/* team members */}
        {/* <Team /> */}
        {/* </section> */}

        <section className="section pb-0 pt-3" id="contact">
          {/* contact us */}
          <ContactUs />

          {/* google map */}
          <GoogleMap />
        </section>

        {/* Popup */}
        <Popup />
      </React.Fragment>
    );
  }
}

export default SaasOnepage;
