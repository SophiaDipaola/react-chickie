import Artist from'./Artist'

function Human(props){
    return(
        <div>
            <h1> Name:{props.name}</h1>
            <p>Location: {props.location}</p>
            <Artist medium="performing artist"/>
        </div>
    )
}
export default Human;