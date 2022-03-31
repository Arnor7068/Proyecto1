import React, { useEffect, useState } from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/Button';
import ClientDataService from '../services/ClientDataServices';

const EditClient = ({ Id, Nombre, Apellido, Celular}) => {

    const [nombre, setNombre] = useState(Nombre);
    const [apellido, setApellido] = useState(Apellido);
    const [celular, setCelular] = useState(Celular);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const newClient = {
            nombre,
            apellido,
            celular
        }
        try {
            console.log("funcionará???", newClient);
            await ClientDataService.updateClient(Id, newClient);
            window.location = '/cliente';
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='contx'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="validation01">Nombres</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            placeholder="Nombres"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
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
                            onChange={(e) => setApellido(e.target.value)}
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
                            onChange={(e) => setCelular(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-dark">Guardar</button>
                </form>
            </div>
        </>
    )
}

export default EditClient