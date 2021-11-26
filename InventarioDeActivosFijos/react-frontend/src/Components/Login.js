import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import {ReactComponent as Logo} from '../logo.svg'

export default class Login extends Component {
    render() {
        return (
            <div class="min-vh-100 w-100">
                <div class="vh-100 row align-items-center justify-content-center">   
                    <div class="col-auto">
                        <Logo  width="270"/>
                    </div>         
                    <div class="form col-auto">
                        <h2 className="fw-bold text-center p-5 mt-auto">INVENTARIO DE ACTIVOS FIJOS</h2>
                        <div className="mb-4 form-group row">
                            <label for="usuario" className="col-sm-2 col-form-label">Usuario:</label>
                            <div class="col-sm-10">
                                <input type="text" className="form-control"  name="usuario" placeholder="Usuario" />
                            </div>
                        </div>
                        <div className="mb-4 form-group row">
                            <label for="password" className="col-sm-2 col-form-label">Contraseña:</label>
                            <div class="col-sm-10">
                                <input type="password" className="form-control" name="Password" placeholder="Contraseña" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary m-xxl-5">Iniciar Sesión</button>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}
