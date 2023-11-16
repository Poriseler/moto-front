function HeaderMenuItem({ children, name, onClick = undefined, icon }) {
  return (
    <div
      onClick={onClick}
      className="text-slate-800 font-medium hover:text-orange-700 hover:border-b-4 hover:border-b-orange-700 border-slate-300 drop-shadow-md"
    >
      <div className="py-3">
        {name} {icon}
      </div>
      <div>{children}</div>
    </div>
  );
}

export default HeaderMenuItem;
