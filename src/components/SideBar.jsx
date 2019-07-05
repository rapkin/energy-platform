import React, { Component } from 'react'
import { Button, Container, Header, Image, Segment } from 'semantic-ui-react'
import { getHumanType } from '../helpers'
import Chart from 'chart.js'

import actions from '../actions'

class SideBar extends Component {
  constructor () {
    super()
    this.state = { compare: false }
    this.charts = {}
  }

  async componentDidMount () {
    const records = await actions.records.fetchRecordsByHospital(1)
    const data = {}
    for (let record of records) {
      const name = record.NameType
      const value = record.Value
      data[name] = data[name] || []
      data[name].push(value)
    }

    this.datasets = []
    Object.keys(data).forEach(k => {
      this.datasets.push({ label: k, data: data[k]})
    })
    console.log(this.datasets)
    this.onLoad()
  }

  onLoad () {
    let i = 0
    for (let type of ['water', 'heat', 'electro']) {
      console.log(this.datasets[i], this.charts[type])
      new Chart(this.charts[type], {
        type: 'line',
        data: {
          datasets: [this.datasets[i]],
          labels: [...Array(365).keys()]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
      })
      i++
    }
  }

  startCompare () {
    this.setState({ compare: true })
    setTimeout(() => {
      new Chart(this.charts.compare, {
        type: 'bar',
        data: {
          datasets: [{
            data: [124, 245, 176],
            backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
            ]
          }],
          labels: [1, 2, 3]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
      })
    })
  }

  render () {
    let { hospital, onClose } = this.props
    let { compare } = this.state

    const hospital1 = {
      name: 'Поліклініка №1',
      type: 'clinic',
      image: 'http://polandmed.ru/sites/default/files/polskaja-klinika-karolina.jpg',
      description: `
        <p>
            <b>Вікна:</b> пластикові
            <img style='max-width: 100%' src='/test.png'/>
        </p>
      `,
      lat: 51.505,
      lon: -0.09
    }

    const hospital2 = {
      name: 'Стоматологія Зубок',
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
            </div>
          </div>

          <div
            className='hospital-description'
            dangerouslySetInnerHTML={{ __html: hospital.description }}>
          </div>

          {!compare && (<div>
            <canvas ref={(r) => this.charts.water = r} />
            <canvas ref={(r) => this.charts.electro = r} />
            <canvas ref={(r) => this.charts.heat = r} />
          </div>)}

          {compare && (<div>
            <canvas ref={(r) => this.charts.compare = r} />
          </div>)}
          <button onClick={onClose} className='close-button'>x</button>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%' }}>
            <Button onClick={() => this.startCompare()}>Порівняти</Button>
          </div>
        </Container>
      </div>
    )
  }
}

export default SideBar
