#!/usr/bin/env python3
"""Module for measuring the runtime of an async function"""

import asyncio
import time


wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the total execution time for wait_n(n, max_delay) and
    returns time/n.

    Args:
        n (int): Number of times to spawn wait_random
        max_delay (int): Maximum delay in seconds for each wait_random call

    Returns:
        float: Average time per operation (total_time / n)
    """
    start_time = time.time()

    # Run the async function using asyncio.run
    asyncio.run(wait_n(n, max_delay))

    end_time = time.time()
    total_time = end_time - start_time

    # Return average time per operation
    return total_time / n
