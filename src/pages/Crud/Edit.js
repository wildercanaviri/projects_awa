import React,{Fragment, useState} from 'react';
import {useForm} from 'react-hook-form';
import {withRouter} from 'react-router-dom';
import  {db} from '../../firebase/firebaseConfig';
const Edit = (props) =>{
    
    const materia=props.location.state.materia;  
    const {register, errors, handleSubmit}=useForm();    
        const values={
            materia:materia.materia,
            descripcion:materia.descripcion
        }
        const[entradas, setEntradas]=useState(values);
       
        const onSubmit = async (data) => {
            console.log(data);
            await db.collection('materias').doc(materia.id).set(data);  
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
                    Volver  
            </button>   
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Materia</label>
                <input type="text" 
                       placeholder="materia"
                       className="form-control mb-2"
                       name="materia" 
                       defaultValue={materia.materia}
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

                
                <label>descripcion</label>
                <input type="text" 
                       placeholder="UserName"
                       className="form-control mb-2"
                       name="descripcion"
                       defaultValue={materia.descripcion}
                       onChange={hanleInputChange}
                       ref={register({
                        required: {value:true, message:'campo requerido'}
                                     })
                                  }
                />
                {
                    errors.descripcion &&
                    <span className="text-danger text-small d-block mb-2">
                        {errors.descripcion && errors.descripcion.message}
                    </span>
                }

                
                <label>Codigo</label>
                <input type="text" 
                       placeholder="codigo"
                       className="form-control mb-2"
                       name="codigo"
                       defaultValue={materia.codigo}
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
                
                
                <button className="btn btn-primary">Editar usuario</button>
            </form>
        </Fragment>
        
    );
}
export default withRouter(Edit);