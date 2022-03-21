import React, { Component } from 'react'
import Home from './Pages/Home'
import {BrowserRouter, Route} from 'react-router-dom'
import Panel from './Pages/Panel'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path = "/" exact component = {Home}/>
        <Route path= "/vr" exact component= {Panel}/>
      </BrowserRouter>

    )
  }
}
