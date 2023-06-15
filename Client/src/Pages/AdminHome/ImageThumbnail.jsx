import React from "react";

const ImageThumbnail = ({ src, alt, title, description }) => {
  return (
    <div className="image-thumbnail">
      <img src={"https://unsplash.com/photos/e-wA6_I26kw"} alt={alt} />
      <div className="image-content">
        <h3>{title} This is title</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageThumbnail;
