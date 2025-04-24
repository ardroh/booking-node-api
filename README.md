# Restaurant Table Booking API

A RESTful API for managing restaurant table bookings built with Node.js and TypeScript.

## Project Overview

This application provides a simple API for restaurant table management and booking. It allows users to:
- View available restaurant tables
- List existing table bookings
- Create new table bookings

The API uses in-memory data storage, so all data is lost when the server stops. This makes it suitable for demonstration purposes but not for production use.

## Project Structure

```
.
├── README.md
├── package.json
├── tsconfig.json
├── src/
    ├── index.ts                # Main entry point and router
    ├── controllers/
    │   ├── BookingController.ts  # Handles booking operations
    │   └── TableController.ts    # Manages restaurant tables
    └── models/
        └── types.ts            # Type definitions
```

## Setup and Installation

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation Steps
1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. For production build:
   ```
   npm run build
   npm start
   ```

## API Endpoints

### Tables

#### GET /tables
Returns a list of all available restaurant tables.

**Example Response:**
```json
[
  {"id": "T1", "capacity": 2, "location": "window"},
  {"id": "T2", "capacity": 4, "location": "center"},
  {"id": "T3", "capacity": 6, "location": "outdoor"}
]
```

### Bookings

#### GET /bookings
Returns a list of all table bookings.

**Example Response:**
```json
[
  {
    "id": "66a2e4f0a1b2c",
    "table_id": "T2",
    "customer_name": "John Doe",
    "booking_time": "2024-07-25 19:00:00",
    "created_at": "2024-07-25 14:30:00"
  }
]
```

#### POST /bookings
Creates a new booking.

**Request Body:**
```json
{
  "table_id": "T1",
  "customer_name": "Jane Smith",
  "booking_time": "2024-07-26 20:00:00"
}
```

**Example Response:**
```json
{
  "id": "66a2e5a0b3d4e",
  "table_id": "T1",
  "customer_name": "Jane Smith",
  "booking_time": "2024-07-26 20:00:00",
  "created_at": "2024-07-25 14:35:00"
}
```

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- 200 OK: Successful GET requests
- 201 Created: Successful POST requests
- 400 Bad Request: Invalid input
- 404 Not Found: Invalid endpoints
- 405 Method Not Allowed: Unsupported HTTP methods

**Example Error Response:**
```json
{
  "error": "Error message here"
}
```

## Development

- Run in development mode: `npm run dev`
- Build for production: `npm run build`
- Run production version: `npm start`

## Technologies Used

- Node.js
- TypeScript
- Express.js
- CORS middleware