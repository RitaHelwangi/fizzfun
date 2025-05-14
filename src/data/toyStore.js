import { create } from "zustand";
import { createToy, getToyById, updateToy, deleteToy } from "./crud";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./database";

const useToyStore = create((set) => ({
  toys: [],
  loading: false,
  error: null,

  fetchToys: async () => {
    set({ loading: true, error: null });
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

  addToy: async (toy) => {
    try {
      const id = await createToy(toy);
      set((state) => ({
        toys: [...state.toys, { id, ...toy }],
      }));
    } catch (error) {
      console.error("Error adding toy:", error);
      set({ error: "Failed to add toy" });
    }
  },

  fetchToyById: async (id) => {
    try {
      const toy = await getToyById(id);
      return toy;
    } catch (error) {
      console.error("Error fetching toy:", error);
      set({ error: "Failed to fetch toy" });
    }
  },

  updateToyInStore: async (id, updatedToy) => {
    try {
      await updateToy(id, updatedToy);
      set((state) => ({
        toys: state.toys.map((toy) =>
          toy.id === id ? { ...toy, ...updatedToy } : toy
        ),
      }));
    } catch (error) {
      console.error("Error updating toy:", error);
      set({ error: "Failed to update toy" });
    }
  },

  deleteToyFromStore: async (id) => {
    try {
      await deleteToy(id);
      set((state) => ({
        toys: state.toys.filter((toy) => toy.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting toy:", error);
      set({ error: "Failed to delete toy" });
    }
  },
}));

export default useToyStore;
