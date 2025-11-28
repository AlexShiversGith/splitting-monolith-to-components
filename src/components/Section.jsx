const Section = ({title, children}) => {
  return (
    <div className="component-group">
      <h2>{title}</h2>
          <div className="component-card">
            {children}
          </div>
    </div>
  )
}

export default Section