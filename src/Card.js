import React from "react";
import "src/Card.css";

function Card({ title, description, image, link }) {
  return (
    <>
      <div className="card">
        <img src={image} className="card-img-top" alt={`${title} logo`} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-description">{description}</p>
          <a
            href={link}
            className="btn btn-primary card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
