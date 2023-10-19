import { useState } from 'react'
import HeaderMenuItem from './HeaderMenuItem'
import { HiBars3, HiOutlineChevronUp, HiOutlineChevronDown } from 'react-icons/hi2'
import Dropdown from './Dropdown'
import Sidenav from './Sidenav'
import Overlay from './Overlay'

function HeaderMenuList() {
    const [showMenu, setShowMenu] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)
    const brands = ['Acura', 'BMW', 'Mercedes', 'Ford', 'Acura', 'BMW', 'Mercedes', 'Ford', 'Acura', 'BMW', 'Mercedes', 'Ford']
    const root = document.getElementById('root')
    function toggleMenu() {
        setShowMenu(!showMenu)
        root.classList.toggle('overflow-hidden')
    }
    return (
        <>
        <div className={`block md:hidden order-1 ${showMenu && 'overflow-hidden'}`} >
            <div onClick={toggleMenu}>
                <HiBars3 className='h-12 w-12' /> 

            </div>
            {showMenu && 
            <Overlay>

                <Sidenav onClose={toggleMenu} >

                    <HeaderMenuItem name='Newsy' />
                    <HeaderMenuItem name='Testy' />
                    <HeaderMenuItem name='Relacje' />
                    <HeaderMenuItem name='Felietony' />
                    <div onClick={() => setShowDropdown(!showDropdown)}>

                    <HeaderMenuItem name='Marka' icon={showDropdown ? <HiOutlineChevronUp className='inline'/> : <HiOutlineChevronDown className='inline' />}>
                        {showDropdown && <Dropdown items={brands}/>}
                    </HeaderMenuItem> 
                    </div>
                </Sidenav>
            </Overlay>
            
                
            
            
            
            }
        </div>
        <div className='hidden md:flex flex-row text-2xl items-center gap-2 md:gap-4'>
            <HeaderMenuItem name='Newsy' />
            <HeaderMenuItem name='Testy' />
            <HeaderMenuItem name='Relacje' />
            <HeaderMenuItem name='Felietony' />
            <div onMouseEnter={() => setShowDropdown(true)} onMouseLeave={()=> setShowDropdown(false)}>
                <HeaderMenuItem name='Marka' icon={showDropdown ? <HiOutlineChevronUp className='inline'/> : <HiOutlineChevronDown className='inline' />}>
                    {showDropdown && <Dropdown items={brands}/>}
                </HeaderMenuItem>
            </div>
            
            
            
        </div>
        </>
    )
}

export default HeaderMenuList
