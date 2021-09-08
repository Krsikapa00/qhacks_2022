import React, {useState} from 'react'
import Navbar from './desktopNavbar'
import MobileNavbar from './mobileNavbar'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    if(isOpen) {
        return(
            <MobileNavbar isOpen={isOpen} toggle={toggle}/>
        )
    } else {
        return (
            <div className="sidePadding">
                <Navbar toggle={toggle}/> 
            </div>
        )
    }
    
}

export default Header
