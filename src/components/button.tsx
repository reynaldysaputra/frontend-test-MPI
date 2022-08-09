function Button(props: any){
  const { className, type, children, onClick } = props;

  return(
    <button
      className={`w-full bg-black p-3 text-white ${className} cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;