import { useState } from 'react';
import HeaderMenuItem from './HeaderMenuItem';
import { HiBars3, HiOutlineChevronUp, HiOutlineChevronDown } from 'react-icons/hi2';
import Dropdown from './Dropdown';
import Sidenav from './Sidenav';
import Overlay from './Overlay';

function HeaderMenuList() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const brands = ['Acura', 'BMW', 'Mercedes'];
  const isLoggedIn = sessionStorage.getItem('token')
  const root = document.getElementById('root');
  function toggleMenu() {
    setShowMenu(!showMenu);
    root.classList.toggle('overflow-hidden');
  }
  return (
    <>
      <nav className={`block md:hidden order-1 ${showMenu && 'overflow-hidden'}`}>
        <div onClick={toggleMenu}>
          <HiBars3 className="h-12 w-12" />
        </div>
        {showMenu && (
          <Overlay>
            <Sidenav onClose={toggleMenu}>

              <a href="/artykuly/kategorie/newsy">
                <HeaderMenuItem name="Newsy" isLink={true} />
              </a>
              <a href="/artykuly/kategorie/testy">
                <HeaderMenuItem name="Testy" isLink={true} />
              </a>
              <a href="/artykuly/kategorie/relacje">
                <HeaderMenuItem name="Relacje" isLink={true} />
              </a>
              <a href="/artykuly/kategorie/felietony">
                <HeaderMenuItem name="Felietony" isLink={true} />
              </a>
              <div onClick={() => setShowDropdown(!showDropdown)}>
                <HeaderMenuItem
                  name="Marka"
                  icon={
                    showDropdown ? (
                      <HiOutlineChevronUp className="inline" />
                    ) : (
                      <HiOutlineChevronDown className="inline" />
                    )
                  }
                >
                  {showDropdown && <Dropdown items={brands} />}
                </HeaderMenuItem>
              </div>
            </Sidenav>
          </Overlay>
        )}
      </nav>
      <nav className="hidden md:flex flex-row text-2xl items-center gap-2 md:gap-4">
        {isLoggedIn && <a href='/dodaj-artykul'>
          <HeaderMenuItem name="Dodaj artykuł" />
        </a>}
        <a href="/artykuly/kategorie/newsy">
          <HeaderMenuItem name="Newsy" />
        </a>
        <a href="/artykuly/kategorie/testy">
          <HeaderMenuItem name="Testy" />
        </a>
        <a href="/artykuly/kategorie/relacje">
          <HeaderMenuItem name="Relacje" />
        </a>
        <a href="/artykuly/kategorie/felietony">
          <HeaderMenuItem name="Felietony" />
        </a>
        <div onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
          <HeaderMenuItem
            name="Marka"
            icon={
              showDropdown ? <HiOutlineChevronUp className="inline" /> : <HiOutlineChevronDown className="inline" />
            }
          >
            {showDropdown && <Dropdown items={brands} />}
          </HeaderMenuItem>
        </div>
      </nav>
    </>
  );
}

export default HeaderMenuList;
