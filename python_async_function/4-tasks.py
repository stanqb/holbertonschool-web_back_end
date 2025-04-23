#!/usr/bin/env python3
"""Module that provides an async routine using tasks"""

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns task_wait_random n times with the specified max_delay.

    Args:
        n (int): Number of times to spawn task_wait_random
        max_delay (int): Maximum delay in seconds for each task

    Returns:
        List[float]: List of all delays in ascending order
    """
    # Create a list of tasks using task_wait_random
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    # Wait for all tasks to complete and gather results
    results = await asyncio.gather(*tasks)

    # Return sorted results
    return sorted(results)
