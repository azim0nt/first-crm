import './Circle.scss'

function Circle(props) {
    return ( 
        <>
        <div className="circle" style={{border:`2px dotted ${props.color}`, boxShadow:`0.5px 0.5px 10px ${props.color}`}}></div>
        </>
     );
}

export default Circle;