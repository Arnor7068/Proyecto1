import { async } from '@firebase/util';
import React, { createRef, useEffect, useState } from 'react'
import FormModal from '../formModal';
import ClientDataServices from '../services/ClientDataServices';

const ModalCarrito = ({ Car }) => {

    const [clients, setClients] = useState([]);
    const [client, setClient] = useState([]);
    const [clientId, setClientId] = useState("");
    const [totalItem, setTotalItem] = useState(0);
    const [random, setRandom] = useState(0);
    const childRef = createRef();
    
    
    useEffect(() => {
        getClients();
        rand();
    }, []);

    const rand = () => {
        const min = 1;
        const max = 1000000;
        const randm = min + Math.floor((Math.random() * (max - min)));
        setRandom(randm);
    }

    const getClients = async () => {
        const data = await ClientDataServices.getAllClients();
        console.log(data.docs);
        setClients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const handleChild = async () => {
        childRef.current.handleVenta();
    }
   


    const handleChange = async (e) => {
        const id = e.target.value;
        const dt = await ClientDataServices.getClient(id);
        setClient(dt.data());
        setClientId(id);
    }

    console.log("random!!!!!!!!!!!!!!!!!!!!", random);

    return (
        <>
            <div className='contx'>
                <div className='row'>
                    <div className='col-md-6'>
                        <strong>Nit o Carnet: </strong>
                    </div>
                    <div className='col-md-6'>
                        <select className="custom-select form-control-sm" id="inlineFormCustomSelectPref" onChange={(e) => handleChange(e)}>
                            {clients.map(cli => (
                                <option key={cli.id} value={cli.id}> {cli.nit} </option>
                            ))}
                        </select>
                    </div>
                </div>
                <strong>Nombre: </strong>
                <span>{client.nombre} {client.apellido} </span>
                <br />
                <strong>Celular: </strong>
                <span>{client.celular}</span>
                <br /> <hr />
                <form className='border p-1 m-1 rounded'>
                {Car.map(item => (
                    <FormModal ref={childRef} key={item} Car={item} totalItem={totalItem} setTotalItem={setTotalItem} Random={random} ClientId={clientId} />
                ))
                }
                </form>
                <button onClick={handleChild} type="submit" className="btn btn-dark float-right">Finalizar compra</button>
            </div>
        </>
    )
}

export default ModalCarrito