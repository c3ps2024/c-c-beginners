// migration.js
import { connectDB } from './utils/db';

async function migrate() {
  const db = await connectDB();

  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS registrations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        mobile VARCHAR(20) NOT NULL,
        enquiry TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Migration successful!');
  } catch (error) {
    console.error('Migration error:', error);
  } finally {
    await db.end();
  }
}

migrate();
