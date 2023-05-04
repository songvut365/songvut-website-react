import { db } from "../main";
import { doc, getDoc, collection, getDocs, query, orderBy } from "firebase/firestore";

export async function getData(collectionName: string, documentName: string) {
    const dataRef = doc(db, collectionName, documentName);
    const dataDoc = await getDoc(dataRef);

    return Promise.resolve(dataDoc.data());
}

export async function getDataArray(collectionName: string, order: string) {
    const q = query(collection(db, collectionName), orderBy(order));
    const querySnapshot = await getDocs(q);
    const allProjects = querySnapshot.docs.map((doc) => doc.data() as any);

    return Promise.resolve(allProjects)
}