# Unittests and Integration Tests

A Python project demonstrating unit testing and integration testing practices for a GitHub organization client.

## Description

This project implements unit tests and integration tests for utility functions and a GitHub organization API client. It showcases parameterized tests, mocking HTTP calls, patching properties and methods, memoization testing, and class-level fixtures for integration testing.

## Requirements

- Ubuntu 18.04 LTS
- Python 3.7
- `pycodestyle` style (version 2.5)
- All files must be executable
- All files end with a new line
- First line of all files: `#!/usr/bin/env python3`
- All modules, classes and functions must be documented and type-annotated

## Dependencies

```
pip install requests
pip install parameterized
```

## Files

### Source files

- `utils.py` — Generic utilities for the GitHub organization client (`access_nested_map`, `get_json`, `memoize`).
- `client.py` — A GitHub organization client (`GithubOrgClient`).
- `fixtures.py` — Test fixtures: `org_payload`, `repos_payload`, `expected_repos`, `apache2_repos`.

### Test files

- `test_utils.py` — Unit tests for `utils.py` (`TestAccessNestedMap`, `TestGetJson`, `TestMemoize`).
- `test_client.py` — Unit and integration tests for `client.py` (`TestGithubOrgClient`, `TestIntegrationGithubOrgClient`).

## Tasks overview

0. **Parameterize a unit test** — `TestAccessNestedMap.test_access_nested_map` with `@parameterized.expand`.
1. **Parameterize a unit test (exceptions)** — `TestAccessNestedMap.test_access_nested_map_exception` using `assertRaises`.
2. **Mock HTTP calls** — `TestGetJson.test_get_json` patching `requests.get`.
3. **Parameterize and patch** — `TestMemoize.test_memoize` verifying memoization behavior.
4. **Parameterize and patch as decorators** — `TestGithubOrgClient.test_org` patching `get_json`.
5. **Mocking a property** — `TestGithubOrgClient.test_public_repos_url` with `patch` as a context manager.
6. **More patching** — `TestGithubOrgClient.test_public_repos` combining decorator and context manager patches.
7. **Parameterize** — `TestGithubOrgClient.test_has_license` with `@parameterized.expand`.
8. **Integration test: fixtures** — `TestIntegrationGithubOrgClient` using `@parameterized_class`, `setUpClass`, `tearDownClass`, and `side_effect` on `requests.get`.

## Concepts covered

- Unit tests vs integration tests
- Parameterized tests with `parameterized.expand` and `parameterized_class`
- Mocking with `unittest.mock` (`patch`, `PropertyMock`, `Mock`, `side_effect`)
- `patch` as decorator and as context manager
- Class-level fixtures (`setUpClass`, `tearDownClass`)
- Memoization testing
- Testing exceptions with `assertRaises`

## Execution

Run a specific test file:

```
python -m unittest test_utils.py
python -m unittest test_client.py
```

Run all tests:

```
python -m unittest discover
```

## Author

Stan QUEUNIEZ - Holberton School — Web Back End curriculum