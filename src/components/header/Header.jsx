import React, { useState, useEffect } from "react"
import Random from "../random/Random"
import Subscription from "../subscription/Subscription"

import "./header.css"

const Header = () => {
  const [Mobile, setMobile] = useState(false)
  const [modalActive, setModalActive] = useState(false)
  const [subscriptionActive, setSubscriptionActive] = useState(false)
  const [User, setUser] = useState("You do not have a subscription yet")
  const [Sub, setSub] = useState("Subscribe Now")
  const [typeSub, setTypeSub] = useState("")

  useEffect(() => {
    if(Sub === "Subscribed") {
      setUser(`You are subscribed to ${typeSub}`)
    }
  } , [Sub])

  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <img src='./images/logo.png' alt='' />
            </div>
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <div class="dropdown">
                  <button class="dropbtn">Show</button>
                  <div class="dropdown-content">
                    <a href="/">Movie</a>
                    <a href="/">Episode</a>
                    <a href="/">Series</a>
                  </div>
                </div>
              </li>
              <li>
                <a onClick={() => setModalActive(true)}>Get Random</a>
              </li>
              <li>
                <a href='/'>Pricing</a>
              </li>
              <li>
                <a href='/'>Contact</a>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <Random active={modalActive} setActive={setModalActive}/>
          <Subscription active={subscriptionActive} setActive={setSubscriptionActive} sub={setSub} typeSub={setTypeSub}/>

          <div className='account flexSB'>
            <i className='fa fa-search'></i>
            <i class='fas fa-bell'></i>
            <i className='fas fa-user' onClick={() => alert(User)}></i>
            <button onClick={() => {
              setSubscriptionActive(true)
            }}>{Sub}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
