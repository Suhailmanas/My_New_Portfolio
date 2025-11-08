import React, { useCallback, useEffect, useState } from "react";
import laptopImg from "../../assets/img/about.png";
import axios from "axios";
import { Jumbotron } from "./migration";
import { Col } from "react-bootstrap";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgWidth, imgHeight, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [showPic, setShowPic] = useState(Boolean(link));
  // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);

  console.log(profilePicUrl,"profilePicUrl");
  

  const downloadResume = useCallback(() => {
    const link = document.createElement("a");
    link.href = resume;
    console.log(link);
    link.download = "Md_Suhail_manas";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [resume]);

  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {showPic && (
            <Col md={5} style={{ width: "380px" }} className="about-img">
              <img
                className="moveArrow"
                src={laptopImg}
                alt="profilepicture"
                width="100%"
                height="100%"
              />
            </Col>
          )}
        </div>
        <div className={`col-lg-7 d-flex align-items-center flex-column`}>
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead text-center mb-5">{message}</p>
          <button
            type="button"
            className="btn btn-light btn-lg"
            onClick={downloadResume}
          >
            Download Resume
          </button>
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
