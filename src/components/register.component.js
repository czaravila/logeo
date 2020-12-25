import axios from 'axios';
import React, {Component} from 'react';

export default class Register extends Component{

    state = {};

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            password_confirm: this.confirmPassword
        };
        
        axios.post('register', data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                this.setState({
                    message: err.response.data.message
                })
            }
        )
    };

    render(){

        let error = '';

        if(this.state.message){
            error = (
                <div className="alert alert-danger" role="alert">
                    {this.state.message}
                </div>
            )
        }

        return(
            <form onSubmit={this.handleSubmit}>
                {error}
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" placeholder="Nombre"
                        onChange={e => this.firstName = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Apellido</label>
                    <input type="text" className="form-control" placeholder="Apellido"
                        onChange={e => this.lastName = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email"
                        onChange={e => this.email = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Contraseña"
                        onChange={e => this.password = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Confirmar contraseña</label>
                    <input type="password" className="form-control" placeholder="Confirmar contraseña"
                        onChange={e => this.confirmPassword = e.target.value}/>
                </div>

                <button className="btn btn-primary btn-block">Sign Up</button>
            </form>
        )
    }
}