import { create } from "zustand";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./database";

const useToyStore = create((set) => ({
  toys: [],
  loading: false,
  error: null,

  fetchToys: async () => {
    set({ toys: [], loading: true, error: null }); // Clear the toys array before fetching
    try {
      const snapshot = await getDocs(collection(db, "toys"));
      const toys = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      set({ toys, loading: false });
    } catch (error) {
      console.error("Error fetching toys:", error);
      set({ error: "Failed to load toys", loading: false });
    }
  },
}));

export default useToyStore;
