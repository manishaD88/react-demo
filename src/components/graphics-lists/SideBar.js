import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
  
class SideBar extends Component {
  render() {
    return (
      <Row>
        <Col>
          <div>
            <h4>Distance</h4>
            <select>
              <option value="with in 25 kms">With in 25 kms</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <div>
              <h5>Job Type</h5>
              <p>Full Time<span>(526)</span></p>
              <p>Internship<span>(115)</span></p>
              <p>Part Time<span>(35)</span></p>
              <p>Fresher<span>(25)</span></p>
              <p>Contract<span>(19)</span></p>
              <p> more >> </p>
            </div>
          </div>
        </Col>
      </Row>  
    )
  }
}
  
  export default SideBar;