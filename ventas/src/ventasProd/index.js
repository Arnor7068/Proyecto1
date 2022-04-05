import React, { useEffect, useState } from 'react'
import VentasDataService from '../services/VentasServices'
import ProductDataService from '../services/productServices'

const VentasProd = ({ Id }) => {

    const [ventas, setVentas] = useState([]);
    const [x, setX] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const dt = await ProductDataService.getProduct(Id);
        setVentas(dt.data());
    }

    return (
        <div>
                        <ul className="list-group">
            <strong className='bg-light'>Detalles del producto: </strong>
                            
                                    <li className="list-group-item">
                                        <strong>Nombre: </strong>
                                        <span>{ventas.nombre}</span>
                                        <br />
                                        <strong>Precio: </strong>
                                        <span>{ventas.precio}</span>
                                        <br />
                                        <strong>Stock: </strong>
                                        <span>{ventas.stock}</span>
                                        <br />
                                        <strong>Descripción: </strong>
                                        <span>{ventas.descrip}</span>
                                        {/* <button
                                            className="btn btn-danger btn-sm float-right"
                                            onClick={() => deleteHandler(item.id)}
                                        >
                                            Eliminar
                                        </button> */}
                                        {/* <Button
                                            className="btn btn-warning btn-sm float-right mr-2" 
                                            onClick={() => handleModal(item.id, item.nombre, item.precio, item.descrip, item.stock)}
                                        >
                                            Editar
                                        </Button> */}
                                        {/* <Button
                                            className="btn btn-success btn-sm float-right mr-2" 
                                            onClick={() => handleCar(item.id)}
                                        >
                                            Add
                                        </Button> */}

                                    </li>

                               
                        </ul>
        </div>
    )
}

export default VentasProd