const pool = require('./pool');

const getIndex = async () => {
  const {rows} = await pool.query('SELECT * FROM messages');
  return rows;
}

module.exports = {
  getIndex
}