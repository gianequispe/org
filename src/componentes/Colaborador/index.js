import "./Colaborador.css"
import { TiDelete, TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";


const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props

    // Operacion ternario
    // condicion ? verdadero : false

    return <div className="colaborador">
        <TiDelete className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
       <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        { fav ?  <TiHeartFullOutline color="red" onClick={() => like(id)}/> : <TiHeartOutline onClick={() => like(id)} />}
        </div> 
    </div>
}

export default Colaborador