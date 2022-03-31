import React, { useState } from 'react'
import './add.css'
import ClientDataService from '../services/ClientDataServices'

const Add = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        const newClient = {
            nombre,
            apellido,
            celular
        }
        console.log("funcionará???", newClient);
        try {
            await ClientDataService.addClients(newClient);
            window.location = '/cliente';
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='contx'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <h3>Agregar Cliente +</h3>
                    <label htmlFor="validation01">Nombres</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nombre" 
                        placeholder="Nombres"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="validation02">Apellidos</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="precio" 
                        placeholder="Apellidos" 
                        value={apellido} 
                        onChange={ (e) => setApellido(e.target.value) }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="validation02">Teléfono</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="descrip" 
                        placeholder="Teléfonos" 
                        value={celular} 
                        onChange={ (e) => setCelular(e.target.value) }
                    />
                </div>
                <button type="submit" className="btn btn-dark">Guardar</button>
            </form>
        </div>
    )
}

export default Add