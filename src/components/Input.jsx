function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      className="bg-sky-100 border border-sky-400 outline-sky-500 px-4 py-2 rounded-md"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
