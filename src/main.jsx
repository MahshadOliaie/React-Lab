import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MagicBox from './components/MagicBox/MagicBox.jsx'
import CardPicker from './components/CardPicker/CardPicker.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CardPicker/>
  </React.StrictMode>,
)
