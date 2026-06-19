#!/usr/bin/env python3
"""Module defining a Cache class to store and retrieve data using Redis."""
import redis
import uuid
from functools import wraps
from typing import Callable, Optional, Union


def count_calls(method: Callable) -> Callable:
    """Decorator that counts how many times a Cache method is called."""
    key = method.__qualname__

    @wraps(method)
    def wrapper(self, *args, **kwargs):
        """Increment the call counter then call the wrapped method."""
        self._redis.incr(key)
        return method(self, *args, **kwargs)

    return wrapper


def call_history(method: Callable) -> Callable:
    """Decorator that stores the history of inputs and outputs of a method."""
    inputs_key = method.__qualname__ + ":inputs"
    outputs_key = method.__qualname__ + ":outputs"

    @wraps(method)
    def wrapper(self, *args, **kwargs):
        """Store the inputs and outputs in Redis then return the output."""
        self._redis.rpush(inputs_key, str(args))
        output = method(self, *args, **kwargs)
        self._redis.rpush(outputs_key, output)
        return output

    return wrapper


def replay(method: Callable) -> None:
    """Display the full history of calls of a particular method."""
    cache = method.__self__
    name = method.__qualname__
    count = cache._redis.get(name)
    count = int(count) if count else 0
    print("{} was called {} times:".format(name, count))
    inputs = cache._redis.lrange(name + ":inputs", 0, -1)
    outputs = cache._redis.lrange(name + ":outputs", 0, -1)
    for inp, out in zip(inputs, outputs):
        print("{}(*{}) -> {}".format(
            name, inp.decode("utf-8"), out.decode("utf-8")))


class Cache:
    """Cache class that stores data in Redis using random keys."""

    def __init__(self) -> None:
        """Initialize the Redis client and flush the current database."""
        self._redis = redis.Redis()
        self._redis.flushdb()

    @count_calls
    @call_history
    def store(self, data: Union[str, bytes, int, float]) -> str:
        """Store data in Redis under a random key and return that key."""
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    def get(self, key: str,
            fn: Optional[Callable] = None) -> Union[str, bytes, int, float]:
        """Retrieve data from Redis and optionally convert it using fn."""
        value = self._redis.get(key)
        if value is None:
            return None
        if fn is not None:
            return fn(value)
        return value

    def get_str(self, key: str) -> str:
        """Retrieve data from Redis and decode it as a UTF-8 string."""
        return self.get(key, lambda d: d.decode("utf-8"))

    def get_int(self, key: str) -> int:
        """Retrieve data from Redis and convert it to an integer."""
        return self.get(key, int)
