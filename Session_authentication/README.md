# Session Authentication
 
## Description
 
This project implements a Session Authentication system from scratch on top of a REST API built with Flask. It extends a Basic Authentication system by introducing cookie-based session management, allowing users to authenticate via a session ID stored in a browser cookie rather than sending credentials on every request.
 
## Learning Objectives
 
- Understand what authentication means
- Understand what session authentication means
- Understand what cookies are and how to use them in Flask
- Understand how to send and parse cookies
 
## Requirements
 
- Python 3.9
- Ubuntu 20.04 LTS
- `pycodestyle` 2.6
- Flask
 
## Environment Variables
 
| Variable | Description |
|---|---|
| `AUTH_TYPE` | Set to `session_auth` to enable session authentication |
| `SESSION_NAME` | Name of the cookie used to store the Session ID |
| `API_HOST` | Host to run the API on |
| `API_PORT` | Port to run the API on |
 
## Project Structure
 
```
Session_authentication/
├── api/
│   └── v1/
│       ├── app.py
│       ├── auth/
│       │   ├── auth.py
│       │   └── session_auth.py
│       └── views/
│           ├── __init__.py
│           ├── session_auth.py
│           └── users.py
└── models/
```
 
## Tasks
 
### 0. Et moi et moi et moi!
Adds `GET /api/v1/users/me` endpoint to retrieve the currently authenticated user object.
 
### 1. Empty session
Creates a `SessionAuth` class inheriting from `Auth`. Updates `api/v1/app.py` to use `SessionAuth` when `AUTH_TYPE=session_auth`.
 
### 2. Create a session
Adds `create_session(user_id)` to `SessionAuth`: generates a UUID-based Session ID stored in an in-memory dictionary (`user_id_by_session_id`).
 
### 3. User ID for Session ID
Adds `user_id_for_session_id(session_id)` to `SessionAuth`: retrieves a User ID from the session dictionary using a Session ID.
 
### 4. Session cookie
Adds `session_cookie(request)` to the base `Auth` class: reads the session cookie from the request using the `SESSION_NAME` environment variable.
 
### 5. Before request
Updates `@app.before_request` to exclude `/api/v1/auth_session/login/` and abort with 401 if both `authorization_header` and `session_cookie` return `None`.
 
### 6. Use Session ID for identifying a User
Adds `current_user(request)` to `SessionAuth`: retrieves the `User` instance from the database using the session cookie and session dictionary.
 
### 7. New view for Session Authentication
Creates `POST /api/v1/auth_session/login` route: validates email/password, creates a session ID, sets a cookie, and returns the user as JSON.
 
### 8. Logout
Adds `destroy_session(request)` to `SessionAuth` and `DELETE /api/v1/auth_session/logout` route to invalidate a session.
 
## Usage
 
```bash
# Start the API with session authentication
API_HOST=0.0.0.0 API_PORT=5000 AUTH_TYPE=session_auth SESSION_NAME=_my_session_id python3 -m api.v1.app
 
# Login
curl "http://0.0.0.0:5000/api/v1/auth_session/login" -XPOST \
  -d "email=user@example.com" -d "password=yourpassword"
 
# Access protected route using session cookie
curl "http://0.0.0.0:5000/api/v1/users/me" --cookie "_my_session_id=<session_id>"
 
# Logout
curl "http://0.0.0.0:5000/api/v1/auth_session/logout" \
  --cookie "_my_session_id=<session_id>" -XDELETE
```
 
## Author
 
Stan QUEUNIEZ