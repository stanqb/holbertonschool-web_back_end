# MySQL Advanced

This project covers advanced MySQL concepts through a series of SQL scripts:
table creation with constraints, triggers, stored procedures, functions,
indexes, and views.

## Requirements

- All files are executed on **Ubuntu 20.04 LTS** using **MySQL 8.0**.
- All files end with a new line.
- Every SQL query is preceded by a comment describing it.
- Every file starts with a comment describing the task.
- All SQL keywords are written in uppercase (`SELECT`, `WHERE`, etc.).
- File length is tested with `wc`.

## Setup

Import a SQL dump into a database:

```bash
echo "CREATE DATABASE hbtn_0d_tvshows;" | mysql -uroot -p
curl "URL_TO_DUMP.sql" -s | mysql -uroot -p hbtn_0d_tvshows
```

## Files

| File | Description |
| --- | --- |
| `0-uniq_users.sql` | Create a `users` table with a unique `email` attribute. |
| `1-country_users.sql` | Create a `users` table with a `country` enumeration (`US`, `CO`, `TN`). |
| `2-fans.sql` | Rank country origins of bands by number of (non-unique) fans. |
| `3-glam_rock.sql` | List Glam rock bands ranked by longevity up to 2024. |
| `4-store.sql` | Trigger that decreases item quantity after a new order. |
| `5-valid_email.sql` | Trigger that resets `valid_email` when `email` changes. |
| `6-bonus.sql` | Stored procedure `AddBonus` adding a correction for a student. |
| `7-average_score.sql` | Stored procedure `ComputeAverageScoreForUser`. |
| `8-index_my_names.sql` | Index `idx_name_first` on the first letter of `name`. |
| `9-index_name_score.sql` | Index `idx_name_first_score` on the first letter of `name` and `score`. |
| `10-div.sql` | Function `SafeDiv` returning `a / b`, or 0 when `b` equals 0. |
| `11-need_meeting.sql` | View `need_meeting` listing students who need a meeting. |

## Author

Holberton School — `holbertonschool-web_back_end` / `MySQL_Advanced`.