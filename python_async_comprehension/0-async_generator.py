#!/usr/bin/env python3
"""Module that contains an asynchronous generator function"""
import asyncio
import random
from typing import AsyncGenerator
"""
coroutine called async_generator that takes no arguments
"""


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Asynchronous coroutine designed to produce a
    sequence of 10 random numbers ranging from 0 to 10.
    Before yielding each value, the coroutine incorporates
    an asynchronous delay of one second, simulating a natural pause.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
