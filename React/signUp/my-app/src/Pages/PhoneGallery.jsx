import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

function PhotoGallery() {
  return (
    <div className="d-flex justify-content-center">
      <Container>
        <h2 className="text-center">Phone Gallery</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://t3.ftcdn.net/jpg/04/45/78/92/240_F_445789294_WlaI1lnvHgvckyeZuuPZCg7rGY1iVDMZ.jpg"
              alt="First slide"
              style={{ objectFit: "cover", maxHeight: "500px" }}
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://t4.ftcdn.net/jpg/04/57/02/53/240_F_457025354_AJqgYuvduDWzbVYQdDABcC8EuUK3Ry1F.jpg"
              alt="Second slide"
              style={{ objectFit: "cover", maxHeight: "500px" }}
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://t4.ftcdn.net/jpg/07/86/01/59/240_F_786015975_8lK59YGjc8jWzqvnnl8FrFN13UOMiKV8.jpg"
              alt="Third slide"
              style={{ objectFit: "cover", maxHeight: "500px" }}
            />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default PhotoGallery;
