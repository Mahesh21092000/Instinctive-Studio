import React, { useEffect } from 'react';
import useStore from '../store/useStore';
import './styles.css'

const StudentList = () => {
  const { students, isLoading, error, fetchStudents, updateStudent, deleteStudent } = useStore();


  useEffect(() => {
    fetchStudents(); 
  }, [fetchStudents]);

  const handleEdit = (id) => {
    console.log("Editing student with ID:", id);
    const updatedData = { status: "Updated" };
    updateStudent(id, updatedData);
  };
  
  const handleDelete = (id) => {
    console.log("Deleting student with ID:", id);
    deleteStudent(id);
  };

  if (isLoading)
    return <div className="text-center text-blue-500">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;

  
  return (
    <div className="px-4 lg:px-16 ml-52"  id='table'>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="py-3 px-6 border-b">Student Name</th>
              <th className="py-3 px-6 border-b">Cohort</th>
              <th className="py-3 px-6 border-b">Course</th>
              <th className="py-3 px-6 border-b">Date Joined</th>
              <th className="py-3 px-6 border-b">Last Login</th>
              <th className="py-3 px-6 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-gray-50 text-gray-800 border-t"
                >
                  <td className="py-3 px-1">{student.student_name}</td>
                  <td className="py-3 px-6">{student.cohort || 'AY 2025-25'}</td>
                  <td className="py-3 px-6">{student.course || 'CBSE'}</td>
                  <td className="py-3 px-6">{student.date_joined}</td>
                  <td className="py-3 px-6">{student.last_login}</td>
                  <td
                    className={`py-3 px-6 font-semibold ${
                      student.status === 'Active'
                        ? 'text-green-500'
                        : '  text-red-500'
                    }`}
                  >
                    {student.status}
                  </td>
                  <td>
              <button onClick={() => handleEdit(student.id)}>Edit</button>
              <button onClick={() => handleDelete(student.id)}>Delete</button>
            </td>

                  
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center text-gray-500 py-5 font-semibold"
                >
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
