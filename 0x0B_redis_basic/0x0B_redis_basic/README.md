# 0x0B. Redis basic

A project exploring basic usage of Redis as a simple cache and as a tool for
tracking method calls, implemented in Python with the `redis` client.

## Description

This project implements a `Cache` class backed by a Redis instance. It covers
storing and retrieving data of multiple types, recovering the original type of
stored values, counting how many times methods are called, recording the
history of inputs and outputs, and replaying that history in a readable format.

## Requirements

- All files are interpreted/compiled on **Ubuntu 20.04 LTS** using **python3 (version 3.9)**.
- All files must end with a new line.
- A `README.md` file at the root of the project folder is mandatory.
- The first line of every file must be exactly `#!/usr/bin/env python3`.
- Code must follow the **pycodestyle** style (version 2.5).
- All modules, classes, functions and methods must be documented with a real sentence.
- All functions and coroutines must be type-annotated.

## Installation

```shell
$ sudo apt-get -y install redis-server
$ pip3 install redis
$ sed -i "s/bind .*/bind 127.0.0.1/g" /etc/redis/redis.conf
```

When running inside a container, start the server manually:

```shell
$ service redis-server start
```

## Files

| File          | Description                                            |
| ------------- | ------------------------------------------------------ |
| `exercise.py` | The `Cache` class, decorators and the `replay` helper. |

## Author

Holberton School — `holbertonschool-web_back_end`
