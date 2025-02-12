function Button(props) {
  return (
    <button
      {...props}
      className="bg-sky-500 text-white p-2 rounded-md cursor-pointer hover:bg-sky-600"
    >
      {props.children}
    </button>
  );
}

export default Button;
