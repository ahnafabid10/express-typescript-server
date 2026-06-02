# Express TypeScript Server

A simple Express server written in TypeScript with PostgreSQL integration using `pg`.

## Project Structure

- `src/server.ts` - main Express application entry point.
- `package.json` - npm scripts and dependencies.
- `tsconfig.json` - TypeScript configuration.

## Features

- Express-based API server
- PostgreSQL connection using `pg`
- JSON, text, and URL-encoded request body parsing
- `users` table initialization on startup
- Basic POST route for creating users

## Requirements

- Node.js 18+ (recommended)
- npm
- PostgreSQL database

## Installation

1. Install dependencies:

```bash
npm install
```

## Running Locally

Start the development server:

```bash
npm run dev
```

The server listens on port `5000` by default.

## API Endpoints

### GET `/`

Returns a basic JSON response:

```json
{
  "massage": "Express Server",
  "author": "Next Level"
}
```

### POST `/api/users`

Create a new user record.

Request body example:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "s3cret",
  "age": 30
}
```

Successful response:

```json
{
  "message": "created",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "password": "s3cret",
    "age": 30,
    "is_active": true,
    "create_at": "2026-06-02T...",
    "updated_at": "2026-06-02T..."
  }
}
```

## Database

The app currently initializes a `users` table automatically when it starts.

Table columns:

- `id` - primary key
- `name`
- `email` - unique, required
- `password` - required
- `is_active` - boolean, defaults to true
- `age`
- `create_at` - timestamp default now
- `updated_at` - timestamp default now

## Notes

- The database connection string is currently hard-coded in `src/server.ts`.
- For production use, move the database credentials into environment variables.

## License

ISC
