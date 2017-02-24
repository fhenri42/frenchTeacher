import React, { Component, PropTypes } from 'react'
import { fromJS } from 'immutable'
import "./style.scss"
class Input extends Component {

  static propTypes = {}

  addLeter = (e) => {
      console.log(e.target.value);
  }

  sumbit = (paragraphe) => {

  }

  render () {
    return (
      <div>
        <textarea
        className="dicter"
        onChange={(e) => this.addLeter(e)}
        />
      </div>
    )
  }
}

export default Input
