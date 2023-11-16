function DropdownItem({ children }) {
  return (
    <li className="text-slate-800 hover:text-orange-800 px-2">
      <a href={`/artykuly/tagi/${children}`}>{children}</a>
    </li>
  );
}

export default DropdownItem;
