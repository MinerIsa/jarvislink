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
  ModalHeader,
  ModalFooter,
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
      <section className="section bg-light pt-1">
        <Container>
          <SectionTitle title="Documentation" />
          <Row>
            <Col lg={3} md={6} xs={12}>
              <Card style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'}} className=" features fea-primary bg-white rounded p-4 position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <i className="uil uil-newspaper"></i>
                </span>
                <CardBody className="p-0 content">
                  <h5>System Overview</h5>
                  <p className="para text-muted mb-0">
                    Information about system features and capabilities.
                  </p>

                  <a
                    href="https://drive.google.com/file/d/1NktYdGQMA4dwCPp7SQt591C2GaiquZ_M/view?usp=share_link"
                    className="btn btn-pills btn-soft-success mt-4"
                    // onClick={() => setModal(true)}
                  >
                    Download PDF
                  </a>
                </CardBody>
              </Card>
            </Col>
            <Col lg={3} md={6} xs={12} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <Card style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'}} className="features fea-primary rounded p-4 bg-white position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <i className="uil uil-rss"></i>
                </span>
                <CardBody className="p-0 content">
                  <h5>Components & Sensors</h5>
                  <p className="para text-muted mb-0">
                    Motion Sensors, Photosensors, and Daylight Harvesting
                    Sensors for Indoor and Outdoor Applications.
                  </p>

                  <a
                    // onClick={() => setModal(true)}
                    href="https://cdn.shopify.com/s/files/1/0406/9018/8439/files/v1.2_Jarvis_Link_Sensor_Components_Sheet.pdf_4_1.pdf?v=1697221104"
                    className="btn btn-pills btn-soft-success mt-4"
                  >
                    Download PDF
                  </a>
                </CardBody>
              </Card>
            </Col>

            <Col lg={3} md={6} xs={12}>
              <Card style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'}} className=" features fea-primary rounded p-4 bg-white position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <i className="uil uil-sun"></i>
                </span>
                <CardBody className="p-0 content">
                  <h5>Wall Switches</h5>
                  <p className="para text-muted mb-0">
                    Control zones with hard-wired or wire-free kinetic switches.
                  </p>

                  <a
                    href="https://drive.google.com/file/d/1C4oOYqMWJAJQDyl5osRZzUOCbS7N53dZ/view?usp=sharing"
                    className="btn btn-pills btn-soft-success mt-4"
                    // onClick={() => setModal(true)}
                  >
                    Download PDF
                  </a>
                </CardBody>
              </Card>
            </Col>

            <Col lg={3} md={6} xs={12} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <Card style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'}} className="features fea-primary rounded p-4 bg-white position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <i className="uil uil-link"></i>
                </span>
                <CardBody className="p-0 content">
                  <h5>Gateway</h5>
                  <p className="para text-muted mb-0">
                    Monitor energy consumption, set advanced schedules and more
                    with optional gateways.
                  </p>

                  <a
                    href="https://drive.google.com/file/d/1fceX1DcQiLev7EXbxML88pn_eZ4JtueK/view?usp=share_link"
                    className="btn btn-pills btn-soft-success mt-4"
                  >
                    Download PDF
                  </a>
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
          <Container fluid className="pt-3 text-center">
            <h1>Documentation will be updated soon</h1>
          </Container>
        </ModalBody>
        <ModalFooter className="mx-auto">
          <a onClick={() => setModal(false)} className="text-center">
            Close
          </a>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};
export default Appointment;
