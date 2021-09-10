import React, { Component } from 'react';
import styles from "../index.module.css";

export default class Aventura extends Component{

    render(){
        return(
        <h1 className={styles.historia}>
            {this.props.historia}
        </h1>
    )
    }
}