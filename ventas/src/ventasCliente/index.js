import React, { useEffect, useState } from 'react'
import VentasDataService from '../services/VentasServices'
import ProductDataService from '../services/productServices'
import ClientDataServices from '../services/ClientDataServices'

const VentasCliente = ({ Id }) => {

    const [ventas, setVentas] = useState([]);
    const [x, setX] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const dt = await ClientDataServices.getClient(Id);
        setVentas(dt.data());
    }

    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxx", ventas);

    return (
        <div>
                        <ul className="list-group">
            <strong className='bg-light'>Detalles del cliente: </strong>
                            {ventas.nombre
                            ?
                                    <li className="list-group-item">
                                        <strong>Nombre: </strong>
                                        <span>{ventas.nombre}</span>
                                        <br />
                                        <strong>Apellido: </strong>
                                        <span>{ventas.apellido}</span>
                                        <br />
                                        <strong>Celular: </strong>
                                        <span>{ventas.celular}</span>
                                        <br />
                                        <strong>Nit o Carnet: </strong>
                                        <span>{ventas.nit}</span>
                                        

                                    </li>
                            :< >
                            <li className="list-group-item">
                                        <strong>Nombre: </strong>
                                        <span> María </span>
                                        <br />
                                        <strong>Apellido: </strong>
                                        <span> Gonzales </span>
                                        <br />
                                        <strong>Celular: </strong>
                                        <span> 558255 </span>
                                        <br />
                                        <strong>Nit o Carnet: </strong>
                                        <span> 212144 </span>
                                        

                                    </li>
                            </>
                            }

                               
                        </ul>
        </div>
    )
}

export default VentasCliente