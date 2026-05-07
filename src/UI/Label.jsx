function Label({htmlFor, children}) {
    return (
        <label htmlFor={htmlFor} className="text-gray-500 font-medium">
            {children}
        </label>
    )
}

export default Label;
