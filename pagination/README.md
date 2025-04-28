# Pagination

This project explores different pagination techniques for datasets, focusing on implementing both standard and advanced pagination methods to access data efficiently.

## Learning Objectives

By the end of this project, you should be able to:
- Implement pagination with simple page and page_size parameters
- Create hypermedia pagination with metadata
- Build deletion-resilient pagination systems

## Requirements

- Python 3.9 (Ubuntu 20.04 LTS)
- pycodestyle 2.5.x
- All files must start with `#!/usr/bin/env python3`
- All modules and functions require proper documentation
- All functions must be type-annotated

## Dataset

This project uses the `Popular_Baby_Names.csv` file as its primary dataset.

## Tasks

### 0. Simple Helper Function
- Create an `index_range` function that calculates start and end indices
- Handle 1-indexed pagination (first page is page 1)

### 1. Simple Pagination
- Implement a `Server` class to paginate the baby names dataset
- Add a `get_page` method with input validation

### 2. Hypermedia Pagination
- Enhance pagination with metadata (next page, previous page, total pages)
- Implement a `get_hyper` method returning a dictionary with navigation information

### 3. Deletion-resilient Pagination
- Create pagination that handles potential data deletion between requests
- Implement `get_hyper_index` to ensure users don't miss items when switching pages

## Repository Structure

- GitHub repository: `holbertonschool-web_back_end`
- Directory: `pagination`
- Files:
  - `0-simple_helper_function.py`
  - `1-simple_pagination.py`
  - `2-hypermedia_pagination.py`
  - `3-hypermedia_del_pagination.py`
