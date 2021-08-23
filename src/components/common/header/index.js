import React, {useState} from 'react'
import Navbar from './desktopNavbar'
import MobileNavbar from './mobileNavbar'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <MobileNavbar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/> 
        </>
        
    )
}

export default Header
