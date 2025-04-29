#!/usr/bin/env python3
"""
Module for working with MongoDB using pymongo
"""


def list_all(mongo_collection):
    """
    Lists all documents in a collection
    Args:
        mongo_collection: pymongo collection object
    Returns:
        List of all documents in collection or empty list if none
    """
    if mongo_collection is None:
        return []

    return list(mongo_collection.find())
