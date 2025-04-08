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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2823.6490660350523!2d-92.95926182371186!3d44.950801571070265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f7d7e839891125%3A0xc2f4d3b116b47d66!2s7300%20Hudson%20Blvd%20N%2C%20Oakdale%2C%20MN%2055128!5e0!3m2!1sen!2sus!4v1744119597243!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default GoogleMap;
