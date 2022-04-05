import React, { useState } from 'react'
import './add.css'
import ProductDataServices from '../services/productServices'
import Swal from 'sweetalert2'

const Add = ({GetProducts}) => {

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descrip, setDescrip] = useState("");
    const [stock, setStock] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        const newProduct = {
            nombre,
            precio,
            descrip,
            stock
        }
        try {
            ProductDataServices.addProducts(newProduct)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Se ha guardado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  GetProducts();
                  setNombre("");
                  setPrecio("");
                  setDescrip("");
                  setStock("");
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='contx'>
            <form>
                <div className="form-group">
                    <h3>Agregar +</h3>
                    <label htmlFor="validation01">Nombre del producto</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nombre" 
                        placeholder="nombre" 
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="validation02">Precio en Bolivianos</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="precio" 
                        placeholder="precio" 
                        value={precio} 
                        onChange={ (e) => setPrecio(e.target.value) }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="validation02">Descripción</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="descrip" 
                        placeholder="descripción" 
                        value={descrip} 
                        onChange={ (e) => setDescrip(e.target.value) }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="validation02">Stock</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="stock" 
                        placeholder="Stock" 
                        value={stock} 
                        onChange={ (e) => setStock(e.target.value) }
                    />
                </div>
                <button onClick={handleSubmit} type="button" className="btn btn-dark">Guardar</button>
            </form>
        </div>
    )
}

export default Add