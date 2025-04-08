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
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.4467550351583!2d-88.05518488416449!3d42.055042479208566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880faf78f715cf8d%3A0xcfc4f5a7c60b6fa4!2s1054%20National%20Pkwy%2C%20Schaumburg%2C%20IL%2060173!5e0!3m2!1sen!2sus!4v1669064369970!5m2!1sen!2sus" 
  width="600" 
  height="450" 
  style="border:0;" 
  allowfullscreen
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
