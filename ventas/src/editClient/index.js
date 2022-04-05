import React, { useEffect, useState } from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/Button';
import ClientDataService from '../services/ClientDataServices';
import Swal from 'sweetalert2'

const EditClient = ({ Id, Nombre, Apellido, Celular, Nit, GetClients, ModalXx}) => {

    const [nombre, setNombre] = useState(Nombre);
    const [apellido, setApellido] = useState(Apellido);
    const [celular, setCelular] = useState(Celular);
    const [nit, setNit] = useState(Nit);

    const handleSubmit = async(e) => {  
        await Swal.fire({
            title: 'Guardar cambios?',
            text: "Está seguro que desea realizar esta acción?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, guardar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                e.preventDefault();

        const newClient = {
            nombre,
            apellido,
            celular,
            nit
        }
        try {
            console.log("funcionará???", newClient);
            ClientDataService.updateClient(Id, newClient);
            ModalXx();
            GetClients();
        } catch (error) {
            console.log(error);
        }
                
        Swal.fire({
            
            icon: 'success',
            title: 'Se ha modificado con exito',
            showConfirmButton: false,
            timer: 1000
          })
            }
          })
    }

    return (
        <>
            <div className='contx'>
                <form >
                    <div className="form-group">
                        <label htmlFor="validation01">Nit o Carnet</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nit"
                            placeholder="Nit o carnet"
                            value={nit}
                            onChange={(e) => setNit(e.target.value)}
                        />
                    </div>
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
                    <button onClick={handleSubmit} type="button" className="btn btn-dark">Guardar</button>
                </form>
            </div>
        </>
    )
}

export default EditClient