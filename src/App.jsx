import React from 'react'
import './App.css'
import actions from './actions'
import { Button, Container, Header } from 'semantic-ui-react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [51.505, -0.09]

function App() {
  return (
    <Container className="app-container">
      <Header>Test</Header>
      <Button>test button</Button>

      <Map className='map-container' center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
    </Container>
  )
}

export default App
