import React, { Component } from "react";
import Table from 'react-bootstrap/Table';


export default class ActivosList extends Component {
  
  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>Name</th>
          <th>count</th>
          <th>Stock</th>
          <th>price</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </Table>
    </div>);
  }
}