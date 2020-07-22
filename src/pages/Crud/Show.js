import React,{useState, useEffect} from 'react';
import {link} from 'react-router-dom';

import {db} from '../../firebase/firebaseConfig';

const Show = () =>{
    const [usuarios, setUsuarios] = useState([]);
    
    const Todo =db.collection('Todo');

    const Todo =useRef(db.collection('Todo'));

    Todo.get().ther((docs) =>{
        if(!docs.empty){
            let usuarios =[];
            docs.forEach(docs => {
                usuarios.push(
                    {
                        key:doc.id, ...doc.data()
                    }
                )
            });
            setUsuarios(usuarios);
        }}   
    ),[]};


const Borrar =(id) =>{
    db.collection('todo').doc('id').delete().then(() => {
        console.log("Registro Eliminado");
    }).catch((error) =>{
        console.log('error en eliminar');
    });

}

return (
    <>
        <Link to="/">Lista de alumnos</Link>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Sala</th>  
            </tr>
        </table>
    </>
);

export default Show;