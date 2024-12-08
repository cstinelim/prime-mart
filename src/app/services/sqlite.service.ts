import { Injectable } from '@angular/core';
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root',
})
export class SqliteService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private database!: SQLiteDBConnection;

  // Initialize or get the database connection
  async initDb() {
    try {
      // Check if a connection already exists
      if (!this.database) {
        console.log('No database connection found, creating a new one...');
        // Create a new connection if it doesn't exist
        this.database = await this.sqlite.createConnection(
          'usersDB',
          false,
          'no-encryption',
          1,
          false
        );
        await this.database.open(); // Open the database connection
        console.log('Database connection opened.');
      } else {
        console.log('Reusing existing database connection...');
        // If already initialized, just open the connection
        await this.database.open();
        console.log('Database connection already open.');
      }

      await this.initTable(); // Initialize the table if it doesn't exist
      console.log('Database and table initialized.');
    } catch (error) {
      console.error('Error initializing or opening database:', error);
    }
  }

  // Create the users table if it doesn't exist
  async initTable() {
    try {
      const query = `
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT UNIQUE NOT NULL,
          email TEXT NOT NULL,
          password TEXT NOT NULL
        )`;

      await this.database.execute(query);
      console.log('Table initialized or already exists.');
    } catch (error) {
      console.error('Error creating table:', error);
    }
  }

  // Check if the database is open
  async isDatabaseOpen() {
    try {
      return this.database && (await this.database.isDBOpen());
    } catch (error) {
      console.error('Error checking database open status:', error);
      return false;
    }
  }

  // Create a new user
  async create(username: string, email: string, password: string) {
    try {
      // Ensure the database is initialized
      if (!this.database) {
        console.log('Database not initialized. Initializing...');
        await this.initDb(); // Ensure the database is initialized
      }

      // Check if the database is open before performing the operation
      if (!(await this.isDatabaseOpen())) {
        console.log('Opening database...');
        await this.database.open(); // Open the database connection if it's closed
      }

      // Insert the user into the database
      const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
      await this.database.run(query, [username, email, password]);
      console.log('User added successfully.');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }

  // Read all users from the database
  async read() {
    if (!(await this.isDatabaseOpen())) {
      console.error('Database is not open');
      return [];
    }

    const query = `SELECT * FROM users`;
    try {
      const result = await this.database.query(query);
      return result.values || [];
    } catch (error) {
      console.error('Error reading users:', error);
      return [];
    }
  }
}
