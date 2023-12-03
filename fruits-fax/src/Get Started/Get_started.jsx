import React, { useState } from "react";

import "./get_started.css";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../firebase"; // Import your Firebase storage configuration

const Get_started = () => {
  const [file, setFile] = useState(null);
  const [downloadURL, setDownloadURL] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    const storageRef = ref(storage, "images/" + file.name);
    const metadata = {
      contentType: "image/jpeg",
    };

    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.error("Error uploading:", error.code, error.message);
        // Handle errors here
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setDownloadURL(downloadURL); // Set the download URL in state
        });
      }
    );
  };

  const confirm = async () => {
    let name = document.getElementById("name").value;
    try {
      let response = await fetch(
        `https://exm1-fhj3nm4qsq-uc.a.run.app/api/${name}`
      );
      let searchFruit = await response.json();

      console.log(searchFruit);

      let searchNutritionformatted = nutritionsformat(searchFruit.nutritions);
      console.log(searchNutritionformatted);

      let searchFruitHTML = `
      <div className="innerBox">
        <h3>${searchFruit.name}</h3>
        <div>${searchNutritionformatted}</div>
      </div>
      `;

      document.getElementById("display").innerHTML = searchFruitHTML;
    } catch (error) {
      alert("PROBLEMS BRUV");
      console.error("ERROR COULD NOT FETCH FRUIT:", error);
    }
  };

  const picture = async () => {
    var input = document.getElementById("imageInput");
    var file = input.files[0];

    if (file) {
      var formData = new FormData();
      formData.append("image", file);

      try {
        let response = await fetch(
          "https://exm1-fhj3nm4qsq-uc.a.run.app/api/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        let picFruit = await response.json();
        console.log(picFruit);

        let picNutritionformatted = nutritionsformat(picFruit.nutritions);
        console.log(picNutritionformatted);

        let picFruitHTML = `
        <div className="innerBox">
          <h3>${picFruit.name}</h3>
          <div>${picNutritionformatted}</div>
        </div>
        `;

        document.getElementById("display").innerHTML = picFruitHTML;
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.log("No file selected.");
    }
  };

  const nutritionsformat = (nutrition) => {
    let nutritionHTML = "<ul>";

    for (let key in nutrition) {
      nutritionHTML += `<li>${key}: ${nutrition[key]}</li>`;
    }
    nutritionHTML += "</ul>";

    return nutritionHTML;
  };

  return (
    <section id="get_started">
      <div className="whole">
        <header>
          <h1 style={{ textAlign: "center" }}>SEARCHBAR</h1>
        </header>
        <div className="fields">
          <input type="text" placeholder="NAME" id="name" />
        </div>
        <div className="fields">
          <input type="file" id="imageInput" accept="image/*" />
        </div>
        <div className="fields">
          <input type="button" onClick={confirm} value="Format" id="box" />
          <input
            type="button"
            onClick={picture}
            value="PICTURE Format"
            id="box"
          />
        </div>
        <div id="display"></div>

        <div className="App">
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload</button>

          {downloadURL && (
            <div>
              <p>Latest Picture URL:</p>
              <a href={downloadURL} target="_blank" rel="noopener noreferrer">
                {downloadURL}
              </a>
              <img src={downloadURL} alt="Latest Uploaded" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Get_started;
