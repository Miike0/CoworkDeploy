import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function MyProjectsUP() {

    const layouts = {
        1 : "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        2 : "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        3 : "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }

    return (
        <div className="myProjects-container">
            <span className="title">Proyectos</span>
            <Carousel variant="dark" className="myProjects-carousel">
                <Carousel.Item className="carousel-item">
                    <img
                    className="d-block w-100"
                    src={layouts[1]}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                    className="d-block w-100"
                    src={layouts[2]}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                    className="d-block w-100"
                    src={layouts[3]}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>

        </div>
    ); 
}

export default MyProjectsUP;