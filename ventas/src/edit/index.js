import React, { useEffect, useState } from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/Button';
import ProductDataServices from '../services/productServices';

const Edit = ({ Id, Nombre, Precio, Descrip }) => {

    
    const [nombre, setNombre] = useState(Nombre);
    const [precio, setPrecio] = useState(Precio);
    const [descrip, setDescrip] = useState(Descrip);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const newProduct = {
            nombre,
            precio,
            descrip
        }
        try {
            await ProductDataServices.updateProduct(Id, newProduct);
            window.location = '/usuario';
            console.log("funcionará???", Id, newProduct);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='contx'>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-dark">Guardar</button>
            </form>
        </div>
        </>
    )
}

export default Edit