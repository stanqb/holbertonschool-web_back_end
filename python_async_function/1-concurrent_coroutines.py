#!/usr/bin/env python3
"""Module that provides an async routine to run multiple coroutines
concurrently"""

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns wait_random n times with the specified max_delay.

    Args:
        n (int): Number of times to spawn wait_random
        max_delay (int): Maximum delay in seconds for each wait_random call

    Returns:
        List[float]: List of all delays in ascending order
    """
    # Create a list of tasks
    tasks = [wait_random(max_delay) for _ in range(n)]

    # Gather all results as they complete
    results = await asyncio.gather(*tasks)

    # Return sorted results (automatically sorted as they complete)
    return sorted(results)
