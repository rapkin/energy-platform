import React, { Component } from 'react'
import { Button, Container, Header } from 'semantic-ui-react'
import Visual from './Visual.jsx'

class Home extends Component {
  constructor () {
    super()
    this.state = { visibleMap: false }
  }
  showMap () {
    this.setState({ visibleMap: true })
  }

  render () {
    const { visibleMap } = this.state
    if (visibleMap) return <Visual />
    return (
      <Container className='home-container'>
        <Header>Візуалізація оцінки енергоефективності по лікарням України</Header>
        <iframe src="https://vision.eos.com/maps/embed/0ab9327c-74d2-4244-923f-ba66143277d4" width="800" height="600" frameborder="0" style={{border: 0}}></iframe>
        <Header>Після розбиття на регіони</Header>
        <iframe src="https://vision.eos.com/maps/embed/a3173c26-b719-4757-b563-88734d46d810" width="800" height="600" frameborder="0" style={{border: 0}}></iframe>
        <Button onClick={() => this.showMap()}>Переглянути візуалізацію по наявним лікарням</Button>
      </Container>
    )
  }
}

export default Home
