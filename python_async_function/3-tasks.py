#!/usr/bin/env python3
"""Module that provides a function to create an asyncio task"""

import asyncio


wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Creates and returns an asyncio.Task for wait_random.

    Args:
        max_delay (int): Maximum delay to be passed to wait_random

    Returns:
        asyncio.Task: A Task that will execute wait_random with max_delay
    """
    # Create and return a Task object
    return asyncio.create_task(wait_random(max_delay))
