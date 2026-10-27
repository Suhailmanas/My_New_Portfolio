import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}, <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>.
      </p>
      <div className="text-center pb-4">
        <a className="btn btn-dark btn-lg" href={`mailto:${email}?subject=Discuss%20a%20Project`}>Discuss a Project</a>
      </div>
    </>
  );
};

export default GetInTouch;
