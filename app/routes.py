from flask import Blueprint, render_template, jsonify

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/api/data')
def get_data():
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)
