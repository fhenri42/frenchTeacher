import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Input from '../components/input'
import Play from '../components/play'

import './style.scss'

const mapDispatchToProps = (dispatch) => {
  return

}

class App extends Component {

  static propTypes = {  }



  render () {
    return (
      <div className='App'>
      <Play />
      <Input />
      </div>
    )
  }

}

export default connect(null, mapDispatchToProps)(App)
