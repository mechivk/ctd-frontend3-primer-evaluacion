import React, { Component } from 'react';
import styles from "../styles/index.module.css";

export default class Historial extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ultimaSeleccion: "",
      listaPasadas: []
    }
  }
 
componentDidUpdate = (prevProps) => {
  if(this.props.listaDeSelecciones !== prevProps.listaDeSelecciones){
    this.setState({
      ultimaSeleccion: this.props.listaDeSelecciones.slice(this.props.listaDeSelecciones.length-1, this.props.listaDeSelecciones.length),
      listaPasadas: this.props.listaDeSelecciones.slice(0, this.props.listaDeSelecciones.length -1)
    })
  }
}

  

render(){
  return (
    <div className={styles.recordatorio}>
      <h3>Selección anterior: {this.state.ultimaSeleccion}</h3>
      <h4>Historial de opciones elegidas:</h4>
      <ul>
        {this.state.listaPasadas.map(seleccion => {
          return <li>{seleccion}</li>
        })}
      </ul>
      </div>
  )}
};