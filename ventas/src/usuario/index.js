import React, { useEffect, useState } from 'react'
import Edit from '../edit';
import ProductDataServices from '../services/productServices'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Add from '../add';

const Usuario = () => {

    const [products, setProducts] = useState([]);

    const [show, setShow] = useState(false);

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descrip, setDescrip] = useState("");
    const [id, setId] = useState("");

    const handleModal = (idx, name, price, desc) => {
        setShow(!show);
        setId(idx);
        setNombre(name);
        setPrecio(price);
        setDescrip(desc);
    }

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const data = await ProductDataServices.getAllProducts();
        console.log(data.docs);
        setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
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
                        <h3>Lista de Productos</h3>
                        <ul className="list-group">
                            {
                                products.map(item => (
                                    <li className="list-group-item" key={item.id}>
                                        <strong>Nombre: </strong>
                                        <span>{item.nombre}</span>
                                        <br />
                                        <strong>Precio: </strong>
                                        <span>{item.precio}</span>
                                        <br />
                                        <strong>Descripción: </strong>
                                        <span>{item.descrip}</span>
                                        <button
                                            className="btn btn-danger btn-sm float-right"
                                            onClick={(e) => deleteHandler(item.id)}
                                        >
                                            Eliminar
                                        </button>
                                        <Button
                                            className="btn btn-warning btn-sm float-right mr-2" 
                                            onClick={() => handleModal(item.id, item.nombre, item.precio, item.descrip)}
                                        >
                                            Editar
                                        </Button>

                                    </li>

                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <Add />
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Edit Id={id} Nombre={nombre} Precio={precio} Descrip={descrip} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Usuario