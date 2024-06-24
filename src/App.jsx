import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page from './Page/Page.jsx'
import Card from './Components/Card/Card.jsx'
import Boot from './Components/TestBootstrap/Boot.jsx'
import './Styles/mixins.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Page/>
     {/* <Boot/> */}
     {/* <Card/> */}
    </>
  )
}

export default App
