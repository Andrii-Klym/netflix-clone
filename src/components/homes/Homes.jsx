import React, { useState } from "react"
import { homeData } from "../../dummyData"
import Home from "./Home"

import "./home.css"

const Homes = () => {
  const [items, setItems] = useState(homeData)

  return (
    <>
      <section className='home'>
        <Home items={items} />
      </section>
      <div className='mragin'></div>
    </>
  )
}

export default Homes
