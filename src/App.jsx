import { useState } from 'react'
import './App.css'
import { Header } from './Component/Header'
import { SideMenu } from './Component/SideMenu'
import { UserName } from './Component/UserName'
import { Invested } from './Component/Invested'
import { PortfolioMetrics } from './Component/PortfolioMetrics'
import { Sector } from './Component/Sector'
import { Overlap } from './Component/Overlap'
import { Performance } from './Component/Performance'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="all">
      <Header/>
      <div id="Content">
      <div>
      <SideMenu/>
      </div>
      <div id="midContent">
      <UserName/>
      <PortfolioMetrics/>
      <Sector/>
      <Overlap/>
      <Performance/>
      </div>
      </div>
    </div>
  )
}

export default App
