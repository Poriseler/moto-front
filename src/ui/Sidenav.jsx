import { HiXMark } from 'react-icons/hi2';
function Sidenav({ children, onClose }) {
  return (
    <nav className=" absolute bg-white h-screen z-50 px-7 py-4 w-2/4 top-0 right-0 text-2xl ">
      <div onClick={onClose} className="py-2">
        <HiXMark className="h-8 w-8 ml-auto" />
      </div>
      <div className="divide-y divide-slate-200 ">{children}</div>
    </nav>
  );
}

export default Sidenav;
