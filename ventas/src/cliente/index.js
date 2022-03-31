import React, { useEffect, useState } from 'react'
import EditClient from '../editClient'
import ClientDataServices from '../services/ClientDataServices'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import AddClient from '../AddClient';

const Cliente = () => {

    const [Clients, setClients] = useState([]);

    const [show, setShow] = useState(false);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState("");
    const [id, setId] = useState("");


    const handleModal = (idx, name, last, cel) => {
        setShow(!show);
        setId(idx);
        setNombre(name);
        setApellido(last);
        setCelular(cel);
    }

    useEffect(() => {
        getClients();
    },[]);

    const getClients = async () => {
        const data = await ClientDataServices.getAllClients();
        console.log(data.docs);
        setClients(data.docs.map((doc) =>({ ...doc.data(), id: doc.id })))
    }

    const deleteHandler = async (id) => {
        await ClientDataServices.deleteClient(id);
        getClients();
    }

    return (
        <div>
            <div className="container mb-2">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Lista de Clientes</h3>
                        <ul className="list-group">
                            {
                                Clients.map(item => (
                                    <li className="list-group-item" key={item.id}>
                                        <strong>Nombre: </strong>
                                        <span>{item.nombre}</span>
                                        {' '}
                                        <span>{item.apellido} </span> <br />
                                        <strong>Celular: </strong>
                                        <span>{item.celular} </span>
                                        <button
                                            className="btn btn-danger btn-sm float-right"
                                            onClick={(e) => deleteHandler(item.id)}
                                        >
                                            Eliminar
                                        </button>
                                        <Button
                                            className="btn btn-warning btn-sm float-right mr-2"
                                            onClick={() => handleModal(item.id, item.nombre, item.apellido, item.celular)}
                                        >
                                            Editar
                                        </Button>
                                        
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <AddClient />
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditClient Id={id} Nombre={nombre} Apellido={apellido} Celular={celular} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Cliente