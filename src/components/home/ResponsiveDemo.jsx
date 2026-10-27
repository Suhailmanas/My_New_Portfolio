import React from "react";
import { Container } from "react-bootstrap";
import { Jumbotron } from "./migration";
import fixedLayout from "../../assets/img/Screenshot 2026-10-26 201744.png";
import brokenLayout from "../../assets/img/Screenshot 2026-10-26 201648.png";

const ResponsiveDemo = () => (
  <Jumbotron fluid id="responsive-demo" className="bg-white m-0">
    <Container className="py-5">
      <p className="section-eyebrow text-center">Before and after</p>
      <h2 className="display-4 pb-3 text-center">Inventory dashboard layout fix</h2>
      <p className="lead text-center demo-intro">
        The dashboard cards were distorted and unevenly spaced, making the performance summary difficult to scan. The fix restores consistent card sizing, spacing, and alignment for a clear, usable layout.
      </p>
      <div className="demo-grid">
        <article className="demo-state demo-before">
          <div className="demo-state-heading"><span className="demo-dot" /> Before <span className="demo-tag">Broken UI</span></div>
          <a className="demo-image-link" href={brokenLayout} target="_blank" rel="noreferrer" aria-label="Open the broken inventory dashboard screenshot">
            <img className="demo-screenshot" src={brokenLayout} alt="Broken inventory dashboard with unevenly sized, misaligned performance cards" />
          </a>
          <p className="demo-caption">Cards have inconsistent dimensions and alignment, leaving large empty areas and disrupting the dashboard hierarchy.</p>
        </article>
        <article className="demo-state demo-after">
          <div className="demo-state-heading"><span className="demo-dot" /> After <span className="demo-tag">Fixed UI</span></div>
          <a className="demo-image-link" href={fixedLayout} target="_blank" rel="noreferrer" aria-label="Open the fixed inventory dashboard screenshot">
            <img className="demo-screenshot" src={fixedLayout} alt="Fixed inventory dashboard with consistently sized and aligned performance cards" />
          </a>
          <p className="demo-caption">Consistent card sizing and spacing make key sales and purchase metrics easier to read at a glance.</p>
        </article>
      </div>
      <p className="demo-explanation text-center">Select either screenshot to view it at full size.</p>
      <div className="text-center demo-links"><a href="https://github.com/Suhailmanas" target="_blank" rel="noreferrer">Browse source code on GitHub</a></div>
    </Container>
  </Jumbotron>
);

export default ResponsiveDemo;
