from flask import Flask, render_template, send_file
from flask_cors import CORS

app = Flask(__name__)
# CORS IS USED FOR CROSS ORIGIN RESOURCE SHARING
CORS(app)

# This is for when youve built the app
# @app.route('/')
# def index():
#     return render_template('index.html')

@app.route('/yolo')
def yolo():
    return "brap"

@app.route('/home_image')
def home_image():
    return send_file(r"C:\Users\MARL\Documents\myDocuments\personal\website_v4\project\static\img\logo.PNG")

if __name__ == '__main__':
    app.run(debug=True)