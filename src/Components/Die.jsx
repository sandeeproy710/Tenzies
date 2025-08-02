

export default function Die (props) {
    return (
        <section >
            <button className="die" 
            style={{backgroundColor: props.isHeld ? "#59E391" : "white"}}
            onClick={()=> props.hold(props.id)}>{props.value}</button>
        </section>
    )
}