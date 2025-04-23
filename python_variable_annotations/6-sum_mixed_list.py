#!/usr/bin/env python3
"""Module that provides a function to sum a mixed list of integers and
floats"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Sum all elements from a list of integers and floats.

    Args:
        mxd_lst (List[Union[int, float]]): List of integers and floats to sum

    Returns:
        float: The sum of all numbers in the list as a float
    """
    return float(sum(mxd_lst))
