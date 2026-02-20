#!/usr/bin/env python3
"""LIFOCache module - a caching system using LIFO eviction policy."""
from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """LIFOCache defines a caching system with LIFO eviction policy."""

    def __init__(self):
        """Initialize the cache and a variable to track
        the last inserted key."""
        super().__init__()
        self.last_key = None

    def put(self, key, item):
        """Add an item to the cache using LIFO eviction.

        Args:
            key: the key to store the item under.
            item: the value to store in the cache.
        Discards the last inserted item if cache exceeds MAX_ITEMS.
        Does nothing if key or item is None.
        """
        if key is None or item is None:
            return
        if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
            if key not in self.cache_data:
                del self.cache_data[self.last_key]
                print("DISCARD: {}".format(self.last_key))
        self.cache_data[key] = item
        self.last_key = key

    def get(self, key):
        """Retrieve an item from the cache by key.

        Args:
            key: the key to look up in the cache.
        Returns the value linked to key, or None if key is None or not found.
        """
        if key is None:
            return None
        return self.cache_data.get(key)
