import React, { Component } from 'react'
import { Button, Container, Header, Image, Segment } from 'semantic-ui-react'
import { getHumanType } from '../helpers'
import { Doughnut } from 'react-chartjs-2'

class SideBar extends Component {
  constructor () {
    super()
  }

  render () {
    let { hospital } = this.props

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

    const data1 = [12, 19, 3, 5, 2, 3]
    const data2 = [3, 19, 3, 5, 21, 3]

    hospital = hospital == 1 ? hospital1 : hospital2
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: hospital == hospital1 ? data1 : data2,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

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

          <Doughnut data={data} />
        </Container>
      </div>
    )
  }
}

export default SideBar
