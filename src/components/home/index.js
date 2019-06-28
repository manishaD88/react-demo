import React, {
  Component
} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../header';
import Footer from '../footer';
import GraphicsList from '../graphics-lists';

class Home extends Component {
  render() {
    return (
      <Container>
        <Header />  
        <GraphicsList />
        <Footer />     
      </Container>
    )
  }
}

export default Home;