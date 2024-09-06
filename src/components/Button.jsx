function Button(props) {
  return (
    <button
      {...props}
      className="bg-gray-900 hover:bg-blue-600 text-zinc-300 p-2 rounded-md"
    >
      {props.children}
    </button>
  );
}

export default Button;
