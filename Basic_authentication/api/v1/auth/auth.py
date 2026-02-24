#!/usr/bin/env python3
"""Module for managing API authentication."""
from typing import List, TypeVar


class Auth:
    """Class to manage the API authentication."""

    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """Return True if the path requires authentication."""
        if path is None:
            return True
        if excluded_paths is None or len(excluded_paths) == 0:
            return True
        if not path.endswith('/'):
            path = path + '/'
        if path in excluded_paths:
            return False
        return True

    def authorization_header(self, request=None) -> str:
        """Return the Authorization header value from the request."""
        if request is None:
            return None
        if 'Authorization' not in request.headers:
            return None
        return request.headers.get('Authorization')

    def current_user(self, request=None) -> TypeVar('User'):
        """Return None - request will be the Flask request object."""
        return None
