#!/usr/bin/env python3
"""Auth module providing authentication utilities."""
import bcrypt


def _hash_password(password: str) -> bytes:
    """Hash a password string using bcrypt
    and return the salted hash as bytes."""
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
