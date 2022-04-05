import {db} from "../firebase-config";
import { collection, getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const ventaCollectionRef = collection(db, "ventas");
class VemtasDataService {

    addVenta = (newVenta) => {
        return addDoc(ventaCollectionRef, newVenta);
    }
    
    updateVenta = (id, updatedVenta) => {
        const ventaDoc = doc(db, "ventas", id);
        return updateDoc(ventaDoc, updatedVenta);
    }
    
    deleteVenta = (id) => {
        const ventaDoc = doc(db, "ventas", id);
        return deleteDoc(ventaDoc);
    }

    getAllVentas = () => {
        return getDocs(ventaCollectionRef)
    }

    getVenta = (id) => {
        const ventaDoc = doc(db, "ventas", id)
        return getDoc(ventaDoc);
    }

}

export default new VemtasDataService();


