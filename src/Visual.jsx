import React, { Component } from 'react'
import actions from './actions'
import { Button, Container, Header } from 'semantic-ui-react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import SideBar from './components/SideBar.jsx'

const position1 = [51.505, -0.09]
const position2 = [51.505, -0.10]

class Visual extends Component {
  constructor () {
    super()
    this.state = {
      selectedHospital: null
    }
  }

  selectedHospital (id) {
    this.setState({ selectedHospital: id })
  }

  onClose () {
    this.setState({ selectedHospital: null })
  }

  render () {
    const { selectedHospital } = this.state
    return (
      <div className='app-container'>
        <Map className='map-container' center={position1} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />

          <Marker onClick={() => this.selectedHospital(1)} position={position1}></Marker>
          <Marker onClick={() => this.selectedHospital(2)} position={position2}></Marker>
        </Map>

        {selectedHospital &&
          <SideBar
            hospital={selectedHospital}
            onClose={() => this.onClose()} />
        }
      </div>
    )
  }
}

export default Visual
