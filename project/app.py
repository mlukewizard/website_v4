from flask import Flask, render_template, send_file
from project.database.database_interface import Product, get_all_entry_type, delete_and_create_database, add_item
from flask_cors import CORS

delete_and_create_database()
add_item(Product(productID="1", brand="Fix-My-Road-Rash", details="Bandage", img1Path=r"static\img\product-img\1\bandage1.jpg", img2Path=r"static\img\product-img\1\bandage2.jpg", price="£10"))
add_item(Product(productID="2", brand="Fix-My-Road-Rash", details="Plaster", img1Path=r"static\img\product-img\2\plaster1.jpg", img2Path=r"static\img\product-img\2\plaster2.jpg", price="£20"))

app = Flask(__name__)
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
# #23503C