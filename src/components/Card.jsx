import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Language from "./Language";
import { data } from "../helpers/data";

const Card = () => {
  return (
    <Container className="rounded-3 mt-4 p-4" style={{ background: "#AAECFC" }}>
      <h1 className=" my-2">Languages</h1>
      <Row className="gap-3 justify-content-center align-items-center">
        {data.map((lang, index) => {
          return (
            <Col sm={6} md={4} lg={3} key={index}>
              <Language {...lang} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Card;

//! return <Language lang={lang} />; böyle spread edersek diğer sayfada direkt keylere göre destructuring yaparsın ama yukarıdaki gibi yaparsan sadece lang dest. ile yakalarsın değişiklik yaptım yazdığımın tam tersi ifade olacak
