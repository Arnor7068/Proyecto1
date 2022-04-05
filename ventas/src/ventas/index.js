import React, { useEffect, useState } from 'react'
import VentasDataService from '../services/VentasServices'
import VentasCliente from '../ventasCliente';
import VentasProd from '../ventasProd';

const Ventas = () => {

    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const data = await VentasDataService.getAllVentas();
        console.log(data.docs);
        setVentas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    return (
        <div className='col-md-6'>
            <h3 className=''>Historial de ventas</h3>
            <ul className="list-group">
                {
                    ventas.map(item => (
                        <li className="list-group-item" key={item.id}>
                            <div className='row' >
                                <div className='col-md-6' >
                                    <strong>Cantidad: </strong>
                                    <span>{item.cantidad}</span>
                                    <br />
                                    <strong>Precio: </strong>
                                    <span>{item.precio}</span>
                                    <br />
                                    <strong>Total de la venta: </strong>
                                    <span>{item.total}</span>
                                    <br />
                                    <strong>Id de Venta: </strong>
                                    <span>{item.venta}</span>

                                </div>
                                <div className='col-md-6' >
                                    <VentasCliente Id={item.cliente} />
                                </div>
                            </div>
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
                            <VentasProd Id={item.producto} />
                        </li>

                    ))
                }
            </ul>
        </div>
    )
}

export default Ventas