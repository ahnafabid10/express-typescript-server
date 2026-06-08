# Express TypeScript Server

This project is an Express server written in TypeScript with PostgreSQL support.
It includes user registration and authentication logic using bcrypt and JWT.

## Authentication flow implemented in code

- `src/modules/auth/auth.route.ts`
  - Defines the auth router.
  - Mounts `POST /login` to `authController.loginUser`.

- `src/modules/auth/auth.controller.ts`
  - Receives the login request.
  - Calls `authservice.loginUserIntoDb(req.body)`.
  - Sends a JSON response containing `accessToken` on success.

- `src/modules/auth/auth.service.ts`
  - Reads `email` and `password` from the request body.
  - Queries the `users` table for a matching email.
  - If no user is found, throws `Invalid credentials!!!`.
  - Uses `bcrypt.compare` to verify the provided password against the stored hash.
  - If password verification fails, throws `Invalid Credentials!!`.
  - Creates a JWT payload with `id`, `name`, `is_active`, and `email`.
  - Signs a JWT with `config.secret` and `expiresIn: "1d"`.
  - Returns `{ accessToken }`.

## How to use the login endpoint

- URL: `POST http://localhost:5000/api/auth/login`
- Headers:
  - `Content-Type: application/json`
- Body example:

```json
{
  "email": "abid@gmail.com",
  "password": "12345"
}
```

> Important: Do not include a trailing comma after the last field in JSON.

## Notes

- The login endpoint is mounted at `/api/auth/login`, not `/api/login`.
- The controller currently returns `201` and the message `Profile created successfully!` even though it is a login endpoint.
- Make sure the `.env` file defines `PORT` and `JST_SECRET` so the server and JWT signing work correctly.

## Environment variables

Create a `.env` file in the project root with at least:

```env
PORT=5000
JST_SECRET=your_jwt_secret
```

## Start the server

```bash
npm run dev
```

Then send the login request to:

```text
POST http://localhost:5000/api/auth/login
```
