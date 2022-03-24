/* import React from 'react'
import {app} from '../firebase-config'

const Home = () => {

    React.useEffect(() => {

        const obtenerDatos = async () => {
            const db = app.firestore()
            try {
                const data = await db.collection('producto').get()
                const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
                console.log(arrayData)      
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos()
    
    }, [])

    return (
        <div>
            <h1>HOME</h1>
        </div>
    )
}

export default Home */