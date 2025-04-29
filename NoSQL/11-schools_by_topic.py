#!/usr/bin/env python3
"""
Module for working with MongoDB using pymongo
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of schools having a specific topic
    Args:
        mongo_collection: pymongo collection object
        topic: (string) topic searched
    Returns:
        List of school documents having the specified topic
    """
    if mongo_collection is None:
        return []

    return list(mongo_collection.find({"topics": topic}))
