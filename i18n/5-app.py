#!/usr/bin/env python3
"""A Flask application with a mocked user login system."""
from typing import Optional, Dict
from flask import Flask, render_template, request, g
from flask_babel import Babel


class Config:
    """Configuration class holding available languages and Babel
    default settings."""

    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app = Flask(__name__)
app.config.from_object(Config)

babel = Babel()


users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}


def get_locale() -> str:
    """Return the locale for the current request.

    If the incoming request carries a 'locale' query parameter whose
    value is one of the supported languages, return it. Otherwise,
    fall back to the best match from the Accept-Language header.
    """
    locale = request.args.get("locale")
    if locale in app.config["LANGUAGES"]:
        return locale
    return request.accept_languages.best_match(app.config["LANGUAGES"])


babel.init_app(app, locale_selector=get_locale)


def get_user() -> Optional[Dict]:
    """Return a user dictionary based on the 'login_as' URL parameter,
    or None if the parameter is missing or the ID is unknown."""
    user_id = request.args.get("login_as")
    if user_id is None:
        return None
    try:
        return users.get(int(user_id))
    except ValueError:
        return None


@app.before_request
def before_request() -> None:
    """Set the current user on flask.g before each request."""
    g.user = get_user()


@app.route("/", strict_slashes=False)
def index() -> str:
    """Render the home page of the application."""
    return render_template("5-index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
