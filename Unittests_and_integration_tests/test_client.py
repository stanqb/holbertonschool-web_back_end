#!/usr/bin/env python3
"""Unit tests for client module."""
import unittest
from unittest.mock import patch, Mock
from parameterized import parameterized
from typing import Dict

from client import GithubOrgClient


class TestGithubOrgClient(unittest.TestCase):
    """Test class for client.GithubOrgClient."""

    @parameterized.expand([
        ("google",),
        ("abc",),
    ])
    @patch("client.get_json")
    def test_org(self, org_name: str, mock_get_json: Mock) -> None:
        """Test that GithubOrgClient.org returns the correct value
        and that get_json is called once with the expected URL."""
        expected_payload = {"login": org_name, "id": 1234}
        mock_get_json.return_value = expected_payload

        client = GithubOrgClient(org_name)
        result = client.org

        expected_url = f"https://api.github.com/orgs/{org_name}"
        mock_get_json.assert_called_once_with(expected_url)
        self.assertEqual(result, expected_payload)


if __name__ == "__main__":
    unittest.main()
