export default function ActivityCountry(props) {
    const { nombre, bandera, codigo } = props
    return (
        <div>
            <img src={bandera}/>
            <h5>{nombre}</h5>
            <h6>{codigo}</h6>
        </div>
    )
}