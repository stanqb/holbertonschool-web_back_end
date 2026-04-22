#!/usr/bin/env python3
"""A Flask application with locale selection based on the request."""
from flask import Flask, render_template, request
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


def get_locale() -> str:
    """Determine the best match with our supported languages based
    on the Accept-Language header of the incoming request."""
    return request.accept_languages.best_match(app.config["LANGUAGES"])


babel.init_app(app, locale_selector=get_locale)


@app.route("/", strict_slashes=False)
def index() -> str:
    """Render the home page of the application."""
    return render_template("2-index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
