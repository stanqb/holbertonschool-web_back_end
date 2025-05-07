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

    The total runtime is roughly 10 seconds because each async_comprehension
    function collects 10 numbers from async_generator, and each number
    generation takes 1 second (due to asyncio.sleep(1)). However, since we
    run 4 instances in parallel with asyncio.gather, they all share the same
    10-second timeframe instead of running sequentially (which would be 40s).
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
