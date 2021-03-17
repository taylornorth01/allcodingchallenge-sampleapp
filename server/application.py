from flask import Flask
import time

app = Flask(__name__)

@app.route('/')
def homepage():
    print("Hello, World!")

print("### Application started...")

time.sleep(20)
