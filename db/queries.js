const pool = require('./pool');

const getIndex = async () => {
  const {rows} = await pool.query('SELECT * FROM messages');
  return rows;
}

const postNew = async (user, message, date) => {
  await pool.query(`
    INSERT INTO messages (username, message, date) 
      VALUES ('${user}', '${message}', '${date}');
      `)
}

module.exports = {
  getIndex,
  postNew
}