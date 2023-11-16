import DropdownItem from './DropdownItem';

function Dropdown({ items }) {
  return (
    <div className="absolute bg-white rounded-md px-3 py-1 border text-xl max-h-[15rem] overflow-auto">
      <ul className="divide-y divide-slate-200 ">
        {items.map((item) => (
          <DropdownItem key={item}>{item}</DropdownItem>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
