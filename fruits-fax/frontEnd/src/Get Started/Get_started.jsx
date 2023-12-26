import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import "./get_started.css";

// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import { storage } from "../firebase";

const Get_started = () => {
  // const [file, setFile] = useState(null);
  // const [downloadURL, setDownloadURL] = useState(null);

  // const handleFileChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   setFile(selectedFile);
  // };

  // const handleUpload = () => {
  //   if (!file) {
  //     console.error("No file selected");
  //     return;
  //   }

  //   const storageRef = ref(storage, "images/" + file.name);
  //   const metadata = {
  //     contentType: "image/jpeg",
  //   };

  //   const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log("Upload is " + progress + "% done");
  //       switch (snapshot.state) {
  //         case "paused":
  //           console.log("Upload is paused");
  //           break;
  //         case "running":
  //           console.log("Upload is running");
  //           break;
  //       }
  //     },
  //     (error) => {
  //       console.error("Error uploading:", error.code, error.message);
  //       // Handle errors here
  //     },
  //     () => {
  //       // Upload completed successfully, now we can get the download URL
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         console.log("File available at", downloadURL);
  //         setDownloadURL(downloadURL); // Set the download URL in state
  //       });
  //     }
  //   );
  // };

  const confirm = async () => {
    let name = document.getElementById("name").value;
    const divdisplay = document.querySelector("#display");
    try {
      let response = await fetch(
        `https://exm1-fhj3nm4qsq-uc.a.run.app/api/${name}`
      );
      let searchFruit = await response.json();

      console.log(searchFruit);

      let searchNutritionformatted = nutritionsformat(searchFruit.nutritions);
      console.log(searchNutritionformatted);

      let searchFruitHTML = `
      <div class="innerBox">
        <h3>${searchFruit.name}</h3>
        <div>${searchNutritionformatted}</div>
      </div>
      `;

      divdisplay.style.display = "block";
      document.getElementById("display").innerHTML = searchFruitHTML;
    } catch (error) {
      alert("ERROR! INPUT THE CORRECT NAME OF THE FRUIT");
      console.error("ERROR! COULD NOT FETCH FRUIT:", error);
    }
  };

  const picture = async () => {
    var input = document.getElementById("imageInput");
    var file = input.files[0];
    const divdisplay = document.querySelector("#display");

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
        <div class="innerBox">
          <h3>${picFruit.name}</h3>
          <div>${picNutritionformatted}</div>
        </div>
        `;

        divdisplay.style.display = "block";
        document.getElementById("display").innerHTML = picFruitHTML;
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      alert("ERROR! NO PICTURE CHOSEN");
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
    <div class="row flu">
      <div class="col-lg-12">
        <section id="get_started" class="col-12">
          <h1>Fruit Searchbar</h1>
          <div class="search">
            <input type="text" placeholder="Name of Fruit" id="name" />
          </div>

          <div class="pic">
            <input type="file" id="imageInput" accept="image/*" />
          </div>

          <button onClick={confirm} id="box">
            Search by Name
          </button>
          <button onClick={picture} id="box">
            Search by Picture
          </button>
          <div id="display"></div>
        </section>
      </div>
    </div>
  );

  {
    /* <div className="App">
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
        </div> */
  }
};

export default Get_started;
