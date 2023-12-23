from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import numpy as np
import tensorflow as tf
from PIL import Image
from io import BytesIO
import os


# Load your trained fruit classification model
loaded_model = tf.keras.models.load_model("./my_model.h5")

# Map the class index to class name (replace class_mapping with your actual mapping)
class_mapping = {0: 'apple', 1: 'avocado', 2: 'banana', 3: 'cherry', 4: 'grapes', 5: 'kiwi', 6: 'lemon', 7: 'mango', 8: 'orange', 9: 'pear', 10: 'pineapple', 11: 'pomegranate', 12: 'strawberries', 13: 'tomato', 14: 'watermelon'}

app = Flask(__name__)
CORS(app)

@app.route("/api/ALL")
def allfruits():
    try:
        response = requests.get("https://www.fruityvice.com/api/fruit/all")
        response.raise_for_status()
        fruits = response.json()
        return jsonify({"data": fruits})
    except Exception as error:
        print("COULD NOT FETCH API", error)
        return jsonify({"ERROR INTERNET PROBLEMS"}), 500

@app.route("/api/<fruitname>")
def specificfruit(fruitname):
    try:
        response = requests.get(f"https://www.fruityvice.com/api/fruit/{fruitname}")
        response.raise_for_status()
        fruit = response.json()

        formatted_fruit = {
            "name": fruit.get("name"),
            "nutritions": fruit.get("nutritions", {}),
        }
        print("Response:", formatted_fruit)

        return jsonify(formatted_fruit)
    except Exception as error:
        print("COULD NOT FETCH API", error)
        return jsonify({"ERROR INTERNET PROBLEMS"}), 500

@app.route("/api/upload", methods=["POST"])
def upload_image():
    try:
        if "image" in request.files:
            uploaded_file = request.files["image"]

            img = Image.open(uploaded_file)
            img = img.resize((224, 224))
            
            img_array = tf.keras.preprocessing.image.img_to_array(img)
            img_array = tf.expand_dims(img_array, axis=0)
            img_array = tf.keras.applications.mobilenet_v2.preprocess_input(img_array)

            predictions = loaded_model.predict(img_array)
            predicted_class = np.argmax(predictions, axis=1)[0]

            predicted_fruit = class_mapping.get(predicted_class, "Unknown")
            
            response = requests.get(f"https://www.fruityvice.com/api/fruit/{predicted_fruit}")
            response.raise_for_status()
            fruit = response.json()

            formatted_fruit = {
                "name": fruit.get("name"),
                "nutritions": fruit.get("nutritions", {}),
            }
            print("Response:", formatted_fruit)

            return jsonify(formatted_fruit)
        else:
            return jsonify({"error": "NO IMAGE MAN"}), 400
    except Exception as error:
        print("Error handling image upload:", error)
        # Return a JSON error response
        return jsonify({"error": "INTERNAL SERVER ERROR MAN"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))