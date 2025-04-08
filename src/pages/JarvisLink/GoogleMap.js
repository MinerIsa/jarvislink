import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class GoogleMap extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-0 mt-60" fluid>
          <Row>
            <Col xs="12" className="p-0">
              <div className="map">
                <iframe
                  title="uniqueTitle"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.30116302775!2d-88.0188727237281!3d41.90788417123845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fad56aed9e389%3A0xb506dba15743c787!2s951%20N%20Main%20St%20Unit%20A%2C%20Lombard%2C%20IL%2060148!5e0!3m2!1sen!2sus!4v1744121493050!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default GoogleMap;
