export function Card(props) {
  return (
    <div className="card-component">
      <img src={props.jogadorData.picture} />
      <div className="card-body">
        <h1>{props.jogadorData.name}</h1>
        <span>{props.jogadorData.position}</span>
      </div>
    </div>
  )
}