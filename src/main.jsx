import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MagicBox from './components/MagicBox/MagicBox.jsx'
import CardPicker from './components/CardPicker/CardPicker.jsx'
import Form from './components/Forms/Form.jsx'
import RandomUsers from './components/RandomUsers/RandomUsers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RandomUsers />
  </React.StrictMode>,
)
