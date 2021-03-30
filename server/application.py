from flask import Flask, jsonify
import time
from stats_helper import StatsHelper
import json
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
stats_helper = StatsHelper()

@app.route('/')
def homepage():
    return json.dumps(stats_helper.select_all())


@app.route('/employee')
def employee():
    return json.dumps(stats_helper.select_all_employee())


@app.route('/alldata')
def alldata():
    return json.dumps(stats_helper.join_all())

@app.route('/asc_exercise')
def asc_exercise():
    return json.dumps(stats_helper.asc_exercise())

@app.route('/desc_exercise_pag/<int:page_num>')
def desc_exercise_pag(page_num):
    return json.dumps(stats_helper.desc_exercise_pag(8, page_num))

@app.route('/desc_exercise')
def desc_exercise():
    return json.dumps(stats_helper.desc_exercise())

@app.route('/total_records')
def total_records():
    return json.dumps(stats_helper.total_records())


print("### Application started...")


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
