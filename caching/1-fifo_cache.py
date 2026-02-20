#!/usr/bin/env python3
"""FIFOCache module - a caching system using FIFO eviction policy."""
from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """FIFOCache defines a caching system with FIFO eviction policy."""

    def __init__(self):
        """Initialize the cache and a list to track insertion order."""
        super().__init__()
        self.order = []

    def put(self, key, item):
        """Add an item to the cache using FIFO eviction.

        Args:
            key: the key to store the item under.
            item: the value to store in the cache.
        Discards the first inserted item if cache exceeds MAX_ITEMS.
        Does nothing if key or item is None.
        """
        if key is None or item is None:
            return
        if key not in self.cache_data:
            self.order.append(key)
        self.cache_data[key] = item
        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            first = self.order.pop(0)
            del self.cache_data[first]
            print("DISCARD: {}".format(first))

    def get(self, key):
        """Retrieve an item from the cache by key.

        Args:
            key: the key to look up in the cache.
        Returns the value linked to key, or None if key is None or not found.
        """
        if key is None:
            return None
        return self.cache_data.get(key)
