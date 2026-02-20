#!/usr/bin/env python3
"""BasicCache module - a simple caching system with no limit."""
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """BasicCache defines a caching system with no item limit."""

    def put(self, key, item):
        """Add an item to the cache.

        Args:
            key: the key to store the item under.
            item: the value to store in the cache.
        Does nothing if key or item is None.
        """
        if key is None or item is None:
            return
        self.cache_data[key] = item

    def get(self, key):
        """Retrieve an item from the cache by key.

        Args:
            key: the key to look up in the cache.
        Returns the value linked to key, or None if key is None or not found.
        """
        if key is None:
            return None
        return self.cache_data.get(key)
