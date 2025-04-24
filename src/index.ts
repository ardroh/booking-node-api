/**
 * Main entry point for the Restaurant Table Booking API
 * 
 * This file acts as the entry point and router for the application.
 * It sets up the Express server, configures middleware, and defines routes.
 * 
 * @author R&D Department at SoftServe Inc 2025
 */

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { BookingController } from './controllers/BookingController';
import { TableController } from './controllers/TableController';

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Configure middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Simple logging middleware
app.use((req: Request, _res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Define routes
app.get('/tables', (_req: Request, res: Response) => {
  const tables = TableController.listTables();
  res.status(200).json(tables);
});

app.get('/bookings', (_req: Request, res: Response) => {
  const bookings = BookingController.listBookings();
  res.status(200).json(bookings);
});

app.post('/bookings', (req: Request, res: Response) => {
  try {
    const { table_id, customer_name, booking_time } = req.body;
    
    // Validate required fields
    if (!table_id || !customer_name || !booking_time) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const booking = BookingController.createBooking(table_id, customer_name, booking_time);
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: error instanceof Error ? error.message : 'An unknown error occurred' });
  }
});

// Handle 404 for undefined routes
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});