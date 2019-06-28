import React from 'react';
import './home_page.scss';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, 
         CardBody, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
export class HomePage extends React.Component {
   render() {
    return (
      <CardGroup>
        <Row className='top-margin-10'>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
            </CardBody>
          </Card>
        </Row>
        <Row className='top-margin-10'>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
            </CardBody>
          </Card>
        </Row>
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