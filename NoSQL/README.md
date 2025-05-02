# NoSQL Project

## Overview
This project focuses on understanding NoSQL databases, specifically MongoDB, and how to interact with them using both MongoDB shell commands and Python with PyMongo.

## Learning Objectives
* Understand what NoSQL is and how it differs from SQL databases
* Learn about ACID properties, document storage, and types of NoSQL databases
* Query, insert, update, and delete information in a NoSQL database
* Use MongoDB effectively

## Requirements
* MongoDB version 4.4 on Ubuntu 20.04 LTS
* Python 3.9 with PyMongo 4.8.0
* All Python files must be executable and follow pycodestyle 2.5.*

## Project Structure
The project contains MongoDB shell scripts and Python scripts:

### MongoDB Shell Scripts:
* 0-list_databases: List all databases
* 1-use_or_create_database: Create/use database
* 2-insert: Insert a document
* 3-all: List all documents
* 4-match: List documents matching criteria
* 5-count: Count documents
* 6-update: Update documents
* 7-delete: Delete documents

### Python Scripts:
* 8-all.py: List all documents in Python
* 9-insert_school.py: Insert document using Python
* 10-update_topics.py: Update document topics
* 11-schools_by_topic.py: Find schools by topic
* 12-log_stats.py: Log statistics script

## Installation
```bash
# Install MongoDB 4.4
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```

## Usage Examples
Run MongoDB commands:
```bash
cat 0-list_databases | mongo
```

Run Python scripts:
```bash
./8-main.py
```
