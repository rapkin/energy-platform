import React, { Component } from 'react'
import { Button, Container, Header, Image, Segment } from 'semantic-ui-react'
import { getHumanType } from '../helpers'

function App({ hospital }) {
  const hospital1 = {
    name: 'Поліклініка №1',
    type: 'clinic',
    image: 'http://polandmed.ru/sites/default/files/polskaja-klinika-karolina.jpg',
    description: `
      <p>
          <b>Вікна:</b> пластикові
      </p>
    `,
    lat: 51.505,
    lon: -0.09
  }

  const hospital2 = {
    name: 'Стоматологія Ілідан',
    type: 'dentistry',
    image: 'https://scontent.fiev11-1.fna.fbcdn.net/v/t31.0-1/23116842_1550188495058443_6960372290840751448_o.jpg?_nc_cat=101&_nc_oc=AQmAuqrVaGisDnBBEH5mxTfA3i55BdwA34CP3OlA8fvywUzEdxa499OE8tPdkVPW91o&_nc_ht=scontent.fiev11-1.fna&oh=c2461bd363a1b9ec7b326316f172163a&oe=5DB2EBC9',
    description: `
      <p>
          <b>Вікна:</b> пластикові
      </p>
    `,
    lat: 51.505,
    lon: -0.09
  }

  console.log(hospital)
  hospital = hospital == 1 ? hospital1 : hospital2

  return (
    <div className="sidebar-container">
      <Container>
        <div className='hospital-card'>
          <div>
            <Image size='small' rounded src={hospital.image} />
          </div>

          <div className='hospital-description'>
            <Header>{hospital.name}</Header>
            <div><b>Вид:</b> {getHumanType(hospital.type)}</div>
            <div dangerouslySetInnerHTML={{ __html: hospital.description }}></div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default App
