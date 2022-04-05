import {db} from "../firebase-config";
import { collection, getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const productCollectionRef = collection(db, "producto");
class ProductDataService {

    addProducts = (newProduct) => {
        return addDoc(productCollectionRef, newProduct);
    }
    
    updateProduct = (id, updatedProduct) => {
        const productDoc = doc(db, "producto", id);
        return updateDoc(productDoc, updatedProduct);
    }
    
    deleteProduct = (id) => {
        const productDoc = doc(db, "producto", id);
        return deleteDoc(productDoc);
    }

    getAllProducts = () => {
        return getDocs(productCollectionRef)
    }

    getProduct = (id) => {
        const productDoc = doc(db, "producto", id)
        return getDoc(productDoc);
    }

}

export default new ProductDataService();


