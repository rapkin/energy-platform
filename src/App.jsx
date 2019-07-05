import React, { Component } from 'react'
import actions from './actions'
import { Button, Container, Header } from 'semantic-ui-react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import SideBar from './components/SideBar.jsx'

const position = [51.505, -0.09]

class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedHospital: null
    }
  }

  handleClick () {
    console.log('click')
  }

  render () {
    const { selectedHospital } = this.state
    return (
      <div className='app-container'>
        <Map className='map-container' center={position} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker onClick={this.handleClick} position={position}>
          </Marker>
        </Map>

        <SideBar hospital={selectedHospital} />
      </div>
    )
  }
}

export default App
