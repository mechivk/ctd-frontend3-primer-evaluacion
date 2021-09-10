import React, { Component } from 'react';
import styles from "../styles/index.module.css";

export default class Opcion extends Component {
  
  render() {
    if (this.props.estado) {
      return (        
      <div className={styles.reset}>
            <button className={styles.botones} onClick={() => this.props.handleClick()}>Volver al inicio</button>
      </div>)
      } else {
          return ""
      }
  }
}