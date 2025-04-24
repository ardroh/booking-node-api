/**
 * Type definitions for the Restaurant Table Booking API
 * 
 * This file contains TypeScript interfaces for the data models used in the application.
 * 
 * @author R&D Department at SoftServe Inc 2025
 */

// Interface for restaurant table data
export interface Table {
  id: string;
  capacity: number;
  location: string;
}

// Interface for booking data
export interface Booking {
  id: string;
  table_id: string;
  customer_name: string;
  booking_time: string;
  created_at: string;
}

// Interface for booking request data (without auto-generated fields)
export interface BookingRequest {
  table_id: string;
  customer_name: string;
  booking_time: string;
}