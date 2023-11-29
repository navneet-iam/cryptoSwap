const Button =({onClick, label, type, className})=>{
    return(
        <button type={type} onClick={onClick} className={className}>
            {label}
        </button>
    )
}

export default Button;