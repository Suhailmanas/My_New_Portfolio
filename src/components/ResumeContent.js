import React from "react";

function ResumeContent(props) {
  return (
    <div className="resume-item" style={{margin:"2rem 0"}}>
      <h5 className={`${props.title ? "resume-title" : "resume-no-title"}`}>
        {props.title}
      </h5>
      <p>
        <em>{props.date}</em>
      </p>
      <h6 className={`${props.subtitle ? "resume-title" : "resume-no-title"} mt-5`}>
        {props.subtitle}
      </h6>
      <ul>
        {props.content.map((value, index) => (
          <li key={index} style={{listStyleType: "none",margin:"0.5rem 0",fontFamily:"system-ui"}}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeContent;
