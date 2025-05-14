const pool = require('../config/config');

const UserModel = {
  getAllUsers: async () => {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.execute('SELECT * FROM Users');
      return rows;
    } finally {
      connection.release();
    }
  },

  getUserById: async (userId) => {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.execute('SELECT * FROM Users WHERE user_id = ?', [userId]);
      return rows[0];
    } finally {
      connection.release();
    }
  },

  createUser: async ({ username, password_hash, email }) => {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute(
        'INSERT INTO Users (username, password_hash, email) VALUES (?, ?, ?)',
        [username, password_hash, email]
      );
      return { user_id: result.insertId, username, email };
    } finally {
      connection.release();
    }
  },

  updateUser: async (userId, { username, password_hash, email }) => {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute(
        'UPDATE Users SET username = ?, password_hash = ?, email = ? WHERE user_id = ?',
        [username, password_hash, email, userId]
      );
      return result.affectedRows > 0;
    } finally {
      connection.release();
    }
  },

  deleteUser: async (userId) => {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute('DELETE FROM Users WHERE user_id = ?', [userId]);
      return result.affectedRows > 0;
    } finally {
      connection.release();
    }
  }
};

module.exports = UserModel;
