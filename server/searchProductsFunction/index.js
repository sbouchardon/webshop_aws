const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'webshop-db.cafgo66wipxz.us-east-1.rds.amazonaws.com',
  database: 'postgres',
  password: 'Pablo24fr',
  port: 5432,
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
