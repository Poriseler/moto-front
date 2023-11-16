import { useState } from 'react';
// import SearchBox from "../features/searching/SearchBox"

import Logo from './Logo';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import HeaderMenuList from './HeaderMenuList';

function Header() {
  const [showSearchBox, setShowSearchbox] = useState(false);
  const [query, setQuery] = useState('');
  function handleClick() {
    setShowSearchbox(!showSearchBox);
  }
  return (
    <header className="bg-slate-100 drop-shadow-md  grid grid-cols-[1fr_2fr] ">
      <Logo />
      <div className="pe-4 md:pe-0 flex flex-row justify-end md:justify-between items-center">
        <HeaderMenuList />

        <form method="get" action={`/szukaj`}>
          <div className="pe-0 md:pe-10 flex flex-column items-center transition duration-1000 ">
            <input
              className={`${
                showSearchBox ? 'w-[7.5rem] md:w-[9rem]' : 'w-0 bg-slate-100'
              } transition-all duration-300 rounded-xl p-2 border-bg-orange-700 focus-visible:ring-orange-700 focus-visible:outline-none focus:ring-2 `}
              type="text"
              name="fraza"
              id="fraza"
              placeholder="Wyszukaj..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <span className="mx-4 " onClick={() => handleClick()}>
              <HiOutlineMagnifyingGlass className="h-8 w-8 " />{' '}
            </span>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;
