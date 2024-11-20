const pool = require('./pool');

const getIndex = async () => {
  const {rows} = await pool.query('SELECT * FROM messages');
  return rows;
}

const postNew = async (user, message, date) => {
  await pool.query(`
    INSERT INTO messages (user, message, date) 
      VALUES ('${user}', '${message}', '${message}');
      `)
}

module.exports = {
  getIndex,
  postNew
}