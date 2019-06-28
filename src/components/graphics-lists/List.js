import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import image from '../../Microsoft-Logo.png'
class List extends Component {
  render() {
    return (
      <Row>
        <Col><img src={image} height="60" alt=""/></Col>
        <Col>
          <p>Graphics Designerr</p>
          <p>Microsoft Corporator</p>
        </Col>
        <Col>
          <p><span>Icon</span>$12,00,0000 - $15,00,000</p>
          <p><span>Icon</span>Mumbai, Maharashtra India</p>
        </Col>
        <Col>
        <Button color="primary">View</Button>
        <p>11 Position </p>
        </Col>
      </Row>  
    )
  }
}
  
  export default List;