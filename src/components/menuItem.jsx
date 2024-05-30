function MenuItem({image, name}) {
  return (
    <div className="menuItem">
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1 style={{marginBottom:`10px`, fontSize:`25px`}}>{name}</h1>
    </div>
  )
}

export default MenuItem