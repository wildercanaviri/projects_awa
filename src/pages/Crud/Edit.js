import React,{useState, useEffect, useRef} from 'react';
import {link} from 'react-router-dom';

import {db} from '../../firebase/firebaseConfig';

const Edit = () =>{
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [sala, setSala] = useState('');
    const [key, setKey] = useState('');

    const TodoRef =useRef(db.collection('Todo'));
    

    const TodoRef =useRef(db.collection('Todo'));

    useEffect(() =>{
        const Todo = TodoRef.current;
        Todo.doc(id)
        .get()
        .then((doc) =>{
            if(doc.exists){
                const {name, lastname, sala} = doc.data;
                setKey(doc.id);
                setName(name);
                setLastname(lastname);
                setSala(sala);
            }else{
                console.log('no encontrado');
            }
        });
    
    }, [id]);




    const onSubmit = () =>{
        
        const Todo = TodoRef.current;
        const updateRef=Todo.doc(key);
        updateRef
        .set({
            name,
            lastname,
            sala
        })
        .then((docRef) =>{
            setKey('');
            setName('');
            setLastname('');
            setSala('');
            history.push('/show/' + math.params.id);
        })
        .catch((error) =>{
            console.log('error al editar');
        });
    }
    return(
        <>
            <link to={'show/$key'}>Lista de alumnos</link>
            <form>
                <label htmlFor={"name"}>Nombre</label>
                <input type="text" 
                       name="nombre" 
                       value={name} 
                       onChange={e=>setName(e.target.value)}
                       placeholder="Nombre"/>
                
                <label htmlFor={"lastname"}>Apellido</label>
                <input type="text" 
                       name="apellido" 
                       value={lastname} 
                       onChange={e=>setLastname(e.target.value)}
                       placeholder="apellido"/>
                
                <label htmlFor={"sala"}>Sala</label>
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

export default Edit;