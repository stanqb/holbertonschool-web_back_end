#!/usr/bin/env python3
"""
Async Generator module
This module provides an asynchronous generator function.
"""

import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    Coroutine that yields 10 random numbers between 0 and 10.
    Each yield is preceded by an asynchronous wait of 1 second.

    Returns:
        Generator yielding random float numbers
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
