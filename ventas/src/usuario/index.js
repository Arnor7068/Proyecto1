import React, { useEffect, useState } from 'react'
import ProductDataServices from '../services/productServices'

const Usuario = () => {

    const [products, setProducts] = useState([]);

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
                                        <button
                                            className="btn btn-warning btn-sm float-right mr-2"
                                            /* onClick={(e) => getProductId(item.id)} */
                                        >
                                            Editar
                                        </button>
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
        </div>
    )
}

export default Usuario