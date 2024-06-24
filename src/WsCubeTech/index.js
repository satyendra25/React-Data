// import React from 'react'
import { Component } from 'react';
import "./style.css";
import State from './state';
import Prop from './prop';
import New from './new';

import FirstMethod from './Rebind/firstMethod';
import Second from './Rebind/Second';
import Third from './Rebind/third';
import IndexCss from './CSS';


class Index extends Component {
 
  render() {
    return (
      <>
      <IndexCss/>
      <FirstMethod/>
      <Second/>
      <Third/>
        <New name="Saten baghle" age="33" />
       
        <State />

        <Prop name="Saten " age="32" />
        <Prop name="Sandhya" age="30" />

        <div className="container">
          <h2>Hello saten</h2>
        </div>
      </>
    );
  }
}
export default Index;