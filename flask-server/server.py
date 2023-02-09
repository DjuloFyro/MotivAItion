from flask import Flask
from config import Config
import openai

openai.api_key = Config.SECRET_KEY
app = Flask(__name__)

@app.route("/")
def index():
    return

if __name__ == "__main__":
    app.run()
