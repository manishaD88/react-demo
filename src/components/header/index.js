import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import InputRange from 'react-input-range';
import  'react-input-range/lib/css/index.css'
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 2, max: 10 },
    };
  }
  render() {
    return (
      <Fragment>
        <Row>
          <Col>
            <p>4,300 Salaries round</p>
          </Col>
          <Col>
            <p> Sort By:
              <span>
                <select>
                  <option value="relevance">Relevance</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Graphic Designer</h4>
            <p>Average Base Pay{'   '}<span>$425, 927/yr</span></p>
          </Col>
          <Col>
            <InputRange
              maxValue={20}
              minValue={0}
              value={this.state.value}
              onChange={value => this.setState({ value })} />
          </Col>
        </Row>
      </Fragment>
    )
  }
}
  
  export default Header;