import React, { useState } from "react";
import useStore from "../store/useStore";
import "./styles.css";

function DownNav() {
  const { addStudent } = useStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    student_name: "",
    date_joined: "",
    last_login: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addStudent(formData);
    setIsDialogOpen(false); // Close the dialog after submission

    try {
      // Send POST request to the API route
      const response = await fetch("/api/studentdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send the form data
      });
      if (response.ok) {
        // Optionally, you can add the student to the state if needed
        const newStudent = await response.json();
        addStudent(newStudent); // Assuming your state management has an `addStudent` function
        setIsDialogOpen(false); // Close the dialog after submission
      } else {
        console.error("Failed to create student:", response.statusText);
      }
    } catch (error) {
      console.error("Error occurred while creating student:", error);
    }
  };

  return (
    <div className="flex justify-between  pl-60 mt-5">
      <div className="flex ml-9 gap-3 mt-5">
        <button className="button-1 ">
          AY 2024-25{" "}
          <span class="material-symbols-outlined">keyboard_arrow_down</span>
        </button>
        <button className="button-1 ">
          CBSE 9{" "}
          <span class="material-symbols-outlined">keyboard_arrow_down</span>
        </button>
      </div>
      <div className="mr-16">
        <div className="add-student-container">
          <button
            className="open-dialog-button flex"
            onClick={() => setIsDialogOpen(true)}
          >
            <span class="material-symbols-outlined">add</span> Add New Student
          </button>

          {isDialogOpen && (
            <div className="dialog-overlay">
              <div className="dialog-box">
                <h2>Add New Student</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Student Name</label>
                    <input
                      name="student_name"
                      placeholder="Student Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Date Joined</label>
                    <input
                      name="date_joined"
                      type="date"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Login</label>
                    <input
                      name="last_login"
                      type="datetime-local"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Status</label>
                    <input
                      name="status"
                      placeholder="Status"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="dialog-actions">
                    <button type="submit" className="submit-button">
                      Submit
                    </button>
                    <button
                      type="button"
                      className="cancel-button"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DownNav;
