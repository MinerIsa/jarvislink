import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Label,
  Input,
  FormGroup,
  Card,
  CardBody,
  FormFeedback,
} from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Components
import SectionTitle from '../../components/Shared/SectionTitle';

// Formik Validation
import * as Yup from 'yup';
import { useFormik } from 'formik';

import emailjs, { send } from '@emailjs/browser';

const ContactUs = () => {
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
        'template_ri8blyk',
        form.current,
        'WJW0NM0MduGhIRYE8',
      )
      .then(
        (result) => {
          setName('');
          setEmail('');
          setPhone('');
          setCompany('');
          setMessage('');
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
  const [message, setMessage] = useState();
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
      <section className="section bg-white pt-5">
        <Container>
          {/* section title */}
          <SectionTitle
            title="Get In Touch!"
            desc="We would love to answer any questions you may have."
          />

          <Row className="align-items-center">
            <Col
              lg="5"
              md={{ size: 6, order: 1 }}
              xs={{ order: 2 }}
              className="mt-4 pt-2"
            >
              <Card
                className="rounded shadow border-0 bg-light"
                data-aos="fade-up"
                data-aos-duration="1000"
style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'}}
              >
                <CardBody>
                  <div className="custom-form bg-light">
                    <div id="message"></div>
                    <Alert
                      color="info"
                      isOpen={succeMsg}
                      toggle={() => {
                        setsucceMsg(false);
                      }}
                    >
                      We got your message and will get back to you soon!
                    </Alert>
                    <form
                      ref={form}
                      onSubmit={sendEmail}
                      name="contact-form"
                      id="contact-form"
                    >
                      <Row>
                        <Col lg="6">
                          <FormGroup className="mb-3">
                            <Label className="form-label">
                              Your Name <span className="text-danger">*</span>
                            </Label>
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
                            <Label className="form-label">
                              Your Email <span className="text-danger">*</span>
                            </Label>
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
                        <Col lg="12">
                          <FormGroup className="mb-3">
                            <Label className="form-label">
                              Your company{' '}
                              <span className="text-danger">*</span>
                            </Label>
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
                        <Col lg="12">
                          <FormGroup className="mb-3">
                            <Label className="form-label">Comments</Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="message-circle"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <textarea
                              className="form-control ps-5"
                              placeholder="Message :"
                              type="textarea"
                              name="message"
                              id="message"
                              value={message}
                              required
                            ></textarea>
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
                              value="Send Message"
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

            <Col
              lg="7"
              md={{ size: 6, order: 2 }}
              xs={{ order: 1 }}
              className="mt-4 pt-2 order-1 order-md-2"
            >
              <div className="title-heading ms-lg-4">
                <h4
                  className="mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Contact Details
                </h4>
                <Card className="border-0 bg-transparent">
                  <CardBody className="p-0">
                    <div
                      className="contact-detail d-flex align-items-center mt-3"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <div className="icon">
                        <i>
                          <FeatherIcon
                            icon="mail"
                            className="fea icon-m-md text-dark me-3"
                          />
                        </i>
                      </div>
                      <div className="content overflow-hidden d-block">
                        <h6 className="fw-bold mb-0">Email</h6>
                        <Link to="#" className="text-primary">
                          support@jarvislink.com
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card className="border-0 bg-transparent">
                  <CardBody className="p-0">
                    <div
                      className="contact-detail d-flex align-items-center mt-3"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <div className="icon">
                        <i>
                          <FeatherIcon
                            icon="phone"
                            className="fea icon-m-md text-dark me-3"
                          />
                        </i>
                      </div>
                      <div className="content overflow-hidden d-block">
                        <h6 className="fw-bold mb-0">Phone</h6>
                        <Link to="#" className="text-primary">
                          +1 (800) 363-1075
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card className="border-0 bg-transparent">
                  <CardBody className="p-0">
                    <div
                      className="contact-detail d-flex align-items-center mt-3"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <div className="icon">
                        <i>
                          <FeatherIcon
                            icon="map-pin"
                            className="fea icon-m-md text-dark me-3"
                          />
                        </i>
                      </div>
                      <div className="content overflow-hidden d-block">
                        <h6 className="fw-bold mb-0">Location</h6>
                        <Link to="#" className="text-primary">
                          1054 National Parkway, Schaumburg, IL 60173
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ContactUs;
