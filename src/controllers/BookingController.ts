/**
 * Controller that handles booking-related operations
 * 
 * This controller provides methods to list all bookings and create new bookings,
 * storing them in a static array (in-memory storage).
 * 
 * @author R&D Department at SoftServe Inc 2025
 */

import { Booking } from '../models/types';
import { TableController } from './TableController';

export class BookingController {
  // Static array to store bookings (in-memory storage)
  private static bookings: Booking[] = [];

  /**
   * List all bookings
   * 
   * @returns Array of Booking objects
   */
  public static listBookings(): Booking[] {
    return this.bookings;
  }

  /**
   * Create a new booking
   * 
   * @param tableId - ID of the table to book
   * @param customerName - Name of the customer
   * @param bookingTime - Date and time for the booking
   * @returns The created booking object
   * @throws Error if the table doesn't exist
   */
  public static createBooking(tableId: string, customerName: string, bookingTime: string): Booking {
    // Check if the table exists
    const table = TableController.getTableById(tableId);
    if (!table) {
      throw new Error(`Table with ID ${tableId} not found`);
    }

    // Generate a unique ID for the booking
    const id = this.generateBookingId();
    
    // Get current timestamp for created_at
    const createdAt = this.getCurrentTimestamp();
    
    // Create new booking object
    const booking: Booking = {
      id,
      table_id: tableId,
      customer_name: customerName,
      booking_time: bookingTime,
      created_at: createdAt
    };
    
    // Add the booking to the in-memory storage
    this.bookings.push(booking);
    
    return booking;
  }

  /**
   * Generate a unique booking ID
   * 
   * @returns A unique string ID
   */
  private static generateBookingId(): string {
    // Simple implementation that generates a hex string
    return Math.random().toString(16).substring(2, 14);
  }

  /**
   * Get current timestamp in format YYYY-MM-DD HH:MM:SS
   * 
   * @returns Formatted timestamp string
   */
  private static getCurrentTimestamp(): string {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
}