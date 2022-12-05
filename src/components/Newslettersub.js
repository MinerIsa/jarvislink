import React, { Component, useState, useRef } from 'react';
import { Container, Row, Col, Form, Input, Label, Alert } from 'reactstrap';

import emailjs, { send } from '@emailjs/browser';

import FeatherIcon from 'feather-icons-react';

const NewsLetterSub = () => {
  const form = useRef();

  const [succeMsg, setsucceMsg] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8dmdsi7',
        'template_xl17vsh',
        form.current,
        'WJW0NM0MduGhIRYE8',
      )
      .then(
        (result) => {
          setEmail('');
          setsucceMsg(true);
        },
        (error) => {
          console.log(error.text);
          alert('FAILED...', error);
        },
      );
  };

  const [email, setEmail] = useState();

  return (
    <React.Fragment>
      <Alert
        color="info"
        isOpen={succeMsg}
        toggle={() => {
          setsucceMsg(false);
        }}
      >
        Congrats! You're now signed up to receive our latest updates!
      </Alert>
      <form onSubmit={sendEmail} ref={form}>
        <Row>
          <Col lg={12}>
            <div className={'foot-subscribe mb-3 foot-white'}>
              <Label className={'form-label text-muted'}>
                Write your email <span className="text-danger">*</span>
              </Label>
              <div className="form-icon position-relative">
                <FeatherIcon icon="mail" className="fea icon-sm icons" />
                <Input
                  type="email"
                  name="email"
                  value={email}
                  id="emailsubscribe"
                  className={'form-control ps-5 rounded bg-light border'}
                  placeholder="Your email : "
                  required
                />
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <div className="d-grid">
              <input
                type="submit"
                id="submitsubscribe"
                name="send"
                className={'btn btn-primary'}
                value="Subscribe"
              />
            </div>
          </Col>
        </Row>
      </form>
    </React.Fragment>
  );
};

export default NewsLetterSub;
