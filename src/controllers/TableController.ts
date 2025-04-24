/**
 * Controller that manages restaurant tables
 * 
 * This controller contains a predefined list of tables with their properties
 * and provides methods to list all tables.
 * 
 * @author R&D Department at SoftServe Inc 2025
 */

import { Table } from '../models/types';

export class TableController {
  // Static array to store the predefined tables (in-memory storage)
  private static tables: Table[] = [
    { id: "T1", capacity: 2, location: "window" },
    { id: "T2", capacity: 4, location: "center" },
    { id: "T3", capacity: 6, location: "outdoor" },
    { id: "T4", capacity: 8, location: "private room" },
    { id: "T5", capacity: 2, location: "bar" }
  ];

  /**
   * List all available tables
   * 
   * @returns Array of Table objects
   */
  public static listTables(): Table[] {
    return this.tables;
  }

  /**
   * Get a table by ID
   * 
   * @param id - The table ID to find
   * @returns The found table or undefined if not found
   */
  public static getTableById(id: string): Table | undefined {
    return this.tables.find(table => table.id === id);
  }
}