const Button = ({
  size = '', 
  variant ='', 
  children='', 
  isDisabled = false,
  fullWidth = false,
  onClick = null
}) => {
  return (
    <button className={`button ${size} ${variant} ${isDisabled && 'disabled'} ${fullWidth && 'full-width'} ${onClick !== null && onClick()}`}>{children}</button>
  )
}

export default Button