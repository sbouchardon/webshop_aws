const { Pool } = require('pg');

// Optional : email
const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

// Create a new pool instance with the database connection details
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),
    ssl: {
        rejectUnauthorized: false
    },
});

// Optional : email
const ses = new SESClient({ region: process.env.REGION });

exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST,OPTIONS',
    };

    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: 'OK',
        };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method Not Allowed' }),
        };
    }

    let data;
    try {
        data = JSON.parse(event.body);
    } catch (e) {
        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ error: 'Invalid JSON' }),
        };
    }

    const { name, surname, email, pId } = data;

    if (!name || !surname || !email || !pId) {
        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ error: 'Missing required fields' }),
        };
    }

    try {
        // Check if the product exists
        const result = await pool.query(
            'UPDATE Product SET pNumberStock = pNumberStock - 1 WHERE pId = $1 AND pNumberStock > 0 RETURNING *',
            [pId]
        );

        if (result.rowCount === 0) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ message: 'Product unavailable or invalid ID' }),
            };
        }

        console.log("Product updated successfully");
        const productName = result.rows[0].pname;

        // Optional : email
        const allowedEmail = ['bbbambayyy@gmail.com'];
        if (!allowedEmail.includes(email)) {
            return {
                statusCode: 403,
                headers,
                body: JSON.stringify({ error: 'Email not allowed in SES sandbox.' }),
            };
        }

        console.log("before sending email");
        // Optional : email
        const emailParams = new SendEmailCommand({
            Destination: { ToAddresses: [email] },
            Message: {
                Subject: { Data: 'Order Confirmation' },
                Body: {
                    Text: {
                        Data: `Hello ${name} ${surname},\n\nThank you for purchasing "${productName}". We appreciate your order!`,
                    },
                },
            },
            Source: process.env.EMAIL_SOURCE,
        });
        console.log("Sending email to: ",email);
        await ses.send(emailParams);
        console.log('Email sent');

        // Optional : email
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: 'Email sent ok.' }),
        };
    } catch (err) {
        console.error('Lambda error:', err);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Internal Server Error', details: err.message }),
        };
    }
};