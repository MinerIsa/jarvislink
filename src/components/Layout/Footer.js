import React, { Component, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';

import NewsLetterSub from '../Newslettersub';

//Import Icons
import FeatherIcon from 'feather-icons-react';

// import images
import americanEx from '../../assets/images/payments/american-ex.png';
import discover from '../../assets/images/payments/discover.png';
import masterCard from '../../assets/images/payments/master-card.png';
import paypal from '../../assets/images/payments/paypal.png';
import visa from '../../assets/images/payments/visa.png';

//Import Images
import logolight from '../../assets/images/logo-light.svg';
import logodark from '../../assets/images/logo-dark.png';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        { title: 'Home', link: '#home' },
        { title: 'Features', link: '#service' },
        // { title: 'Documentation', link: '#' },
        // { title: 'Pricing', link: '#' },
        // { title: 'Project', link: '#' },
        // { title: 'Careers', link: '#' },
        // { title: 'Blog', link: '#' },
        { title: 'Login', link: 'https://www.jarvislink.com/#/access/login' },
      ],
      grid2: [
        // { title: 'Terms of Services', link: '#' },
        {
          title: 'Privacy Policy',
          link: 'https://drive.google.com/file/d/1aC-MOEqYGgPFm1JVjPE2HwYZSuugYCHM/view?usp=share_link',
        },
        {
          title: 'User Manual',
          link: 'https://drive.google.com/file/d/1hTLkuVcWxO6GYaMITXKhMyH9UPSOeZxp/view?usp=share_link',
        },
        // { title: 'Changelog', link: '#' },
        // { title: 'Components', link: '#' },
      ],
      paymentCardData: [
        {
          img: americanEx,
          title: 'American Express',
        },
        {
          img: discover,
          title: 'Discover',
        },
        {
          img: masterCard,
          title: 'Master Card',
        },
        {
          img: paypal,
          title: 'Paypal',
        },
        {
          img: visa,
          title: 'Visa',
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <Container>
            <Row>
              <Col className="col-12">
                <div
                  className={
                    this.props.isBorderLine
                      ? 'footer-py-60 footer-border'
                      : 'footer-py-60'
                  }
                >
                  <Row>
                    <Col lg={4} className="col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                      <Link to="#" className="logo-footer">
                        <img
                          src={this.props.isLight ? logodark : logolight}
                          height="34"
                          alt=""
                        />
                      </Link>
                      <p
                        className={
                          this.props.isLight ? 'mt-4 text-muted' : 'mt-4'
                        }
                      >
                        Lighting control technology based on Bluetooth mesh
                        standard.
                      </p>
                      <ul
                        className={
                          this.props.isLight
                            ? 'list-unstyled social-icon social mb-0 m t-4'
                            : 'list-unstyled social-icon foot-social-icon mb-0 mt-4'
                        }
                      >
                        <li className="list-inline-item me-1">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.youtube.com/@jarvislighting4590"
                            className="rounded"
                          >
                            <FeatherIcon
                              icon="youtube"
                              className="fea icon-sm fea-social"
                            />
                          </a>
                        </li>
                        {/* <li className="list-inline-item me-1">
                          <Link to="#" className="rounded">
                            <FeatherIcon
                              icon="instagram"
                              className="fea icon-sm fea-social"
                            />
                          </Link>
                        </li> */}
                        <li className="list-inline-item me-1">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/jarvisltg"
                            className="rounded"
                          >
                            <FeatherIcon
                              icon="facebook"
                              className="fea icon-sm fea-social"
                            />
                          </a>
                        </li>
                        <li className="list-inline-item me-1">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/company/jarvis-corp-/"
                            className="rounded"
                          >
                            <FeatherIcon
                              icon="linkedin"
                              className="fea icon-sm fea-social"
                            />
                          </a>
                        </li>
                      </ul>
                    </Col>

                    <Col
                      lg={2}
                      md={4}
                      className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"
                    >
                      <h5
                        className={
                          this.props.isLight
                            ? 'text-dark footer-head'
                            : 'text-light footer-head'
                        }
                      >
                        Company
                      </h5>
                      <ul className="list-unstyled footer-list mt-4">
                        {this.state.grid1.map((grid, key) => (
                          <li key={key}>
                            <a
                              href={grid.link}
                              className={
                                this.props.isLight ? 'text-muted' : 'text-foot'
                              }
                            >
                              <i className="uil uil-angle-right-b me-1"></i>{' '}
                              {grid.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Col>

                    <Col
                      lg={3}
                      md={4}
                      className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"
                    >
                      <h5
                        className={
                          this.props.isLight
                            ? 'text-dark footer-head'
                            : 'text-light footer-head'
                        }
                      >
                        Useful Links
                      </h5>
                      <ul className="list-unstyled footer-list mt-4">
                        {this.state.grid2.map((grid, key) => (
                          <li key={key}>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={grid.link}
                              className={
                                this.props.isLight ? 'text-muted' : 'text-foot'
                              }
                            >
                              <i className="uil uil-angle-right-b me-1"></i>{' '}
                              {grid.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Col>

                    <Col
                      lg={3}
                      md={4}
                      className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"
                    >
                      <h5
                        className={
                          this.props.isLight
                            ? 'text-dark footer-head'
                            : 'text-light footer-head'
                        }
                      >
                        Newsletter
                      </h5>
                      <p className="mt-4">
                        Sign up and receive the latest tips via email.
                      </p>
                      <NewsLetterSub />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>

          <div className="footer-py-30 footer-bar">
            <Container className="text-center">
              <Row className="align-items-center">
                <Col sm={6}>
                  <div className="text-sm-start">
                    <p className="mb-0">
                      © {new Date().getFullYear()} Jarvis Link.
                    </p>
                  </div>
                </Col>

                {/* <Col sm={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <ul className="list-unstyled text-sm-end mb-0 d-flex gap-1 flex-wrap justify-content-sm-end">
                    {this.state.paymentCardData.map((item, key) => (
                      <li className="list-inline-item" key={key}>
                        <Link to="#">
                          <img
                            src={item.img}
                            className="avatar avatar-ex-sm"
                            title={item.title}
                            alt=""
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Col> */}
              </Row>
            </Container>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
