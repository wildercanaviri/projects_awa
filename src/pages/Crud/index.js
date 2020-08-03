import React,{Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import  {db} from '../../firebase/firebaseConfig';

const Index = (props) =>{
    const [materias, setMaterias] = React.useState([]);
    
    //recuperar datos del firebase
    React.useEffect(() => {
        const fetchData = async () => {
          const data = await db.collection("materias").get();
          setMaterias(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        fetchData();
      }, []);
    //fin recuperar datos del fireabase,

    //eliminar un registro de la tabla
    const eliminar = async (id) => {
        try {
          await db.collection('materias').doc(id).delete()
          const arrayFiltrado = materias.filter(item => item.id !== id)
          setMaterias(arrayFiltrado)
        } catch (error) {
          console.log(error)
        }
    }
    //eliminar un registro de la tabla
    

    return(
        <Fragment>       
            <button className="btn btn-primary"
                     onClick={()=>props.history.push('/admin/materias/create')}>
                    Crear Materia
            </button>                                      
                                      
            <div className="container">
                    <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>descripcion</th>
                            <th>codigo</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {    
                            materias.map(materia =>(
                              
                                <tr key={materia.id}>
                                    <td>{materia.materia}</td>
                                    <td>{materia.descripcion}</td>
                                    <td>{materia.codigo}</td>
                                    <td>
  
                                        <button onClick={()=>props.history.push('/admin/materias/edit',{materia})} >Edit</button>                                      
                                      
                                        <button onClick={() => eliminar(materia.id)}>Delete</button>
                                        
                                    </td>
                                </tr>    
                            ))
                        }

                    </tbody>
                </table>
            </div>        

        </Fragment>
        );
}
export default withRouter(Index);