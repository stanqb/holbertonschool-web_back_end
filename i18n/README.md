# i18n — Flask Internationalization

A step-by-step Flask project that demonstrates internationalization (i18n) and localization (l10n) using the Flask-Babel extension.

## Description

This project builds a Flask application incrementally, starting from a minimal "Hello world" page and ending with a fully localized app that supports multiple languages, per-user locale and timezone preferences, and URL-based overrides.

## Requirements

- Ubuntu 20.04 LTS
- Python 3.9
- `pycodestyle` style (version 2.5)
- All files must be executable
- All files end with a new line
- First line of all Python files: `#!/usr/bin/env python3`
- All modules, classes, functions and coroutines must be documented and type-annotated

## Dependencies

```
pip3 install flask
pip3 install flask_babel
pip3 install pytz
```

## Files

### Python modules

- `0-app.py` — Basic Flask app with a single `/` route.
- `1-app.py` — Add Flask-Babel setup and a `Config` class.
- `2-app.py` — Add `get_locale` using `request.accept_languages`.
- `3-app.py` — Parametrize templates with `gettext` / `_`.
- `4-app.py` — Force locale via URL parameter (`?locale=fr`).
- `5-app.py` — Mock user login via `?login_as=<id>` and `before_request` hook.
- `6-app.py` — Use the logged-in user's preferred locale.
- `7-app.py` — Infer appropriate timezone with `get_timezone` and `pytz`.

### Templates

- `templates/0-index.html` … `templates/7-index.html` — matching templates for each step.

### Babel configuration and translations

- `babel.cfg` — Babel extraction config for Python and Jinja2 files.
- `messages.pot` — Extracted message catalog template.
- `translations/en/LC_MESSAGES/messages.po` / `.mo` — English translations.
- `translations/fr/LC_MESSAGES/messages.po` / `.mo` — French translations.

## Tasks overview

0. **Basic Flask app** — `/` route and `index.html` template.
1. **Basic Babel setup** — `Config` class, default locale `"en"`, timezone `"UTC"`.
2. **Get locale from request** — `get_locale` using `request.accept_languages`.
3. **Parametrize templates** — `gettext` / `_` with `home_title` and `home_header`.
4. **Force locale with URL parameter** — `?locale=fr` overrides detection.
5. **Mock logging in** — `?login_as=<id>`, `get_user`, `before_request`, `flask.g.user`.
6. **Use user locale** — priority: URL > user settings > request header > default.
7. **Infer appropriate time zone** — `get_timezone`, validated with `pytz.timezone`.

## Translation workflow

Extract messages:

```
pybabel extract -F babel.cfg -o messages.pot .
```

Initialize translations (first time only):

```
pybabel init -i messages.pot -d translations -l en
pybabel init -i messages.pot -d translations -l fr
```

Compile `.po` files into `.mo`:

```
pybabel compile -d translations
```

## Execution

Run a specific version of the app:

```
python3 3-app.py
```

Then open `http://127.0.0.1:5000/` in your browser.

Test locale override (task 4+):

```
http://127.0.0.1:5000/?locale=fr
```

Test mocked login (task 5+):

```
http://127.0.0.1:5000/?login_as=2
```

## Author

Stan QUEUNIEZ - Holberton School — Web Back End curriculum.
