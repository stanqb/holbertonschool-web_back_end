# Caching

## Description

This project implements various caching algorithms in Python. Each caching system inherits from a base class `BaseCaching` and applies a specific eviction policy when the cache reaches its maximum capacity (`MAX_ITEMS = 4`).

## Base Class

All caching classes inherit from `BaseCaching`, which provides:
- `self.cache_data`: dictionary used to store cached items
- `MAX_ITEMS`: maximum number of items allowed in the cache (set to `4`)
- `put(self, key, item)`: abstract method to add an item
- `get(self, key)`: abstract method to retrieve an item
- `print_cache()`: prints the current state of the cache

## Caching Systems

| File | Class | Algorithm | Description |
|------|-------|-----------|-------------|
| `0-basic_cache.py` | `BasicCache` | None | No limit caching system |
| `1-fifo_cache.py` | `FIFOCache` | FIFO | Discards the first item added |
| `2-lifo_cache.py` | `LIFOCache` | LIFO | Discards the last item added |
| `3-lru_cache.py` | `LRUCache` | LRU | Discards the least recently used item |
| `4-mru_cache.py` | `MRUCache` | MRU | Discards the most recently used item |

## Requirements

- Python 3.9 (Ubuntu 20.04 LTS)
- `pycodestyle` style (version 2.5)
- All files must be executable
- All modules, classes, and functions must have proper documentation

## Repository

- **GitHub repository:** `holbertonschool-web_back_end`
- **Directory:** `caching`