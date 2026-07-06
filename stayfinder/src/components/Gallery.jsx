import { useState } from "react";

function Gallery({ photos }) {

  const [selectedImage, setSelectedImage] = useState(
    photos?.[0] || ""
  );

  return (
    <div>

      <img
        src={selectedImage}
        alt="Hotel"
        className="main-image"
      />

      <div className="thumbnail-container">

        {photos?.map((photo, index) => (

          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className={`thumbnail ${
              selectedImage === photo ? "active" : ""
            }`}
            onClick={() => setSelectedImage(photo)}
          />

        ))}

      </div>

    </div>
  );
}

export default Gallery;