#!/usr/bin/env python3
"""Module for managing API authentication."""
from typing import List, TypeVar


class Auth:
    """Class to manage the API authentication."""

    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """Return False - path and excluded_paths will be used later."""
        return False

    def authorization_header(self, request=None) -> str:
        """Return None - request will be the Flask request object."""
        return None

    def current_user(self, request=None) -> TypeVar('User'):  # type: ignore
        """Return None - request will be the Flask request object."""
        return None
