const {Client} = require('pg');
require('dotenv').config();


const date = new Date().toLocaleString('en-GB', {
day: '2-digit',
month: '2-digit',
year: 'numeric',
hour: '2-digit',
minute: '2-digit',
hour12: false
}).replace(',', '');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
user VARCHAR (30),
message VARCHAR (120),
date VARCHAR
);

INSERT INTO messages (user, message, date) 
VALUES ('Amando', 'Hi there!', '${date}'), 
      ('Charles', 'Hello World!', '${date}');
`;


async function main() {
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING
    });
    
  await client.connect();
  await client.query(SQL);
  await client.end();
}


main();