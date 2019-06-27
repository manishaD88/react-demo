import React from 'react';
import './home_page.scss';
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
              <h1 className="display-5">Graphic Designer</h1>
              <p className="lead">Average Base Pay  <span className='price'>425,927/yr</span></p>
            </Container>
          </Jumbotron>
        </Row>
        <CardGroup>
          <Row className='top-margin-10'>
            <Col xs="3">
              <Card>
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="9">
              <Card>
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className='top-margin-10'>
            <PaginationContainer/>
          </Row>
        </CardGroup>
      </div>
    );
   }
}



class PaginationContainer extends React.Component {
  render() {
    return (
      <Pagination size="sm" aria-label="Page navigation example">
      <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}