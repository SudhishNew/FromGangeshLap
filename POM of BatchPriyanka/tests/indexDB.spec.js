const { test, expect } = require('@playwright/test');
const oracledb = require('oracledb');

test('Oracle DB Connection Test', async () => {

    let connection;

    try {

        connection = await oracledb.getConnection({
            user: 'hr',
            password: 'admin',
            connectString: 'localhost:1521/XE'
        });

        console.log('Oracle DB connected successfully');

        const result = await connection.execute(
            `SELECT * FROM employees`
        );

        console.log(result.rows);

    } catch (error) {

        console.error('Oracle connection failed:', error);

    } finally {

        if (connection) {
            await connection.close();
        }
    }
});