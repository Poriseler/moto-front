import { useState } from "react"
// import SearchBox from "../features/searching/SearchBox"

import Logo from "./Logo"
import { HiOutlineMagnifyingGlass } from "react-icons/hi2"
import HeaderMenuList from "./HeaderMenuList"

function Header() {
    const [showSearchBox, setShowSearchbox] = useState(false)
    function handleClick() {
        setShowSearchbox(!showSearchBox);
        
    }
    return (
        <div className="bg-slate-100 drop-shadow-md  grid grid-cols-[1fr_2fr] ">
            <Logo />
            <div className="pe-4 md:pe-0 flex flex-row justify-end md:justify-between items-center">
                <HeaderMenuList />
            
                <div className="pe-0 md:pe-10 flex flex-column items-center transition duration-1000 ">
                    
                    <input className={`${showSearchBox ? "w-[8rem]" : "w-0 bg-slate-100"} transition-all duration-300 rounded-xl p-2 border-bg-orange-700 focus-visible:ring-orange-700 focus-visible:outline-none focus:ring-2 `} type="text" name="articleQuery" id="articleQuery" placeholder="Wyszukaj..."/>
                    <span className="mx-4 " onClick={() => handleClick()}><HiOutlineMagnifyingGlass className="h-8 w-8 " /> </span>
                </div>
            </div>
        </div>
    )
}

export default Header
