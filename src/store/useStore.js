import { create } from "zustand";
import { supabase } from "../services/supabaseClient";

const useStore = create((set) => ({
  students: [],
  isLoading: false,
  error: null,

  fetchStudents: async () => {
    set({ isLoading: true, error: null }); // Reset error state
    try {
      const { data, error } = await supabase.from("studentdata").select("*");
      if (error) throw error;
      set({ students: data, isLoading: false });
    } catch (error) {
      console.error("Error fetching students:", error.message);
      set({ error: error.message, isLoading: false });
    }
  },

  addStudent: async (newStudent) => {
    set({ isLoading: true, error: null }); // Manage loading state and reset error
    try {
      const { data, error } = await supabase.from("studentdata").insert([newStudent]);
      if (error) throw error;
      set((state) => ({
        students: [...state.students, ...(Array.isArray(data) ? data : [])],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error adding student:", error.message);
      set({ error: error.message, isLoading: false });
    }
  },

  updateStudent: async (id, updatedData) => {
    set({ isLoading: true, error: null }); // Manage loading state and reset error
    try {
      const { error } = await supabase.from("studentdata").update(updatedData).eq("id", id);
      if (error) throw error;
      set((state) => ({
        students: state.students.map((student) =>
          student.id === id ? { ...student, ...updatedData } : student
        ),
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error updating student:", error.message);
      set({ error: error.message, isLoading: false });
    }
  },
  

  deleteStudent: async (id) => {
    set({ isLoading: true, error: null }); // Manage loading state and reset error
    try {
      const { error } = await supabase.from("studentdata").delete().eq("id", id);
      if (error) throw error;
      set((state) => ({
        students: state.students.filter((student) => student.id !== id),
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error deleting student:", error.message);
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useStore;
