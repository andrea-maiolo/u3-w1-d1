import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageComponent from "./components/Imagecomponent";
import TextComponent from "./components/Textcomponent";
import { useState } from "react";

function App() {
  const [photoId, setPhotoID] = useState(376);

  const handleClick = function () {
    setPhotoID(Math.floor(Math.random() * 500));
    console.log(photoId);
  };

  let imageUrl = `https://picsum.photos/id/${photoId}/200/300`;

  return (
    <div className="container-app">
      <Header className="nav-header" />
      <ButtonComponent className="myBtn" textBtn="clicka per cambiare imagine" onClick={handleClick} />
      <div>
        <ImageComponent className="image-container" classText="image-description" imageSource={imageUrl} imageAlt="imagine randomica" />
      </div>
      <TextComponent className="text-component" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
