import React, { useEffect, useState } from 'react';
import ProductDataServices from '../services/productServices';
import Swal from 'sweetalert2'

const Edit = ({ Id, Nombre, Precio, Descrip, Stock, GetProducts, ModalXx }) => {

    
    const [nombre, setNombre] = useState(Nombre);
    const [precio, setPrecio] = useState(Precio);
    const [descrip, setDescrip] = useState(Descrip);
    const [stock, setStock] = useState(Stock);

    const handleSubmit = async(e) => {
        
        await Swal.fire({
            title: 'Guardar cambios?',
            text: "Está seguro que desea realizar esta acción?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, guardar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                e.preventDefault();

        const newProduct = {
            nombre,
            precio,
            descrip,
            stock
        }
        try {
            ProductDataServices.updateProduct(Id, newProduct);
            ModalXx();
            GetProducts();
            console.log("funcionará???", Id, newProduct);
        } catch (error) {
            console.log(error);
        }
                
        Swal.fire({
            
            icon: 'success',
            title: 'Se ha modificado con exito',
            showConfirmButton: false,
            timer: 1000
          })
            }
          })
        
    }

    return (
        <>
            <div className='contx'>
            <form >
                <div className="form-group">
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
                        placeholder="stock" 
                        value={stock} 
                        onChange={ (e) => setStock(e.target.value) }
                    />
                </div>
                <button onClick={handleSubmit} type="button" className="btn btn-dark">Guardar</button>
            </form>
        </div>
        </>
    )
}

export default Edit