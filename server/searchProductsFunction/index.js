const { Pool } = require('pg');

// Fill in your RDS info here:
const pool = new Pool({
  user: 'postgres',
  host: 'webshop-db.cafgo66wipxz.us-east-1.rds.amazonaws.com',
  database: 'webshop-db',
  password: 'Pablo24fr',
  port: 5432,
});

exports.handler = async (event) => {
  try {
    const result = await pool.query('SELECT * FROM Product');
    console.log("Fetched products:", result.rows);
    return {
      statusCode: 200,
      body: JSON.stringify(result.rows)
    };
  } catch (err) {
    console.error('Error querying database:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Database error', message: err.message }),
    };
  }
};
