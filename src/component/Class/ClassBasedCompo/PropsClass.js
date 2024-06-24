import React, { Component } from 'react'

export default class PropsClass extends Component {
  render() {
    return (
      <div>
        <p>Props use with class based components</p>
        <h2>Hobby:- {this.props.hobbis}</h2>
        <h2>Name:- {this.props.text.name}, {this.props.text.data}</h2>
      </div>
    )
  }
}
