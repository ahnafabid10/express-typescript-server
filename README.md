# Express TypeScript Server

A production-ready Express server built with TypeScript and PostgreSQL. This project provides a RESTful API for user management with automatic database initialization.

## 🚀 Features

- ✅ **Express.js** - Fast and minimal web framework
- ✅ **TypeScript** - Type-safe development
- ✅ **PostgreSQL** - Robust relational database
- ✅ **Auto DB Initialization** - Creates tables on startup
- ✅ **Request Parsing** - JSON, text, and URL-encoded support
- ✅ **Hot Reload** - Development server with automatic restart

## �️ Implemented Work

- Modular routing for `auth`, `profile`, and `user` features
- `src/app.ts` sets up middleware and routes
- `src/server.ts` initializes the database and starts the server
- `src/config/index.ts` loads environment configuration from `.env`
- `src/db/index.ts` creates `users` and `profiles` tables automatically
- Built REST API endpoints under `/api/users`, `/api/profile`, and `/api/auth`

## �📋 Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 8+ or **yarn**
- **PostgreSQL** 12+ (running locally or accessible remotely)

## 📁 Project Structure

```
├── src/
│   ├── server.ts          # Main Express application entry point
│   └── config/
│       └── index.ts       # Environment configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## 🔧 Installation & Setup

### 1. Clone and Install Dependencies

```bash
git clone <repository-url>
cd express
npm install
```

### 2. Configure Environment

Create a `.env` file in the project root:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=express_db

# Server Configuration
PORT=5000
NODE_ENV=development
```

### 3. Running the Server

**Development mode** (with hot reload):

```bash
npm run dev
```

The server will start on `http://localhost:5000`

## 📚 API Documentation

### Health Check

**GET** `/`

Returns server status:

```json
{
  "message": "Express Server",
  "author": "Next Level"
}
```

### Create User

**POST** `/api/users`

Create a new user record.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secure_password",
  "age": 30
}
```

**Success Response (201):**

```json
{
  "message": "created",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "password": "secure_password",
    "age": 30,
    "is_active": true,
    "created_at": "2026-06-06T10:30:00.000Z",
    "updated_at": "2026-06-06T10:30:00.000Z"
  }
}
```

## 🗄️ Database Schema

The application automatically creates a `users` table on startup with the following columns:

| Column | Type | Constraints |
|--------|------|-------------|
| `id` | SERIAL | PRIMARY KEY |
| `name` | VARCHAR(20) | - |
| `email` | VARCHAR(20) | UNIQUE, NOT NULL |
| `password` | VARCHAR(20) | NOT NULL |
| `age` | INT | - |
| `is_active` | BOOLEAN | DEFAULT true |
| `created_at` | TIMESTAMP | DEFAULT NOW() |
| `updated_at` | TIMESTAMP | DEFAULT NOW() |

## 🛠️ Technologies Used

- **express** ^5.2.1 - Web framework
- **pg** ^8.21.0 - PostgreSQL client
- **typescript** ^6.0.3 - TypeScript compiler
- **tsx** ^4.22.3 - TypeScript executor for Node.js
- **dotenv** ^17.4.2 - Environment variable management

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm test` | Run tests (not configured) |

## 🔐 Security Notes

- Store sensitive data (passwords, database credentials) in `.env` file
- Never commit `.env` file to version control
- Use environment variables for all configuration
- Consider hashing passwords before storing in database
- Validate and sanitize all user inputs

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/new-feature`)
2. Commit changes (`git commit -m 'Add new feature'`)
3. Push to branch (`git push origin feature/new-feature`)
4. Open a Pull Request

## 📄 License

ISC

## 👨‍💻 Author

Next Level
- `create_at` - timestamp default now
- `updated_at` - timestamp default now

## Notes

- The database connection string is loaded from `.env` via `src/config/index.ts`.
- For production use, keep all database credentials and secrets in environment variables.

## License

ISC
