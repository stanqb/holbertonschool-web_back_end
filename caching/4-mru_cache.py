#!/usr/bin/env python3
"""MRUCache module - a caching system using MRU eviction policy."""
from base_caching import BaseCaching
from collections import OrderedDict


class MRUCache(BaseCaching):
    """MRUCache defines a caching system with MRU eviction policy."""

    def __init__(self):
        """Initialize the cache using an OrderedDict to track usage order."""
        super().__init__()
        self.cache_data = OrderedDict()

    def put(self, key, item):
        """Add an item to the cache using MRU eviction.

        Args:
            key: the key to store the item under.
            item: the value to store in the cache.
        Discards the most recently used item if cache exceeds MAX_ITEMS.
        Does nothing if key or item is None.
        """
        if key is None or item is None:
            return
        if key in self.cache_data:
            self.cache_data.move_to_end(key)
        elif len(self.cache_data) >= BaseCaching.MAX_ITEMS:
            mru_key, _ = self.cache_data.popitem(last=True)
            print("DISCARD: {}".format(mru_key))
        self.cache_data[key] = item
        self.cache_data.move_to_end(key)

    def get(self, key):
        """Retrieve an item from the cache by key.

        Args:
            key: the key to look up in the cache.
        Moves the accessed key to the end to mark it as most recently used.
        Returns the value linked to key, or None if key is None or not found.
        """
        if key is None or key not in self.cache_data:
            return None
        self.cache_data.move_to_end(key)
        return self.cache_data[key]
