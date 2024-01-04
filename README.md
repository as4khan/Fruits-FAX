# Fruit-FAX

Fruit-FAX is an innovative website dedicated to providing comprehensive nutrition information for over 50 different fruits. Designed for ease of use, users can quickly access nutritional facts by inputting the name of a fruit, with data sourced from the Fruityvice API.

## Key Features

- **Nutritional Information:** Get detailed nutritional data for over 50 fruits.
- **Image Recognition:** Capture a picture of an unknown fruit, and Fruit-FAX's Convolutional Neural Network (CNN) identifies and provides nutritional information for 10+ fruits.
- **Accessibility:** Catering to users with varying fruit knowledge, Fruit-FAX is a go-to resource for health-conscious individuals and those exploring new fruits and flavors.

Visit Fruit-FAX at [https://fruits-fax.web.app](https://fruits-fax.web.app).

## Prerequisites

Before using Fruit-FAX, ensure the following are installed:

- [ReactJS](https://reactjs.org/)
- [Flask](https://flask.palletsprojects.com/)
- [Node.js](https://nodejs.org/)
- [TensorFlow](https://www.tensorflow.org/)


# Project Setup Guide

The guide to run the fullstack project locally on your computer.

## Flask Backend

### 1. Navigate to the backend folder:

```bash
cd backend
```

### 2. Install Dependencies:

```bash
pip install -r requirements.txt
```

Make sure you have Python and pip installed.

### 3. Run the Flask Backend:

```bash
python app.py
```

This will start the Flask backend. By default, it might run on `http://localhost:8080`.

### Using Docker for Flask Backend (Alternative Step):

If you prefer using Docker, ensure Docker is installed on your machine. Then run the following commands:

#### 1. Build the Docker Image:

```bash
docker build -t your-backend-image-name .
```

#### 2. Run the Docker Container:

```bash
docker run -p 8080:8080 your-backend-image-name
```

Replace `your-backend-image-name` with your desired image name.

## Vite Frontend

### 1. Navigate to the frontend folder:

```bash
cd frontend
```

### 2. Install Dependencies:

```bash
npm install
```

Make sure you have Node.js and npm installed.

### 3. Run the Vite Development Server:

```bash
npm run dev
```

The Vite frontend will be accessible at `http://localhost:5173` by default.

### Additional Notes:

- Ensure that the Flask backend is running before you start the Vite frontend.
- Update your frontend code to point to the correct backend API endpoint (e.g., `http://localhost:8080`).



## Credits

- Convolution Neural Network architecture insights from Muhammad Irman Zaman's Kaggle discussion post: [Link](https://www.kaggle.com/code/muhammadimran112233/99-acc-fruits-recognition-using-nn).
- Learnings from AK Python's YouTube Channel: [Link](https://www.youtube.com/@AKPython).
- Model training inspiration from DataLira's Kaggle discussion post: [Link](https://www.kaggle.com/code/databeru/fruit-and-vegetable-classification/notebook).
- Dataset by Kritik Seth: [Link](https://www.kaggle.com/datasets/kritikseth/fruit-and-vegetable-image-recognition/data).

## Contact

For any questions or issues, contact us at [areebsafirkhan10@gmail.com](mailto:areebsafirkhan10@gmail.com) or [kazi.shaffan@gmail.com](mailto:kazi.shaffan@gmail.com). We appreciate your feedback!
