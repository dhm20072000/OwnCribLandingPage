import React, { useEffect } from "react";
import styled from "styled-components";
import placeholderVideo from "../Assets/placeholderVideo.mp4";
import Fade from 'react-reveal/Fade';

const StyledBanner = styled.div`
  min-height: 90vh;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  // animation: 1s ease-out 0s 1 slideUp;
  align-items: center;
  // background: #ffbd59;

  > * {
    flex: 1 1 500px;
    text-align: center;
  }

  .bannerTitle {
    font-family: Poppins, sans-serif;
    font-weight: 750;
    font-size: 4rem;
    color: #03989e;
  }

  // @keyframes slideUp {
  //   0% {
  //     opacity: 0;
  //     transform: translateY(20%);
  //   }
  //   100% {
  //     opacity: 1;
  //     transform: translateY(0);
  //   }
  // }

  .bannerVideoContainer {
    position: relative;
  }

  .bannerVideo {
    object-fit: cover;
    width: 90%;
    height: auto;
  }
`;

const Banner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledBanner>
      <Fade left>
        <h1 className="bannerTitle">
          Take A Look At What's <br />
          To Come Soon:
        </h1>
      </Fade>
      <Fade right>
        <div className="bannerVideoContainer">
          <video className="bannerVideo" controls>
            <source src={placeholderVideo} />
          </video>
        </div>
      </Fade>
    </StyledBanner>
  );
};

export default Banner;
