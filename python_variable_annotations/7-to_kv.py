#!/usr/bin/env python3
"""Module that provides a function to convert a string and number to a tuple"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Create a tuple from a string and a number.

    Args:
        k (str): The string to use as first element
        v (Union[int, float]): The number to square and use as second element

    Returns:
        Tuple[str, float]: A tuple containing the string and the square of v
    """
    return (k, float(v * v))
