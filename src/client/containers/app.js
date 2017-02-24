import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Input from '../components/input'

import './style.scss'

const mapDispatchToProps = (dispatch) => {
  return

}

class App extends Component {

  static propTypes = {  }



  render () {
    console.log("Hello");
    return (
      <div className='App'>
      <Input/>
      </div>
    )
  }

}

export default connect(null, mapDispatchToProps)(App)
