from flask import Flask
import time
from stats_helper import StatsHelper

app = Flask(__name__)
stats_helper = StatsHelper()

@app.route('/')
def homepage():
    print("RESULT")
    print(stats_helper.select_all())
    return '<h1>Hi</h1>'

print("### Application started...")

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
