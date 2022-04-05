import React, { useState } from 'react'
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth';
const Navbar = () => {

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const logOut = async () => {
        await signOut(auth);
        window.location = '/login';
    }

    /* const producto = async () => {
        await signOut(auth);
        window.location = '/usuario';
    } */

    /* const cliente = async () => {
        await signOut(auth);
        window.location = '/cliente';
    } */

    !user? console.log("no hay usuario"): console.log("HAY USUARIO");
    return (



        <nav className="navbar mb-3 navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/usuario">Mi Tienda</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {!user
                    ?
                    <></>
                    :
                    <>
                    <li className="nav-item bg-dark">
                        <a className="nav-link" href="/usuario">Producto <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item bg-dark">
                        <a className="nav-link" href="/cliente">Cliente <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item bg-dark">
                        <a className="nav-link" href="/ventas">Ventas <span className="sr-only">(current)</span></a>
                    </li>
                    </>
                    }
                </ul>

                
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {user?.email ? user.email : 'Iniciar sesión'}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><div className="dropdown-item" onClick={logOut}>Cerrar Sesión</div></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar