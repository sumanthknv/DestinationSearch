const DestinationItem = props => {
  const {destinationsListDetails} = props
  const {id, name, imgUrl} = props
  return (
    <li className="list-Item">
      <img className="image" alt={name} src={imgUrl} />
      <p className="description">{name}</p>
    </li>
  )
}

export default DestinationItem
