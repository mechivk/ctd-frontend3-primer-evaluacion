import React, { Component } from 'react';
import Aventura from "./Aventura";
import Opcion from './Opcion';
import Historial from "./Historial";
import styles from "../styles/index.module.css";
import data from "../data.json";
import BotonDeReset from "./BotonDeReset"


export default class App extends Component{

constructor(props) {
  super(props);
  this.state = {
    historial: [],
    aventura: "",
    opciones: [],
    botonReset: false,
  }
}

componentDidMount = () => {
    this.setState({
      aventura: data[0].historia,
      opciones: [data[0].opciones.a, data[0].opciones.b]
    })
}


handleOptionClick = (id) => {
  if(this.state.historial.length === 4) {
    this.setState({
      botonReset: true
    })
    alert("Fin")
    
  } else {
  this.setState(prevState => {
    let historiaId = (prevState.historial.length + 2) + id.toLowerCase();
    let historia = data.find(historia => {
     return historia.id === historiaId
     })
    console.log(id);
    return {
      aventura: historia.historia,
      opciones: [historia.opciones.a, historia.opciones.b],
      historial: [...prevState.historial, id]
  }
  
})}
}

handleReset = () => {
  this.setState ({
    historial: [],
    aventura: data[0].historia,
    opciones: [data[0].opciones.a, data[0].opciones.b],
    botonReset: false,
  })
}

  render() {
    return (
    <main>
      <div className={styles.layout}>
        <Aventura historia={this.state.aventura}/>
        <div className={styles.opciones}>
          <Opcion id={"A"} opcion={this.state.opciones[0]} handleClick={this.handleOptionClick}/>
          <Opcion id={"B"} opcion={this.state.opciones[1]} handleClick={this.handleOptionClick}/>
        </div>
      </div>
        {/* <Opciones opciones={this.state.opciones} update={this.update}/> */}
        <div>
        <BotonDeReset handleClick={this.handleReset} estado={this.state.botonReset}/>
        <Historial listaDeSelecciones={this.state.historial}/>
        </div>
    </main>
    )}
}

