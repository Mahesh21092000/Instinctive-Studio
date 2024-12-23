import React, { useState } from 'react';
import useStore from '../store/useStore';
import './styles.css'; // Add a separate CSS file for styles

const AddStudent = () => {
  const { addStudent } = useStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    student_name: '',
    date_joined: '',
    last_login: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    setIsDialogOpen(false); // Close the dialog after submission
  };

  return (
    <div className="add-student-container">
      <button className="open-dialog-button" onClick={() => setIsDialogOpen(true)}>
        Add New Student
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
  );
};

export default AddStudent;
