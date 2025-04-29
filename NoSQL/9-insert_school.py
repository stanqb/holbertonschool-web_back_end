#!/usr/bin/env python3
"""
Module for working with MongoDB using pymongo
"""


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document in a collection based on kwargs
    Args:
        mongo_collection: pymongo collection object
        **kwargs: arbitrary keyword arguments for document fields
    Returns:
        The new _id of the inserted document
    """
    if mongo_collection is None:
        return None

    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
