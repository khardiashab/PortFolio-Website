import React, { useState } from 'react';
import { Col, Form } from 'react-bootstrap';

const ImageInput = () => {
  const [image, setImage] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImage(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImage(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Col sm={12} md={6} lg={4} className="mb-3">
      <Form.Group>
        <Form.Label>Image Input</Form.Label>
        <div
          onDrop={handleDrop}
          onDragOver={(event) => event.preventDefault()}
          onClick={(event) => event.stopPropagation()}
          className="border rounded p-3"
          style={{ cursor: 'pointer' }}
        >
          {image ? (
            <img
              src={image}
              alt="Selected"
              className="img-fluid rounded"
              style={{ maxHeight: '200px' }}
            />
          ) : (
            <p className="text-center m-0">Drag and drop an image or click to select a file.</p>
          )}
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="position-absolute"
            style={{ opacity: 0, top: 0, left: 0, bottom: 0, right: 0, cursor: 'pointer' }}
          />
        </div>
      </Form.Group>
    </Col>
  );
};

export default ImageInput;
