#!/usr/bin/env python3
"""Module that provides a higher-order function for multiplication"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Create a function that multiplies a float by the given multiplier.

    Args:
        multiplier (float): The multiplier to use in the returned function

    Returns:
        Callable[[float], float]: A function that takes a float and returns
            the product of that float and the multiplier
    """
    def multiply(x: float) -> float:
        return x * multiplier
    return multiply
