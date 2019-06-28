import React from 'react';
import './App.scss';
import {HeaderPage} from './header/header_page.js';
import {HomePage} from './home/home_page';
import { Card } from 'reactstrap';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Card className='mainCont container'>
          <HomePage/>
        </Card>
      </div>
    );
  }
}
