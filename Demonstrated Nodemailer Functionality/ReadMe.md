# Node Mailer (React + Express + Nodemailer)

Simple demo app that sends flight-details emails from a React client to an Express server using Nodemailer.

## Project Structure

- `client/` — React + Vite frontend (form for flight details)
- `server/` — Express backend that sends email via Nodemailer

## Prerequisites

- Node.js (v16+ recommended)
- A Gmail account or SMTP-enabled email account (see notes about app passwords)

## Environment

Create a `.env` file in the `server/` directory with the following variables:

```
PORT=5000
EMAIL=your.email@example.com
PASSWORD=your_email_password_or_app_password
```

Notes:
- If using Gmail with 2FA enabled, create an App Password and use it as `PASSWORD`.
- For other providers, set `EMAIL` and `PASSWORD` accordingly and adjust transporter settings in `server/server.js` if needed.

## Install

Install server dependencies:

```bash
cd server
npm install
```

Install client dependencies:

```bash
cd ../client
npm install
```

## Run (Development)

Start the backend (from `server/`):

```bash
cd server
node server.js
```

Start the frontend (from `client/`):

```bash
cd client
npm run dev
```

The React app will typically be available at `http://localhost:5173` (Vite default) and the server at `http://localhost:5000` (if `PORT=5000`). The frontend POSTs to `http://localhost:5000/send-email`.

## Usage

1. Open the frontend in your browser.
2. Fill in flight details and a destination email address.
3. Submit the form — the server will send an email to the provided address and return success.

## API

- POST `/send-email` (JSON)

Example request body:

```json
{
  "flightNumber": "AI101",
  "flightDate": "2026-08-10",
  "departureCity": "Mumbai",
  "arrivalCity": "Delhi",
  "email": "recipient@example.com"
}
```

## Troubleshooting

- If emails fail with authentication errors when using Gmail, ensure you are using an App Password (recommended) and not your account password.
- Check server logs for errors — the server prints exceptions to console.
- Confirm `PORT`, `EMAIL`, and `PASSWORD` are present in `server/.env`.
- If you change SMTP provider, update the transporter config in `server/server.js`.

## Notes

- This project is a small demo and does not include production-grade error handling, input validation, or security hardening. Do not use these credentials or this setup as-is for production workloads.

## License

This repository is provided as-is for demonstration purposes.
