import React,{Fragment, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import  {db} from '../../firebase/firebaseConfig';
const Create = (props) =>{
        const {register, errors, handleSubmit}=useForm();

        const values={
            materia:'',
            descripcion:'',
            codigo:''
        }
        
        const[entradas, setEntradas]=useState(values);
       
        const onSubmit = async (data) => {
           await db.collection('materias').doc().set(data);  
            console.log('registro agregado');
            setEntradas('');
            props.history.goBack();
        }   

        const hanleInputChange = e =>{
            const{name, value} = e.target;
            setEntradas({...entradas, [name]:value}) 
        }

    return(
        <Fragment>
             <button className="btn btn-primary"
                     onClick={()=>props.history.goBack()}>
                    Edit
            </button>   

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Materia</label>                
                
                <input type="text" 
                       placeholder="materia"
                       className="form-control mb-2"
                       name="materia" 
                       onChange={hanleInputChange}
                       ref={register({
                           required: {value:true, message:'campo requerido'}
                                    })
                            }
                       />
                      
                {
                    errors.materia &&
                    <span className="text-danger text-small d-block mb-2">
                        {errors.materia && errors.materia.message}
                    </span>
                }
                              
                <label>Descripcion</label>
                <input type="text" 
                       placeholder="descripcion"
                       className="form-control mb-2"
                       name="descripcion"
                       onChange={hanleInputChange}
                       ref={register({
                        required: {value:true, message:'campo requerido'}
                                     })
                                  }
                />
                
                <label>Codigo</label>
                <input type="text" 
                       placeholder="codigo"
                       className="form-control mb-2"
                       name="codigo"
                       onChange={hanleInputChange}
                       ref={register({
                        required: {value:true, message:'campo requerido'}
                                     })
                                  }
                />

                {
                    errors.codigo &&
                    <span className="text-danger text-small d-block mb-2">
                        {errors.codigo && errors.codigo.message}
                    </span>
                }
                
                <button className="btn btn-primary">Agregar Materia</button>
            </form>
        </Fragment>
        
    );
}
export default withRouter(Create);