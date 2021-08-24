import React, {useState} from 'react'
import Navbar from './desktopNavbar'
import MobileNavbar from './mobileNavbar'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className="sidePadding">
            <MobileNavbar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/> 
        </div>
        
    )
}

export default Header
