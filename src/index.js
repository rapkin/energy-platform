import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import DropdownExample from './components/HospitalForm.jsx'
import * as serviceWorker from './serviceWorker'
import ButtonMain from './components/Button.js'


ReactDOM.render( <DropdownExample />,  document.getElementById('root'))

//ReactDOM.render(
  //<App>
    //<Example />
  //</App>,
  //document.getElementById("root")
//);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
