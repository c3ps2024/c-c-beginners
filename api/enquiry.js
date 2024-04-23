// api/enquiry.js
import { connectDB } from '../../utils/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, mobile, enquiry } = req.body;

    const db = await connectDB();

    try {
      await db.query('INSERT INTO registrations (name, email, mobile, enquiry) VALUES (?, ?, ?, ?)', [
        name,
        email,
        mobile,
        enquiry,
      ]);
      res.status(201).json({ message: 'Enquiry submitted successfully!' });
    } catch (error) {
      console.error('Error inserting enquiry:', error);
      res.status(500).json({ message: 'Error submitting enquiry.' });
    } finally {
      await db.end();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
