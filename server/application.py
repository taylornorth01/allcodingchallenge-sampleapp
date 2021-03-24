from flask import Flask
import time
from stats_helper import StatsHelper
import json

app = Flask(__name__)
stats_helper = StatsHelper()

@app.route('/')
def homepage():
    return json.dumps(stats_helper.select_all())

print("### Application started...")

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
