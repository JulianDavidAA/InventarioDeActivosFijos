import React, {Component}  from "react";
import Image from 'react-bootstrap/Image';

export default class Home extends Component {
  
    render() {
      return (<div className="principal-title">
        <div>
            <h1> Bienvenidos al administrador de Inventarios de Activos Ti</h1>
        </div>
        <Image src='https://postcron.com/es/blog/wp-content/uploads/2016/10/Frase-Motivadora-6.jpg' 
       rounded />

        
      </div>);
    }
  }