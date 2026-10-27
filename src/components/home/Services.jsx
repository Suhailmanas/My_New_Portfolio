import React from "react";
import { Container } from "react-bootstrap";
import { Jumbotron } from "./migration";

const Services = () => (
  <Jumbotron fluid id="services" className="bg-light m-0">
    <Container className="py-5">
      <p className="section-eyebrow text-center">What I can help with</p>
      <h2 className="display-4 pb-4 text-center">React / Next.js bug fixes</h2>
      <div className="service-panel mx-auto">
        <p className="lead">Focused help for small, clearly scoped frontend tasks:</p>
        <ul className="service-list">
          <li>React or Next.js bug fixes</li>
          <li>Responsive UI issues across mobile and desktop</li>
          <li>Component fixes and polish</li>
          <li>Small REST API integration tasks</li>
        </ul>
        <div className="service-bottom">
          <p className="mb-0"><span className="price-label">Starting at</span><strong className="service-price">&#8377;1,500</strong><span className="text-muted"> for a clearly scoped small task</span></p>
          <a className="btn btn-dark" href="mailto:manassuhail@gmail.com?subject=React%20or%20Next.js%20project">Discuss a Project</a>
        </div>
      </div>
    </Container>
  </Jumbotron>
);

export default Services;
