import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";
import CNN from "../Images/Fruit-fax.png";

const about = () => {
  return (
    <section class="row flu">
      <div class="col-12 col-md-7 box">
        <div class="about__description">
          <h2>What is Fruit-FAX?</h2>
          <p>
            Fruit-FAX is an innovative and user-friendly website created to
            provide comprehensive nutrition information about over 50 different
            fruits. The primary objective of Fruit-FAX is to empower users with
            quick and reliable access to the nutritional facts of their favorite
            fruits. Through a seamless interface, users can easily input the
            name of a fruit and receive a wealth of nutritional data sourced
            from the Fruityvice API.
          </p>
          <p>
            One standout feature of Fruit-FAX is its commitment to
            accessibility. Recognizing that not everyone may be familiar with
            the names of all fruits, the website incorporates a unique solution.
            Users can simply capture a picture of an unknown fruit, and
            Fruit-FAX leverages cutting-edge Convolutional Neural Network (CNN)
            deep learning technology to accurately identify the fruit.
            Remarkably, the CNN model implemented on Fruit-FAX is trained to
            recognize and provide nutritional information for 10+ fruits,
            enhancing its utility for users with diverse preferences.
          </p>
          <p>
            Designed for individuals on the go, Fruit-FAX caters to a diverse
            audience with varying levels of fruit knowledge. Whether you're a
            health-conscious individual looking for specific nutritional details
            or someone exploring new fruits and flavors, Fruit-FAX aims to be
            the go-to resource for all your fruit-related nutritional queries.
          </p>
        </div>
      </div>
      <div class="col-12 col-md-5 box">
        <div class="about__image">
          <img src={CNN} alt="CNN_Deep_Learning" />
          <figcaption>
            This is how the CNN Deep Learning Model views the pictures that you
            have taken
          </figcaption>
        </div>
      </div>
    </section>
  );
};

export default about;
