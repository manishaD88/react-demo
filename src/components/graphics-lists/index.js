import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import SideBar from './SideBar';
import List from './List';

class GraphicsList extends Component {
render() {
  return (
    <Row>
      <Col xs="4">
        <SideBar />
        </Col>
      <Col xs="8">
        <List />
        <List />
        <List />
        <List />
        <List />
      </Col>
    </Row>  
  )
  }
}
  
export default GraphicsList;