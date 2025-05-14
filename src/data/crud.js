import {
  collection,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./database";

const toysCollection = collection(db, "toys");

const createToy = async (toy) => {
  try {
    const docRef = await addDoc(toysCollection, toy);
    console.log("Toy added with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding toy:", error);
    throw error;
  }
};

const getToyById = async (id) => {
  try {
    const docRef = doc(db, "toys", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No such toy!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching toy:", error);
    throw error;
  }
};

const updateToy = async (id, updatedToy) => {
  try {
    const docRef = doc(db, "toys", id);
    await updateDoc(docRef, updatedToy);
    console.log("Toy updated:", id);
  } catch (error) {
    console.error("Error updating toy:", error);
    throw error;
  }
};

const deleteToy = async (id) => {
  try {
    const docRef = doc(db, "toys", id);
    await deleteDoc(docRef);
    console.log("Toy deleted:", id);
  } catch (error) {
    console.error("Error deleting toy:", error);
    throw error;
  }
};

export { createToy, getToyById, updateToy, deleteToy };
