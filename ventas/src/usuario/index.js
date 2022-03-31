import React, { useEffect, useState } from 'react'
import Edit from '../edit';
import ProductDataServices from '../services/productServices'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

const Usuario = () => {

    const [products, setProducts] = useState([]);

    const [show, setShow] = useState(false);

    const handleModal = () => {
        setShow(!show);
    }

    useEffect(() => {
        getProducts();
    },[]);

    const getProducts = async () => {
        const data = await ProductDataServices.getAllProducts();
        console.log(data.docs);
        setProducts(data.docs.map((doc) =>({ ...doc.data(), id: doc.id })))
    }

    const deleteHandler = async (id) => {
        await ProductDataServices.deleteProduct(id);
        getProducts();
    }

    return (
        <div>
            <div className="container mb-2">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Lista de Tareas</h3>
                        <ul className="list-group">
                            {
                                products.map(item => (
                                    <li className="list-group-item" key={item.id}>
                                        <span>{item.nombre}</span>
                                        {' '}
                                        <span>{item.precio} bs</span>
                                        <button
                                            className="btn btn-danger btn-sm float-right"
                                            onClick={(e) => deleteHandler(item.id)}
                                        >
                                            Eliminar
                                        </button>
                                        <Button
                                            className="btn btn-warning btn-sm float-right mr-2" onClick={handleModal}
                                            /* onClick={(e) => getProductId(item.id)} */
                                        >
                                            Editar
                                        </Button>
                                        
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-md-6">
                        formulario
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Edit close={handleModal} state={show} xxx={"hola"} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Usuario