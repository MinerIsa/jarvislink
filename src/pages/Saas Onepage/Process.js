import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Import Images
import mobile from '../../assets/images/software/mobile01.png';

class Process extends Component {
  state = {
    processes: [
      { title: 'Save time' },
      { title: 'Save energy' },
      { title: 'Have full control' },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60 mb-5">
          <Row className="align-items-center">
            <Col lg="5" md="6">
              <img
                src={mobile}
                data-aos="fade-up"
                data-aos-duration="1800"
                className="img-fluid"
                alt=""
              />
            </Col>

            <Col lg="7" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-4">
              <div className="section-title ms-lg-5">
                <h4
                  className="title mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Commission with ease
                </h4>
                <p
                  className="text-muted"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  Fine-tune your lighting projects using JarvisLinks' apps on
                  your portable devices.
                </p>
                <ul
                  className="list-unstyled feature-list mb-0 text-muted"
                  data-aos="fade-up"
                  data-aos-duration="1800"
                >
                  {this.state.processes.map((process, key) => (
                    <li key={key} className="mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      {process.title}
                    </li>
                  ))}
                </ul>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="2200"
                >
                  <a
                    href="https://www.jarvislink.com/#/access/login"
                    className="text-primary p-1 px-2 shadow rounded"
                  >
                    Get Started <i className="uil uil-angle-right-b"></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Process;
