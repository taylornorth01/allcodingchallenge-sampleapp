from flask import Flask, jsonify
import time
from stats_helper import StatsHelper
import json
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
stats_helper = StatsHelper()

@app.route('/<int:page_num>')
def homepage(page_num):
    return json.dumps(stats_helper.select_all_pag(12, page_num))


@app.route('/employee')
def employee():
    return json.dumps(stats_helper.select_all())


@app.route('/alldata')
def alldata():
    return json.dumps(stats_helper.join_all())

@app.route('/asc_exercise')
def asc_exercise():
    return json.dumps(stats_helper.asc_exercise())


# EXERCISE PAGINATION
@app.route('/desc_exercise_pag/<int:page_num>')
def desc_exercise_pag(page_num):
    return json.dumps(stats_helper.desc_exercise_pag(12, page_num))

@app.route('/asc_exercise_pag/<int:page_num>')
def asc_exercise_pag(page_num):
    return json.dumps(stats_helper.asc_exercise_pag(12, page_num))


# SLEEP PAGINATION
@app.route('/desc_sleep_pag/<int:page_num>')
def desc_sleep_pag(page_num):
    return json.dumps(stats_helper.desc_sleep_pag(12, page_num))

@app.route('/asc_sleep_pag/<int:page_num>')
def asc_sleep_pag(page_num):
    return json.dumps(stats_helper.asc_sleep_pag(12, page_num))


# SOCIAL PAGINATION
@app.route('/desc_social_pag/<int:page_num>')
def desc_social_pag(page_num):
    return json.dumps(stats_helper.desc_social_pag(12, page_num))

@app.route('/asc_social_pag/<int:page_num>')
def asc_social_pag(page_num):
    return json.dumps(stats_helper.asc_social_pag(12, page_num))


# WORK PAGINATION
@app.route('/desc_work_pag/<int:page_num>')
def desc_work_pag(page_num):
    return json.dumps(stats_helper.desc_work_pag(12, page_num))

@app.route('/asc_work_pag/<int:page_num>')
def asc_work_pag(page_num):
    return json.dumps(stats_helper.asc_work_pag(12, page_num))





@app.route('/desc_exercise')
def desc_exercise():
    return json.dumps(stats_helper.desc_exercise())

@app.route('/total_records')
def total_records():
    return json.dumps(stats_helper.total_records())


print("### Application started...")


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
