function Input({ placeholder, onChange }) {
  return (
    <input
      className=""
      type="text"
      name="articleQuery"
      id="articleQuery"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
