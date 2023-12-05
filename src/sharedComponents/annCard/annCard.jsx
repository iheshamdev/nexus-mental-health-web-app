import React from 'react';
import './card.scss';
import { Icon } from '@components';
import { Button, Col, Row } from 'antd';
export default function AnnCard() {
  return (
    <div className="card">
      <span>
        <Icon className="icon" name="annIcon" />
      </span>

      <h4>organizations Name</h4>
      <Row className="location-container" gutter={8}>
        <Col>
          <Icon name="locationIcon" />
        </Col>
        <Col>
          <h5>Location Name</h5>
        </Col>
      </Row>
      <div className="subject">Subject:-</div>
      <p className="ann-desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
      </p>
      <Row className="location-container" gutter={8}>
        <Col>
          <Icon name="calender" />
        </Col>
        <Col>
          <h5>Location Name</h5>
        </Col>
      </Row>
      <Button className="contact-us-btn" type="primary">
        Contact us
      </Button>
    </div>
  );
}
