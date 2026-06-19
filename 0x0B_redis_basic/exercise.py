#!/usr/bin/env python3
"""Module that provides a Cache class to store data in Redis."""
import redis
import uuid
from typing import Union


class Cache:
    """Cache class to interact with a Redis data store."""

    def __init__(self) -> None:
        """Initialize the Redis client and flush the current database."""
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: Union[str, bytes, int, float]) -> str:
        """Store the given data in Redis under a random key and return it."""
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key
