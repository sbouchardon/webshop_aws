const { Pool } = require('pg');

// Create a new pool instance with the database connection details
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
  ssl: {
    rejectUnauthorized: false,
  }
});

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: 'OK'
    };
  }

  // Check if the request method is GET 
  try {
    const result = await pool.query('SELECT * FROM Product');
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(result.rows)
    };
  } catch (err) {
    console.error('Error querying database:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Database error', message: err.message })
    };
  }
};
