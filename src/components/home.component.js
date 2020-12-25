import React, {Component} from 'react';

export default class Home extends Component{
    

    
    render(){
        if(this.props.user){
            return(
                <h2>Hola {this.props.user.first_name} {this.props.user.last_name}</h2>
            )
        }
        return(
            <h2>No has iniciado sesion</h2>
        )
    }

}