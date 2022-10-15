import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";

const Language = ({ name, img, options }) => {
  const [showImage, setShowImage] = useState(true);
  return (
    <Container
      onClick={() => setShowImage(!showImage)}
      className="p-4 rounded-3 h-100 lang-card"
      style={{ background: "#FC8DCA" }}
      type="button"
    >
      {showImage && (
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <Image src={img} width="70" className="lang-logo"></Image>
          <h3 className="display-6 ">{name}</h3>
        </Container>
      )}
      {!showImage && (
        <ul className="h-100 d-flex flex-column justify-content-center">
          {options.map((item) => {
            return <li className="text-start h5 fw-bold">{item}</li>;
          })}
        </ul>
      )}
    </Container>
  );
};

export default Language;
