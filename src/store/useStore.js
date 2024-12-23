import { create } from "zustand";
import { supabase } from "../services/supabaseClient";

const useStore = create((set) => ({
  students: [],
  isLoading: false,
  error: null,

  fetchStudents: async () => {
    set({ isLoading: true });
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
    try {
      const { data, error } = await supabase.from("studentdata").insert([newStudent]);
      if (error) throw error;
      set((state) => ({ students: [...state.students, ...data] }));
    } catch (error) {
      console.error("Error adding student:", error.message);
      set({ error: error.message });
    }
  },

  updateStudent: async (id, updatedData) => {
    try {
      const { data, error } = await supabase.from("studentdata").update(updatedData).eq("id", 15);
      if (error) throw error;
      set((state) => ({
        students: state.students.map((student) =>
          student.id === id ? { ...student, ...updatedData } : student
        ),
      }));
    } catch (error) {
      console.error("Error updating student:", error.message);
      set({ error: error.message });
    }
  },

  deleteStudent: async (id) => {
    try {
      const { error } = await supabase.from("studentdata").delete().eq("id", id);
      if (error) throw error;
      set((state) => ({
        students: state.students.filter((student) => student.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting student:", error.message);
      set({ error: error.message });
    }
  },
}));

export default useStore;
