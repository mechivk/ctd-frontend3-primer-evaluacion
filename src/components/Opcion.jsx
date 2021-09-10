import React, { Component } from 'react';
import styles from "../styles/index.module.css";

export default class Opcion extends Component {
  
  render(){
    return (
    <div className={styles.opcion}>
      <button id={this.props.id} className={styles.botones} onClick={() => this.props.handleClick(this.props.id)}>{this.props.id}</button>
      <h2>{this.props.opcion}</h2>
    </div>
      );
  }
}