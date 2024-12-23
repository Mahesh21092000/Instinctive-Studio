import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  try {
    if (method === 'POST') {
      // Create new student data
      const { student_name, cohort, course, date_joined, last_login } = req.body;

      const student = await prisma.studentdata.create({
        data: {
          student_name,
          cohort,
          course,
          date_joined,
          last_login,
        },
      });
      return res.status(201).json(student); // Return created student data
    } 
    
    if (method === 'PUT') {
      // Update student data
      const { id, student_name, cohort, course, date_joined, last_login } = req.body;

      const updatedStudent = await prisma.studentdata.update({
        where: { id },
        data: {
          student_name,
          cohort,
          course,
          date_joined,
          last_login,
        },
      });
      return res.status(200).json(updatedStudent); // Return updated student data
    }
    
    if (method === 'DELETE') {
      // Delete student data
      const { id } = req.body;

      await prisma.studentdata.delete({
        where: { id },
      });
      return res.status(200).json({ message: 'Student deleted successfully' });
    }

    res.status(405).json({ error: 'Method Not Allowed' });
  } catch (error) {
    console.error(`Error with ${method} request:`, error);
    res.status(500).json({ error: `Error with ${method} request` });
  }
}
