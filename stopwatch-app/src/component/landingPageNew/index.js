// src/components/Stopwatch.js

import React, { useState, useEffect, useRef } from "react";
import "./landingpage.scss";
import ReactLogo from "../ui-components/logo/logoComponent";
// import { ReactComponent as LandingPageBackground } from "../assets/landingpage.avif";
import landingPage from "../assets/landingpage.avif";
import videoFile from "../assets/main-circle-heavy.mp4";

import TextBox from "../ui-components/textBox/textBox";
import Header from "../header";
import Grid from "../ui-components/grid-component";

const LandingPageNew = () => {
  // const [time, setTime] = useState(0);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const video = videoRef?.current;
    const canvas = canvasRef?.current;
    const ctx = canvas?.getContext("2d");

    video?.addEventListener("play", function () {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      function removeGreenScreen() {
        if (!video.paused && !video.ended) {
          ctx.drawImage(video, 0, 0, canvas?.width, canvas?.height);
          let frame = ctx.getImageData(0, 0, canvas?.width, canvas?.height);
          let data = frame.data;

          for (let i = 0; i < data.length; i += 4) {
            let r = data[i],
              g = data[i + 1],
              b = data[i + 2];

            // Adjust this condition to match your video's background color
            if (g > 100 && r < 100 && b < 100) {
              data[i + 3] = 0; // Make the pixel transparent
            }
          }

          ctx.putImageData(frame, 0, 0);
          requestAnimationFrame(removeGreenScreen);
        }
      }

      removeGreenScreen();
    });
  }, []);
  return (
    <>
      {/* <LandingPageBackground /> */}
      <img src={landingPage} className="test" />
      <div className="landingPage">
        {/* <Grid /> */}

        <Header className="header_components" />
        <div className="main_wrapper">
          <div className="letf_wrapper">
            {" "}
            {/* <div className="ring_wrapper  hero-circle"> */}
            {/* <iframe
                width="600"
                height="350"
                src={videoFile}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScree={false}
                allowpaymentrequest={false}
              ></iframe> */}
            {/* 
              <main id="Hero" className="hero">
                <div className="hero-circle">
                  <video
                    id="hero-video"
                    loop
                    muted
                    playsInline
                    autoPlay
                    className="video-fill"
                    preload="metadata"
                    ref={videoRef}
                  >
                    <source
                      id="video-source"
                      className="video-fill"
                      src={videoFile}
                      type="video/mp4"
                    />
                  </video>
                  <canvas ref={canvasRef} className="video-canvas"></canvas>
                </div>
              </main> */}
            {/* <div className="blue_ring position_0"></div>
        <div className="blue_ring1 position_1"></div>
        <div className="blue_ring1 position_2"></div>
        <div className="blue_ring1 position_3"></div> */}
            {/* <div className="blue_ring2 position_4"></div> */}
            {/* <div className="blue_ring2 position_5"></div>
        <div className="blue_ring1 position_6"></div>
        <div className="blue_ring2 position_7"></div> */}
            {/* </div>{" "} */}
          </div>

          <div className="right_wrapper">
            {/* <ReactLogo /> */}
            <TextBox
              className={"landingPageTitle"}
              child={"Building Beyond the DOM"}
            />
          </div>
        </div>
        <div className="about_us"></div>
      </div>
    </>
  );
};

export default LandingPageNew;
