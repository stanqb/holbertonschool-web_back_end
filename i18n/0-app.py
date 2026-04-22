#!/usr/bin/env python3
"""A basic Flask application that renders a single index page."""
from flask import Flask, render_template


app = Flask(__name__)


@app.route("/", strict_slashes=False)
def index() -> str:
    """Render the home page of the application."""
    return render_template("0-index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
