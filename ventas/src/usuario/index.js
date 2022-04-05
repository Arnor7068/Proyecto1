import React, { useEffect, useState } from 'react'
import Edit from '../edit';
import ProductDataServices from '../services/productServices'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Add from '../add';
import { async } from '@firebase/util';
import ModalCarrito from '../modalCarrito';
import Swal from 'sweetalert2'

const Usuario = () => {

    const [products, setProducts] = useState([]);
    const [car, setCar] = useState([]);

    const [show, setShow] = useState(false);
    const [carShow, setCarShow] = useState(false);

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descrip, setDescrip] = useState("");
    const [id, setId] = useState("");
    const [stock, setStock] = useState("");

    const handleModal = (idx, name, price, desc, stk) => {
        setShow(!show);
        setId(idx);
        setNombre(name);
        setPrecio(price);
        setDescrip(desc);
        setStock(stk);
    }

    const modalXx = () => {
        setShow(!show)
    }

    const handleCar = async (addCar) => {
        if(!setCar(car => [...car, addCar])){

            Swal.fire({
                icon: 'success',
                title: 'Excelente',
                text: 'Producto agregado',
              });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Algo salió mal',
                });
        }
    }
    console.log("xxxxxxxx", car);

    const handleFinish = async (addCar) => {
        setCarShow(!carShow);
        console.log("SSSSSSSSS");
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
                ProductDataServices.deleteProduct(id);
                getProducts();
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
                        <h3>Lista de Productos</h3>
                        <Button
                            className="btn btn-success btn-sm mr-2"
                            onClick={handleFinish}
                        >
                            Terminar
                        </Button>
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
                                        <br />
                                        <strong>Stock: </strong>
                                        <span>{item.stock}</span>
                                        <button
                                            className="btn btn-danger btn-sm float-right"
                                            onClick={() => deleteHandler(item.id)}
                                        >
                                            Eliminar
                                        </button>
                                        <Button
                                            className="btn btn-warning btn-sm float-right mr-2" 
                                            onClick={() => handleModal(item.id, item.nombre, item.precio, item.descrip, item.stock)}
                                        >
                                            Editar
                                        </Button>
                                        <Button
                                            className="btn btn-success btn-sm float-right mr-2" 
                                            onClick={() => handleCar(item.id)}
                                        >
                                            Add
                                        </Button>

                                    </li>

                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <Add GetProducts={getProducts} />
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Edit Id={id} Nombre={nombre} Precio={precio} Descrip={descrip} Stock={stock} GetProducts={getProducts} ModalXx={modalXx} />
                </Modal.Body>
            </Modal>

            <Modal show={carShow} onHide={handleFinish}>
                <Modal.Header closeButton>
                    <Modal.Title>Carrito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ModalCarrito Car={car} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Usuario