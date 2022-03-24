import React, { useState } from 'react'
import './add.css'
import ProductDataServices from '../services/productServices'

const Add = () => {

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descrip, setDescrip] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        const newProduct = {
            nombre,
            precio,
            descrip
        }
        console.log("funcionará???", newProduct);
        try {
            await ProductDataServices.addProducts(newProduct);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='contx'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="validation01">First name</label>
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
                    <label htmlFor="validation02">City</label>
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
                <button type="submit" className="btn btn-dark">Guardar</button>
            </form>
        </div>
    )
}

export default Add