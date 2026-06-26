# Queuing System in JS

A back-end project demonstrating how to build a Redis-based queuing system in
JavaScript (ES6) using Node.js, Babel, Kue and Express.

## Description

This project covers the fundamentals of working with Redis from Node.js and
building a simple background-job processing system. It walks through connecting
a Redis client, performing basic and advanced Redis operations, publishing and
subscribing to channels, creating and processing jobs with Kue, testing job
creation, and finally exposing a small Express API that tracks product stock in
Redis.

## Requirements

- All code is compiled/interpreted on **Ubuntu 18.04**, **Node 12.x** and
  **Redis 5.0.7**.
- All files end with a new line.
- A `README.md` file at the root of the project is mandatory.
- All source files use the `.js` extension.

## Environment Setup

### Install and run Redis

```bash
wget http://download.redis.io/releases/redis-6.0.10.tar.gz
tar xzf redis-6.0.10.tar.gz
cd redis-6.0.10
make
src/redis-server &
src/redis-cli ping   # -> PONG
```

Copy the provided `dump.rdb` file into the root of the project so that
`get Holberton` returns `School`.

### Install dependencies

```bash
npm install
```

## Dependencies

- **redis** – Redis client for Node.js
- **kue** – Priority job queue backed by Redis
- **express** – Web framework for the stock API
- **@babel** – ES6/ESNext transpilation (`@babel/cli`, `@babel/core`,
  `@babel/node`, `@babel/preset-env`, `@babel/register`)
- **mocha / chai / chai-http / sinon / request** – Testing stack
- **eslint** – Linting (Airbnb base config)
- **nodemon** – Auto-reloading dev runner

## Usage

Run any script in development mode with:

```bash
npm run dev <file>.js
```

Run the test suite with:

```bash
npm test <file>.test.js
```

## Files

| File | Description |
| --- | --- |
| `0-redis_client.js` | Connect a Node Redis client to the server |
| `1-redis_op.js` | Basic Redis operations (set / get) with callbacks |
| `2-redis_op_async.js` | Same operations using `promisify` and `async/await` |
| `4-redis_advanced_op.js` | Store and read a Redis hash (`hset` / `hgetall`) |
| `5-subscriber.js` | Redis subscriber on `holberton school channel` |
| `5-publisher.js` | Redis publisher sending timed messages |
| `6-job_creator.js` | Create a single Kue job on `push_notification_code` |
| `6-job_processor.js` | Process jobs from `push_notification_code` |
| `7-job_creator.js` | Create multiple jobs and track progress/errors |
| `7-job_processor.js` | Process jobs with blacklist and progress tracking |
| `8-job.js` | `createPushNotificationsJobs` job-creation function |
| `8-job.test.js` | Tests for the job-creation function (`queue.testMode`) |
| `9-stock.js` | Express API tracking product stock in Redis |

## Author

Stan QUEUNIEZ - Holberton School — Web Back-End curriculum