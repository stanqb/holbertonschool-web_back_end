# Basic Authentication

A Python project implementing Basic Authentication on a simple Flask REST API.

## Description

This project covers the fundamentals of authentication in a web API context:

- **Error handling**: Custom JSON responses for 401 (Unauthorized) and 403 (Forbidden) HTTP errors
- **Auth class**: A base authentication class defining the authentication interface
- **BasicAuth class**: An implementation of HTTP Basic Authentication using Base64 encoding
- **Request filtering**: Middleware to protect API routes based on authentication headers
- **User credentials**: Extraction and validation of user credentials from Base64-encoded headers

## Project Structure

```
Basic_authentication/
├── README.md
├── requirements.txt
├── models/
│   ├── __init__.py
│   ├── base.py         # Base model with serialization to file
│   └── user.py         # User model with password hashing
└── api/
    ├── __init__.py
    └── v1/
        ├── __init__.py
        ├── app.py              # Flask app entry point
        ├── auth/
        │   ├── __init__.py
        │   ├── auth.py         # Base Auth class
        │   └── basic_auth.py   # BasicAuth implementation
        └── views/
            ├── __init__.py
            ├── index.py        # Status, stats, unauthorized, forbidden endpoints
            └── users.py        # User CRUD endpoints
```

## Requirements

- Python 3.9 on Ubuntu 20.04 LTS
- `pycodestyle` 2.5

## Setup

```bash
pip3 install -r requirements.txt
```

## Run

```bash
API_HOST=0.0.0.0 API_PORT=5000 python3 -m api.v1.app
```

With Basic Authentication enabled:

```bash
API_HOST=0.0.0.0 API_PORT=5000 AUTH_TYPE=basic_auth python3 -m api.v1.app
```

## Routes

- `GET /api/v1/status`: returns the status of the API
- `GET /api/v1/stats`: returns the number of each object type
- `GET /api/v1/unauthorized`: test endpoint that raises a 401 error
- `GET /api/v1/forbidden`: test endpoint that raises a 403 error
- `GET /api/v1/users`: returns the list of all users
- `GET /api/v1/users/:id`: returns a user based on their ID
- `DELETE /api/v1/users/:id`: deletes a user based on their ID
- `POST /api/v1/users`: creates a new user (JSON: `email`, `password`, `last_name` (optional), `first_name` (optional))
- `PUT /api/v1/users/:id`: updates a user based on their ID (JSON: `last_name`, `first_name`)

## Authentication

This API uses HTTP Basic Authentication. To authenticate, encode your credentials in Base64:

```bash
echo -n "email@example.com:password" | base64
```

Then pass the result in the `Authorization` header:

```bash
curl "http://0.0.0.0:5000/api/v1/users" -H "Authorization: Basic "
```

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `API_HOST` | `0.0.0.0` | Host to run the API on |
| `API_PORT` | `5000` | Port to run the API on |
| `AUTH_TYPE` | `` | Authentication type (`auth` or `basic_auth`) |