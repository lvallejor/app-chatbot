/* eslint-disable */

import React, { useState } from "react";
import axios from "axios";

function App() {
  const [content, setContent] = useState("");
  const [response, setResponse] = useState(null);
  const [image, setImage] = useState(null);

  const handleInputChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const respuestaApi = await axios.post(
        `https://api-chatgpt.herokuapp.com/chatbot/?content=${content}`
      );
      const responseData = await respuestaApi.data;
      console.log(responseData);
      setResponse(responseData.respuesta);

      // Make a second API call to get the image
      const imagenApi = await axios.post(
        `https://api-chatgpt.herokuapp.com/imagen/?content=${content}`
      );
      const imageData = await imagenApi.data;
      console.log(imageData.Imagen);
      setImage(imageData.Imagen);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="content">Como te asisto:</label>
        <input
          type="text"
          id="content"
          value={content}
          onChange={handleInputChange}
        />
        <button type="submit">Preguntar</button>
      </form>

      {response && (
        <div>
          <p>{response}</p>
        </div>
      )}

      {image && (
        <div>
          <img src={image} alt="related image" />
        </div>
      )}
    </div>
  );
}

export default App;
