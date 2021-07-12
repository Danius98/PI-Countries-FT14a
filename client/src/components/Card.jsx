import React from 'react';
//import styles from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  const {codigo, nombre, bandera, continente} = props;
  return (
  <div>
    <li>
      <img width={100}src={bandera}/>
  <p>{nombre}</p>
  <p>{continente}</p>
    </li>
  </div>)
};

/*export class ClassClass extends React.Component {
  render() {
    return (
      <div>
      <span>{this.props.name}</span>
      <button onClick={this.props.onClose}>X</button>
      <div>
        <div>
        <span>Min</span>
        <span>{this.props.min}°</span>
        </div>
        <div>
        <span>Max</span>
        <span>{this.props.max}°</span>
        </div>
        <img src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`} alt="imagen del clima"/>
      </div>
      </div>
    )
  }
};*/