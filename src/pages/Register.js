import React from 'react'

class Register extends React.Component{
    constructor(args){
        super(args)
        this.state = {

        }
    }
    render(){
        return(
        <div>
           <label htmlFor= "name">Nombre</label>
          <input name="name" ide="name" type="text" />
          <label htmlFor= "lastname">Apellido</label>
          <input name="lastname" ide="lastname" type="text" />
        </div>
        )
    }
}
 export default Register