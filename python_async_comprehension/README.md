# Python Async Comprehension

This project explores Python's asynchronous programming features, focusing on async generators, async comprehensions, and type annotations in an asynchronous context.

## Learning Objectives

By the end of this project, you should be able to:
- Implement asynchronous generators
- Use async comprehensions
- Properly type-annotate generators and coroutines

## Requirements

- Python 3.9 (Ubuntu 20.04 LTS)
- pycodestyle 2.5.x
- All files must start with `#!/usr/bin/env python3`
- All modules and functions require proper documentation
- All functions and coroutines must be type-annotated

## Tasks

### 0. Async Generator
- Create a coroutine `async_generator` that yields 10 random numbers
- Each yield is preceded by an asynchronous 1-second wait

### 1. Async Comprehensions
- Implement `async_comprehension` using an async comprehension
- Collect and return 10 random numbers from the async generator

### 2. Run time for four parallel comprehensions
- Execute `async_comprehension` four times in parallel
- Measure and return the total runtime
- The runtime should be approximately 10 seconds

## Repository Structure

- GitHub repository: `holbertonschool-web_back_end`
- Directory: `python_async_comprehension`
- Files:
  - `0-async_generator.py`
  - `1-async_comprehension.py`
  - `2-measure_runtime.py`

