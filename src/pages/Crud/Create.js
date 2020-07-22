import React,{useState} from 'react';
import {db} from '../../firebase/firebaseConfig';

const Create = ({
    match:{
        param:{id},
    },
    history,
    match

}) =>{
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [sala, setSala] = useState('');
    const [key, setKey] = useState('');

    const Todo =db.collection('Todo');
    
    const onSubmit = (e) =>{
        e.preventDefault();

        Todo.add({
            name,
            lastname,
            sala
        }).then((docRef) =>{
            setKey('');
            setName('');
            setLastname('');
            setSala('');

        });
    }
    return(
        <>
            <form>
                <label>Nombre</label>
                <input type="text" 
                       name="nombre" 
                       value={name} 
                       onChange={e=>setName(e.target.value)}
                       placeholder="Nombre"/>
                
                <label>Apellido</label>
                <input type="text" 
                       name="apellido" 
                       value={lastname} 
                       onChange={e=>setLastname(e.target.value)}
                       placeholder="apellido"/>
                
                <label>Sala</label>
                <input type="text" 
                       name="sala" 
                       value={sala} 
                       onChange={e=>setSala(e.target.value)}
                       placeholder="sala"/>
                
                <button onClick={onSubmit} type="submit">Enviar</button>

            </form>
        </>
    );
    
}

export default Create;