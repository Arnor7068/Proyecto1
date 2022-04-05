import React, { useEffect, useState } from 'react'
import EditClient from '../editClient'
import ClientDataServices from '../services/ClientDataServices'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import AddClient from '../AddClient';
import Swal from 'sweetalert2'

const Cliente = () => {

    const [Clients, setClients] = useState([]);

    const [show, setShow] = useState(false);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState("");
    const [id, setId] = useState("");
    const [nit, setNit] = useState("");


    const handleModal = (idx, name, last, cel, nit) => {
        setShow(!show);
        setId(idx);
        setNombre(name);
        setApellido(last);
        setCelular(cel);
        setNit(nit);
    }

    const modalXx = () => {
        setShow(!show)
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
        await Swal.fire({
            title: 'Eliminar',
            text: "Estás seguro que deseas eliminar este producto?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
                ClientDataServices.deleteClient(id);
                getClients();
              Swal.fire(
                'Eliminado!',
                'El producto se ha eliminado!',
                'success'
              )
            }
          })
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
                                        <strong>Nit: </strong>
                                        <span>{item.nit}</span>
                                        <br />
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
                                            onClick={() => handleModal(item.id, item.nombre, item.apellido, item.celular, item.nit)}
                                        >
                                            Editar
                                        </Button>
                                        
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <AddClient GetClients={getClients} />
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditClient Id={id} Nombre={nombre} Apellido={apellido} Celular={celular} Nit={nit} GetClients={getClients} ModalXx={modalXx} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Cliente