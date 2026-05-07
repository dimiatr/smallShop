function Input({ type = 'text', placeholder, id, value, handleChange, required = false , w = 'w-full'}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={handleChange}
        className={`border border-gray-300 rounded px-2 py-1 ${w} outline-none focus:border-sky-400 anim`}
        required={required}
      />
    </>
  );
}

export default Input;
