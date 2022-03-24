import React, { useState } from 'react'
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth';
const Navbar = () => {

    const [ user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const logOut = async () => {
        await signOut(auth);
        window.location = '/login';
    }

    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {user?.email ? user.email : 'Iniciar sesión'}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><div class="dropdown-item" onClick={logOut}>Cerrar Sesión</div></li>
            </ul>
        </div>
    )
}

export default Navbar