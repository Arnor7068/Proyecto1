import {db} from "../firebase-config";
import { collection, getDocs, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const clientCollectionRef = collection(db, "clientes");
class ClientDataService {

    addClients = (newClient) => {
        return addDoc(clientCollectionRef, newClient);
    }
    
    updateClient = (id, updatedClient) => {
        const clientDoc = doc(db, "clientes", id);
        return updateDoc(clientDoc, updatedClient);
    }
    
    deleteClient = (id) => {
        const clientDoc = doc(db, "clientes", id);
        return deleteDoc(clientDoc);
    }

    getAllClients = () => {
        return getDocs(clientCollectionRef)
    }

    getClient = (id) => {
        const clientDoc = doc(db, "clientes", id)
        return getDocs(clientDoc);
    }

}

export default new ClientDataService();


