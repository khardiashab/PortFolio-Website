import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './SkillsInput.scss';

const AddSkills = () => {
  const [skillName, setSkillName] = useState('');
  const [image, setImage] = useState(null);
  const [featured, setFeatured] = useState(false);

  const handleSkillNameChange = (e) => {
    setSkillName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleFeaturedChange = (e) => {
    setFeatured(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      skillName,
      image,
      featured,
    });
  };

  return (
    <div className="add-skills-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="skillName">
          <Form.Control
            type="text"
            placeholder="Skill Name"
            value={skillName}
            onChange={handleSkillNameChange}
            required
          />
          <Form.Label>Skill Name</Form.Label>
        </Form.Group>

        <Form.Group controlId="image">
          <div className="image-upload w-25 object-fit-cover">
            {image ? (
              <img src={URL.createObjectURL(image)} alt="Selected Image" />
            ) : (
              <>
                <span className="upload-icon"></span>
                <span>Upload Image</span>
              </>
            )}
            <Form.Control
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={handleImageChange}
              className="input-file"
            />
          </div>
          <Form.Label>Image</Form.Label>
        </Form.Group>

        <Form.Group controlId="featured">
          <Form.Check
            type="checkbox"
            label="Featured"
            checked={featured}
            onChange={handleFeaturedChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mx-auto d-block">
          Add Skill
        </Button>
      </Form>
    </div>
  );
};

export default AddSkills;
