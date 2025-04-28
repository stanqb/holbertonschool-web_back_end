#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Return a dictionary with hypermedia pagination that is resilient
        to deletions.

        Args:
            index (int, optional): The start index of the page. Defaults to 0.
            page_size (int, optional): Number of items per page.
            Defaults to 10.

        Returns:
            Dict: Dictionary with pagination data and metadata
        """
        indexed_dataset = self.indexed_dataset()
        dataset_size = len(indexed_dataset)

        # Set index to 0 if None
        if index is None:
            index = 0

        # Validate index
        assert isinstance(index, int) and 0 <= index < dataset_size

        data = []
        current_index = index
        # Collect page_size valid items
        count = 0

        while count < page_size and current_index < dataset_size:
            if current_index in indexed_dataset:
                data.append(indexed_dataset[current_index])
                count += 1
            current_index += 1

        # Find next valid index
        next_index = current_index
        while next_index < dataset_size and next_index not in indexed_dataset:
            next_index += 1

        if next_index >= dataset_size:
            next_index = None

        return {
            'index': index,
            'data': data,
            'page_size': len(data),
            'next_index': next_index
        }
