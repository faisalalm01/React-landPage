import React,{Component} from 'react'
import NavPanel from '../Component/NavPanel'
import './panel.css'

export default class Panel extends Component {
  render() {
    return (
        <div className='fill-window'>
          <NavPanel></NavPanel>
          <iframe title='tourapp' src="https://app.lapentor.com/sphere/vr-tour-sman-1" frameborder="0" width="100%" height="100%" scrolling="no" allow="vr,gyroscope,accelerometer" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>
      </div>
    )
  }
}
