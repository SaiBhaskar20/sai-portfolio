from pathlib import Path
from flask import Flask, send_from_directory

PROJECT_ROOT = Path(__file__).resolve().parent.parent
app = Flask(__name__, static_folder=str(PROJECT_ROOT), static_url_path="")

@app.get("/")
def home():
    return send_from_directory(PROJECT_ROOT, "index.html")

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=False)
