import { Injectable } from '@angular/core';
import { CapacitorSQLite } from '@capacitor-community/sqlite';
import {
  SQLiteConnection,
  SQLiteDBConnection,
} from '@capacitor-community/sqlite/dist/esm';

@Injectable({
  providedIn: 'root',
})
export class SqliteService {
  private sqliteConnection: SQLiteConnection;
  private db!: SQLiteDBConnection; // Non-null assertion operator

  constructor() {
    this.sqliteConnection = new SQLiteConnection(CapacitorSQLite);
  }

  async initDb() {
    try {
      // Create connection
      const dbName = 'userDB';
      this.db = await this.sqliteConnection.createConnection(
        dbName,
        false,
        'no-encryption',
        1,
        false
      );

      // Open database
      await this.db.open();

      // Create users table
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT NOT NULL,
          email TEXT UNIQUE NOT NULL,
          password TEXT NOT NULL
        );
      `;
      await this.db.execute(createTableQuery);
    } catch (error) {
      console.error('Error initializing database:', error);
      throw error;
    }
  }

  async insert(user: { username: string; email: string; password: string }) {
    if (!this.db) {
      throw new Error('Database not initialized.');
    }

    const query =
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    const result = await this.db.run(query, [
      user.username,
      user.email,
      user.password,
    ]);
    if (result.changes?.changes !== 1) {
      throw new Error('Failed to insert user.');
    }
  }

  async read() {
    if (!this.db) {
      throw new Error('Database not initialized.');
    }

    const query = 'SELECT * FROM users';
    const result = await this.db.query(query);
    return result.values || [];
  }
}
