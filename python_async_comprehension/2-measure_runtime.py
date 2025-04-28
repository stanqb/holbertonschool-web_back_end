#!/usr/bin/env python3
"""
Measure Runtime module
This module measures the runtime of parallel async comprehensions.
"""

import asyncio
import time

# Import async_comprehension from the previous task file
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Executes async_comprehension four times in parallel using asyncio.gather
    and measures the total runtime.

    Returns:
        float: Total runtime in seconds
    """
    start_time = time.perf_counter()

    # Execute async_comprehension four times in parallel
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )

    end_time = time.perf_counter()
    return end_time - start_time
