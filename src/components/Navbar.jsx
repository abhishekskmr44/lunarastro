import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Aries from '../pages/Aries.jsx'
import modulecss from "./Navbar.module.css"


const Navbar = () => {
  const [showDetails,setShowDetails] = useState("show")

const handleClick = ()=>{ 
  setShowDetails("notshow")
}

const handleClock = ()=>{ 
  setShowDetails("show")
}

  return (
    <div className={modulecss.container}>
        <div className={modulecss.caption}>
        Hello, n welcome to Lunar astro!
        </div>
        
        
        <div className={modulecss.rashis}>
        {/* <div className={modulecss.aries}><a href="../pages/Aries">Aries</a></div> */}
        <div className={modulecss.gemini}><Link to="/aries">Aries</Link></div>
        <div className={modulecss.cancer}><Link to="/taurus">Taurus</Link></div>
        <div className={modulecss.leo}><Link to="/gemini">Gemini</Link></div>
        <div className={modulecss.virgo}><Link to="/cancer">Cancer</Link></div>
        <div className={modulecss.libra}><Link to="/leo">Leo</Link></div>
        <div className={modulecss.scorpio}><Link to="/virgo">Virgo</Link></div>
        <div className={modulecss.sagittarius}><Link to="/libra">Libra</Link></div>
        <div className={modulecss.capricorn}><Link to="/scorpio">Scorpio</Link></div>
        <div className={modulecss.aquarius}><Link to="/saggitarius">Saggitarius</Link></div>
        <div className={modulecss.pisces}><Link to="/capricorn">Capricorn</Link></div>
        <div className={modulecss.pisces}><Link to="/aquarius">Aquarius</Link></div>
        <div className={modulecss.pisces}><Link to="/pisces">Pisces</Link></div>
        </div>
    </div>
  )
}

export default Navbar