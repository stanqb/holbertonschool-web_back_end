# Personal Data

A Python project focused on handling Personally Identifiable Information (PII) securely, including log filtering, password hashing, and secure database access.

## Description

This project covers key back-end security practices:

- **PII filtering in logs**: Obfuscate sensitive fields (name, email, phone, SSN, password) in log messages using regex substitution.
- **Custom log formatter**: A `RedactingFormatter` class that automatically redacts PII fields from log records.
- **Secure database connection**: Retrieve database credentials from environment variables to avoid hardcoding sensitive data.
- **Password encryption**: Hash passwords using `bcrypt` and validate them securely.

## Files

| File | Description |
|---|---|
| `filtered_logger.py` | PII filtering, log formatter, logger setup, DB connection, and main runner |
| `encrypt_password.py` | Password hashing and validation using bcrypt |
| `user_data.csv` | Sample dataset used for testing |

## Requirements

- Python 3.9 on Ubuntu 20.04 LTS
- `pycodestyle` 2.5
- `mysql-connector-python`
- `bcrypt`

## Usage

### Filter logs

```python
from filtered_logger import filter_datum

filter_datum(["password", "ssn"], "***", "name=Bob;ssn=123;password=abc;", ";")
```

### Hash a password

```python
from encrypt_password import hash_password, is_valid

hashed = hash_password("MyPassword123")
is_valid(hashed, "MyPassword123")  # True
```

### Run the main data reader

```bash
PERSONAL_DATA_DB_USERNAME=root \
PERSONAL_DATA_DB_PASSWORD=root \
PERSONAL_DATA_DB_HOST=localhost \
PERSONAL_DATA_DB_NAME=my_db \
./filtered_logger.py
```

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `PERSONAL_DATA_DB_USERNAME` | `root` | Database username |
| `PERSONAL_DATA_DB_PASSWORD` | `` | Database password |
| `PERSONAL_DATA_DB_HOST` | `localhost` | Database host |
| `PERSONAL_DATA_DB_NAME` | — | Database name (required) |