# User Authentication Service

A RESTful authentication service built with Flask and SQLAlchemy, implementing secure user registration, login, session management, and password reset functionality.

## Tech Stack

- **Python 3.9** — Ubuntu 20.04 LTS
- **Flask** — Web framework
- **SQLAlchemy** — ORM for database interactions
- **bcrypt** — Password hashing
- **SQLite** — Database backend

## Installation

```bash
pip3 install bcrypt
```

## Project Structure

| File | Description |
|------|-------------|
| `user.py` | SQLAlchemy `User` model |
| `db.py` | `DB` class — low-level database operations |
| `auth.py` | `Auth` class — authentication business logic |
| `app.py` | Flask application and route definitions |

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/` | Welcome message |
| `POST` | `/users` | Register a new user |
| `POST` | `/sessions` | Log in and create a session |
| `DELETE` | `/sessions` | Log out and destroy the session |
| `GET` | `/profile` | Get the current user's profile |
| `POST` | `/reset_password` | Request a password reset token |
| `PUT` | `/reset_password` | Update the password using a reset token |

## Requirements

- All files end with a new line
- First line of all files: `#!/usr/bin/env python3`
- Code style: `pycodestyle` (version 2.5)
- All files must be executable
- All modules, classes, and functions must include docstrings
- All functions must be type annotated
- The Flask app interacts only with `Auth`, never directly with `DB`
- Only public methods of `Auth` and `DB` are used outside their respective classes

## Usage

```bash
python3 app.py
```
