import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import VentasDataService from '../services/VentasServices'
import ProductDataService from '../services/productServices'

const FormModal = forwardRef(({ Car, totalItem, setTotalItem, Random, ClientId }, ref) => {

    const [cant, setCant] = useState(1);
    const [x, setX] = useState([]);
    const [total, setTotal] = useState(0);
    const [venta, setVenta] = useState(0);
    const [cliente, setCliente] = useState('86VugZ8w85H6rAEFS9qI');
    const [producto, setProducto] = useState("");
    const [cantidad, setCantidad] = useState(1);
    const [precio, setPrecio] = useState(0);

    const handleVenta = () => {
        
        const newVenta = {
            venta,
            cliente,
            producto,
            cantidad,
            precio,
            total
        }

        try {
            VentasDataService.addVenta(newVenta)
            .then(() => {
                console.log("ver esto", newVenta);
                window.location = '/ventas';
            })
        } catch (error) {
            console.log(error);
        }
    }
    useImperativeHandle(ref, () => ({ handleVenta }));

    const getOneProduct = async () => {
        const dt = await ProductDataService.getProduct(Car);
        setX(dt.data());
        setProducto(Car);
    }
    
    const carga = (e) => {
        setTotal(x.precio * e.target.value);
        setCant(e.target.value);
        setTotalItem(totalItem + (e.target.value * x.precio))
        setPrecio(x.precio);
        setCantidad(e.target.value)
        setVenta(Random);
        
    }
    
    useEffect(() => {
        getOneProduct();
        
    }, []);

    return (
        <>
                
                    <div className="form-group">
                        <strong>producto: </strong>
                        <span> {x.nombre} </span>
                        <br />
                        <strong>precio por unidad: </strong>
                        <span>{x.precio} bs</span>
                        <br />
                        <div className='row'>
                            <div className='col-md-6'>
                                <strong>Cantidad: </strong>
                            </div>
                            <div className='col-md-6'>
                                <input
                                    type="number"
                                    className="form-control form-control-sm float-right"
                                    id="nombre"
                                    placeholder="1"
                                    value={cant}
                                    onChange={(e) => carga(e)}
                                />
                            </div>
                        </div>
                        <strong>Costo Total: </strong>
                        <span> {cant * x.precio} bs </span>
                        <br />
                    </div>
                    <hr />
        </>
    )
})

export default FormModal