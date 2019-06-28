import React from 'react';
import './home_page.scss';
import image from '../Microsoft-Logo.png'
import InputRange from 'react-input-range';
import  'react-input-range/lib/css/index.css'
import Footer from '../footer';

import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, 
         CardBody, Row, Col, Pagination, PaginationItem, PaginationLink, 
         Dropdown, DropdownToggle, DropdownMenu, DropdownItem, 
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        Jumbotron,
        Container,
        UncontrolledDropdown} from 'reactstrap';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 2, max: 10 },
    };
  }
  render() {
    return (
      <div>
        <div className='top-margin-10 resultCount'>
          <Navbar light expand="md">
            <p className='salary-found'>4,300 Salaries Found</p>
            <NavbarToggler onClick={this.toggle} />
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <p className='sort-by'>Sort By:</p>
                </NavItem>
                <UncontrolledDropdown size="sm" nav inNavbar className='dropdownStyle'>
                  <DropdownToggle caret>
                    Relevance
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
          </Navbar>
        </div>
        <Row className='top-margin-10 rangeBar'>
          <Jumbotron fluid>
            <Container fluid>
              <Row>
              <Col xs='5'>
              <h1 className="display-5">Graphic Designer</h1>
              <p className="lead">Average Base Pay  <span className='price'>425,927/yr</span></p>
              </Col>
              <Col xs='7' className='range-color'>
              <InputRange
              maxValue={20}
              minValue={0}
              value={this.state.value}
              onChange={value => this.setState({ value })} />
              </Col>
              </Row>
            </Container>
          </Jumbotron>
        </Row>
        <CardGroup>
          <Row className='top-margin-10 middlecontainer'>
            <Col xs="3" className='sideCard'>
              <Row>
                <Col>
                  <div>
                    <h4 className='font-color'>Distance</h4>
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
            </Col>
            <Col xs="9">
              <Card>
                <CardBody>
                  <GraphicsList/>
                  <GraphicsList/>
                  <GraphicsList/>
                  <GraphicsList/>
                  <GraphicsList/>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardGroup>
        <div className='paginate'>
          <Footer/>
        </div>
      </div>
    );
   }
}

class GraphicsList extends React.Component {
  render() {
    return (
      <Row className='sideCardB'>
        <Col><img src={image} height="60" alt=""/></Col>
        <Col>
          <p>Graphics Designerr</p>
          <p className='font-color'>Microsoft Corporator</p>
        </Col>
        <Col>
          <p className='font-color'><span>Icon</span>$12,00,0000 - $15,00,000</p>
          <p><span>Icon</span>Mumbai, Maharashtra India</p>
        </Col>
        <Col>
        <Button color="primary" className='grad1'>View</Button>
        <p>11 Position </p>
        </Col>
      </Row> 
    )
  }
}