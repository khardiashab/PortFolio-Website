import { useState } from 'react';
import {Col, Form, Button } from 'react-bootstrap';
import './Projectinput.scss';

const categories = ['Web Development', 'Mobile Development', 'Data Science', 'DevOps', 'UI/UX Design'];
const technologies = ['React', 'Angular', 'Vue', 'Node.js', 'Express', 'Django', 'Flask', 'Laravel'];

const InputForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [githubRepo, setGithubRepo] = useState('');
  const [images, setImages] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleTechnologyChange = (event) => {
    const technology = event.target.value;
    if (!selectedTechnologies.includes(technology)) {
      setSelectedTechnologies([...selectedTechnologies, technology]);
    }
  };

  const handleRemoveTechnology = (technology) => {
    setSelectedTechnologies(selectedTechnologies.filter((t) => t !== technology));
  };

  const handleGithubRepoChange = (event) => {
    setGithubRepo(event.target.value);
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages([...images, ...files]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} className="mx-auto">

    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} onChange={handleTitleChange} required />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={4} value={description} onChange={handleDescriptionChange} required />
      </Form.Group>

      <Form.Group controlId="formCategory">
        <Form.Label className="select-list__label">Category</Form.Label>
        <div className="select-list">
          <div className="select-list__column">
            <select className="select-list__select" value={category} onChange={handleCategoryChange} required>
              <option value="" disabled hidden>Select a category</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <div className="select-list__options">
              {categories.map((c) => (
                <div
                  key={c}
                  className="select-list__option"
                  onClick={() => {
                    setCategory(c);
                  }}
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Form.Group>

      <Form.Group controlId="formTechnologies">
        <Form.Label className="select-list__label">Technologies</Form.Label>
        <div className="select-list">
          <div className="select-list__column">
            <select className="select-list__select" value="" onChange={handleTechnologyChange}>
              <option value="" disabled hidden>Add a technology</option>
              {technologies.map((t) => (
               
               <option key={t} value={t}>
               {t}
             </option>
           ))}
         </select>
         <div className="select-list__options">
           {selectedTechnologies.map((t) => (
             <div key={t} className="select-list__option" onClick={() => handleRemoveTechnology(t)}>
               {t} <span className="select-list__remove">×</span>
             </div>
           ))}
         </div>
       </div>
     </div>
   </Form.Group>

   <Form.Group controlId="formGithubRepo">
     <Form.Label>Github Repository URL</Form.Label>
     <Form.Control type="url" value={githubRepo} onChange={handleGithubRepoChange} required />
   </Form.Group>

   <Form.Group controlId="formImages">
     <Form.Label>Images</Form.Label>
     <Form.Control type="file" multiple onChange={handleImageChange} accept="image/*" />
     <div className="mt-2">
       {images.map((image, index) => (
         <div key={index} className="d-inline-block me-2">
           <img src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} className="img-thumbnail" />
         </div>
       ))}
     </div>
   </Form.Group>

   <Button variant="primary" type="submit">
     Submit
   </Button>
 </Form>
 </Col>
);
};

export default InputForm;
