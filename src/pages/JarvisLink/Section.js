import React, { Component, useState, useRef } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormGroup,
  Input,
  FormFeedback,
  Label,
  Card,
  CardBody,
  Alert,
  Link,
} from 'reactstrap';
import './styles.scss';
//Import Image
import img from '../../assets/images/onepage/bg.png';
import classic from '../../assets/images/saas/classic02.png';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import FeatherIcon from 'feather-icons-react';

import AppStore from '../../assets/images/app-store.png';
import Silvair from '../../assets/images/Silvair.png';

import emailjs, { send } from '@emailjs/browser';

import logodark from '../../assets/images/logo-dark.png';

const Section = () => {
  const [succeMsg, setsucceMsg] = useState(false);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Please Enter Name'),
      email: Yup.string().required('Email is required'),
    }),
    onSubmit: (values) => {
      setsucceMsg(true);
      // console.log(values)
    },
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8dmdsi7',
        'template_th7bztm',
        form.current,
        'WJW0NM0MduGhIRYE8',
      )
      .then(
        (result) => {
          setName('');
          setEmail('');
          setPhone('');
          setCompany('');
          setTime('');
          setsucceMsg(true);
        },
        (error) => {
          console.log(error.text);
          alert('FAILED...', error);
        },
      );
  };

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [company, setCompany] = useState();
  const [time, setTime] = useState();
  const [show, setShow] = useState(false);

  //format phone number
  const formatPhone = (e) => {
    const value = e.target.value;
    const newValue = value.replace(/\D/g, '');
    const newValue2 = newValue.replace(/^(\d{3})(\d)/, '($1) $2');
    const newValue3 = newValue2.slice(0, 13);
    const newValue4 = newValue3.replace(/(\d)(\d{4})$/, '$1-$2');
    setPhone(newValue4);
  };

  return (
    <React.Fragment>
      <section
        className="section pb-0 bg-home bg-light d-flex align-items-center"
        style={{
          background: `url(${img}) top left no-repeat`,
          height: 'auto',
          // paddingTop: '8rem',
        }}
        id="home"
      >
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col className="text-center" id="headlin">
              <div id="MobileLogo" className="logo justify-content-center">
                <img src={logodark} height="24rem" alt="" />
              </div>
              <div className="title-heading">
                <h1
                  className="heading mb-3"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <span className="text-primary">Advanced</span> controls.
                  <br />
                  <span className="text-primary">
                    Simple
                  </span> implementation.{' '}
                </h1>
                <p
                  className="para-desc mx-auto text-muted ps-1 pe-1"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  Skyrocket your lighting business by offering advanced controls
                  capabilities with JarvisLink.
                </p>
                <Row>
                  <Col id="app-store-col">
                    <a href="https://apps.apple.com/us/app/jarvis-link/id6444695558">
                      <img
                        data-aos="fade-up"
                        data-aos-duration="1400"
                        style={{ height: '5em' }}
                        src={AppStore}
                      />
                    </a>
                  </Col>
                  <Col id="silvair-col">
                    <a href="https://silvair.com/">
                      <img
                        data-aos="fade-up"
                        data-aos-duration="1400"
                        style={{ height: '5em' }}
                        src={Silvair}
                      />
                    </a>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col
              lg="5"
              md={{ size: 6, order: 1 }}
              xs={{ order: 2 }}
              className=""
            >
              <Card
                className="rounded shadow border-0"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <CardBody style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'}}>
                  <div className="pb-3">
                    <h4 className="card-title fw-bold">
                      Get a Free Jarvis Link Training
                    </h4>
                    <h6 className="text-muted">
                      Ace your controls projects with Jarvis Link.{' '}
                    </h6>
                  </div>
                  <div className="custom-form bg-white">
                    <div id="message"></div>
                    <Alert
                      color="info"
                      isOpen={succeMsg}
                      toggle={() => {
                        setsucceMsg(false);
                      }}
                    >
                      We received your inquiry and will get back to you soon!
                    </Alert>
                    <form
                      onSubmit={sendEmail}
                      name="contact-form"
                      id="contact-form"
                      ref={form}
                    >
                      <Row>
                        <Col lg="6">
                          <FormGroup className="mb-3">
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="user"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              className="form-control ps-5"
                              placeholder="First Name :"
                              type="name"
                              name="name"
                              id="name"
                              value={name}
                              required
                            />
                            {validation.touched.name &&
                            validation.errors.name ? (
                              <FormFeedback type="invalid">
                                {validation.errors.name}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="mb-3">
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              className="form-control ps-5"
                              placeholder="Your email :"
                              type="email"
                              name="email"
                              id="email"
                              value={email}
                              required
                            />
                            {validation.touched.email &&
                            validation.errors.email ? (
                              <FormFeedback type="invalid">
                                {validation.errors.email}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup className="mb-3">
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="briefcase"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              className="form-control ps-5"
                              placeholder="Company :"
                              type="text"
                              name="company"
                              id="company"
                              value={company}
                              required
                            />
                            {validation.touched.name &&
                            validation.errors.name ? (
                              <FormFeedback type="invalid">
                                {validation.errors.name}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup className="mb-3">
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="phone"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              className="form-control ps-5"
                              placeholder="Phone :"
                              type="tel"
                              onChange={formatPhone}
                              name="phone"
                              id="phone"
                              value={phone}
                              required
                            />
                            {validation.touched.name &&
                            validation.errors.name ? (
                              <FormFeedback type="invalid">
                                {validation.errors.name}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="12" className="text-center">
                          <div className="d-grid">
                            <input
                              type="submit"
                              id="submit"
                              name="send"
                              className="submitBnt btn btn-primary"
                              value="Sign Up For Jarvis Link Training"
                            />
                            <div id="simple-msg"></div>
                          </div>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <div
              className="home-dashboard onepage-hero"
              data-aos="fade-up"
              data-aos-duration="2200"
            >
              <img src={classic} alt="" className="img-fluid rounded" />
            </div>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Section;
