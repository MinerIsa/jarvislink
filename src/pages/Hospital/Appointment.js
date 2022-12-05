import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  Row,
  FormFeedback,
} from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

import medical from '../../assets/images/medical/cta.jpg';

import SectionTitle from '../../components/Shared/SectionTitle';

// Formik Validation
import * as Yup from 'yup';
import { useFormik } from 'formik';

const Appointment = () => {
  const [modal, setModal] = useState(false);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required'),
      password: Yup.string().required('Please Enter Password'),
    }),
    onSubmit: (values) => {
      // console.log(values)
    },
  });
  return (
    <React.Fragment>
      <section className="section white">
        <Container>
          <SectionTitle title="Documentation" />
          <Row>
            <Col lg={3} md={6} xs={12}>
              <Card className=" features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <i className="uil uil-newspaper"></i>
                </span>
                <CardBody className="p-0 content">
                  <h5>System Overview</h5>
                  <p className="para text-muted mb-0">
                    Detailed overview of Jarvis Link capabilities.
                  </p>

                  <Link
                    to="#"
                    className="btn btn-pills btn-soft-success mt-4"
                    onClick={() => setModal(true)}
                  >
                    Download PDF
                  </Link>
                </CardBody>
              </Card>
            </Col>

            <Col lg={3} md={6} xs={12}>
              <Card className=" features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <i className="uil uil-sun"></i>
                </span>
                <CardBody className="p-0 content">
                  <h5>Wall Switches</h5>
                  <p className="para text-muted mb-0">
                    Overview of Jarvis Link compatible wall switches.
                  </p>

                  <Link
                    to="#"
                    className="btn btn-pills btn-soft-success mt-4"
                    onClick={() => setModal(true)}
                  >
                    Download PDF
                  </Link>
                </CardBody>
              </Card>
            </Col>

            <Col lg={3} md={6} xs={12} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <Card className="features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <i className="uil uil-link"></i>
                </span>
                <CardBody className="p-0 content">
                  <h5>Optimal Gateway</h5>
                  <p className="para text-muted mb-0">
                    Learn about optimal gateways.
                  </p>

                  <Link to="#" className="btn btn-pills btn-soft-success mt-4">
                    Download PDF
                  </Link>
                </CardBody>
              </Card>
            </Col>

            <Col lg={3} md={6} xs={12} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <Card className="features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <i className="uil uil-rss"></i>
                </span>
                <CardBody className="p-0 content">
                  <h5>Components & Sensors</h5>
                  <p className="para text-muted mb-0">
                    Overview of Jarvis Link compatible componentry.
                  </p>

                  <Link to="#" className="btn btn-pills btn-soft-success mt-4">
                    Download PDF
                  </Link>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <Modal
        isOpen={modal}
        tabIndex="-1"
        size="lg"
        centered
        //   contentClassName="rounded shadow-lg border-0 overflow-hidden"
        toggle={() => {
          setModal();
        }}
      >
        <ModalBody className="p-0">
          <Container fluid className="px-0">
            <Row className="align-items-center g-0">
              <Col lg={6} md={5} className="d-none d-md-block">
                <img src={medical} className="img-fluid" alt="" />
              </Col>

              <Col lg={6} md={7}>
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
                    return false;
                  }}
                  className="login-form p-4"
                >
                  <Row>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label className="form-label">
                          Your Email <span className="text-danger">*</span>
                        </Label>
                        <div className="form-icon position-relative">
                          <i>
                            <FeatherIcon
                              icon="user"
                              className="fea icon-sm icons"
                            />
                          </i>
                          <Input
                            type="email"
                            className="form-control ps-5"
                            placeholder="Email"
                            name="email"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.email || ''}
                            invalid={
                              validation.touched.email &&
                              validation.errors.email
                                ? true
                                : false
                            }
                          />
                          {validation.touched.email &&
                          validation.errors.email ? (
                            <FormFeedback type="invalid">
                              {validation.errors.email}
                            </FormFeedback>
                          ) : null}
                        </div>
                      </div>
                    </Col>

                    <Col lg={12}>
                      <div className="mb-3">
                        <Label className="form-label">
                          Password <span className="text-danger">*</span>
                        </Label>
                        <div className="form-icon position-relative">
                          <i>
                            <FeatherIcon
                              icon="key"
                              className="fea icon-sm icons"
                            />
                          </i>
                          <Input
                            type="password"
                            className="form-control ps-5"
                            placeholder="Password"
                            name="password"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.password || ''}
                            invalid={
                              validation.touched.password &&
                              validation.errors.password
                                ? true
                                : false
                            }
                          />
                          {validation.touched.password &&
                          validation.errors.password ? (
                            <FormFeedback type="invalid">
                              {validation.errors.password}
                            </FormFeedback>
                          ) : null}
                        </div>
                      </div>
                    </Col>

                    <Col lg={12}>
                      <div className="d-flex justify-content-between">
                        <div className="mb-3">
                          <div className="form-check">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck1"
                            />
                            <Label
                              className="form-check-label"
                              for="customCheck1"
                            >
                              Remember me
                            </Label>
                          </div>
                        </div>
                        <p className="forgot-pass mb-0">
                          <Link
                            to="auth-re-password"
                            className="text-dark fw-bold"
                          >
                            Forgot password ?
                          </Link>
                        </p>
                      </div>
                    </Col>

                    <Col lg={12} className="mb-0">
                      <div className="d-grid">
                        <button className="btn btn-primary btn-block">
                          Sign in
                        </button>
                      </div>
                    </Col>

                    <Col lg={12} className="text-center">
                      <p className="mb-0 mt-3">
                        <small className="text-dark me-2">
                          Don't have an account ?
                        </small>{' '}
                        <Link to="auth-signup" className="text-dark fw-bold">
                          Sign Up
                        </Link>
                      </p>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};
export default Appointment;
