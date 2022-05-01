import pinterest from "./images/pinterest.png";
import videoconverter from "./images/video-converter.png";
import shopping from "./images/shopping-cart.png";
import moviereview from "./images/moviereview.png";
import { Button } from "@mui/material";
export function Project() {
  return (
    <div className="projects">
      <h2>Project</h2>
      <div className="overall-div">
        <div className="project-div">
          <br />
          <h3 style={{ margin: "0px", padding: "0px" }}>Pinterest clone </h3>
          <img src={pinterest} className="project-img" />
          <p>
            MERN Stack app with feature like Create Account and complete
            password reset flow, Post ideas , Home feed,view Profile and Pins,
            Modify personel detials and Profile picture.
          </p>
          <Button
            variant="contained"
            onClick={() =>
              window.open("https://hari-pinterest-clone.netlify.app", "_blank")
            }
          >
            LIVE
          </Button>{" "}
          <Button
            variant="contained"
            onClick={() =>
              window.open(
                "https://github.com/Harisudhan-Nagarajan/pinterest-frontend",
                "_blank"
              )
            }
          >
            SOURCE
          </Button>
        </div>
        <div className="project-div">
          <br />
          <h3 style={{ margin: "0px", padding: "0px" }}> Ecommerce Website</h3>
          <img src={shopping} className="project-img" />
          <p>
            Basic Ecommerce app , feature like Create account, view cart,
            checkout and payment.
          </p>
          <Button
            variant="contained"
            onClick={() =>
              window.open(
                "https://lustrous-tulumba-f41cb8.netlify.app/",
                "_blank"
              )
            }
          >
            LIVE
          </Button>{" "}
          <Button
            variant="contained"
            onClick={() =>
              window.open(
                "https://github.com/Harisudhan-Nagarajan/shopping-cart",
                "_blank"
              )
            }
          >
            SOURCE
          </Button>
        </div>
        <div className="project-div">
          <br />
          <h3 style={{ margin: "0px", padding: "0px" }}>Video Converter</h3>
          <img src={videoconverter} className="project-img" />
          <p>
            A Desktop application to convert a mp4 video file to HLS(m3u8) video
            file using Electron JS and FFMPEG plugin
          </p>

          <Button
            variant="contained"
            onClick={() =>
              window.open(
                "https://github.com/Harisudhan-Nagarajan/Video-Converter",
                "_blank"
              )
            }
          >
            SOURCE
          </Button>
        </div>
        <div className="project-div">
          <br />
          <h3 style={{ margin: "0px", padding: "0px" }}>Movie Review</h3>
          <img src={moviereview} className="project-img" />
          <p>
            MERN Stack app with feature like Create Account and rate movies ,
            Movies info.
          </p>
          <Button
            variant="contained"
            onClick={() =>
              window.open("https://hari-movie-review.netlify.app/", "_blank")
            }
          >
            LIVE
          </Button>{" "}
          <Button
            variant="contained"
            onClick={() =>
              window.open(
                "https://github.com/Harisudhan-Nagarajan/movie-review-frontend",
                "_blank"
              )
            }
          >
            SOURCE
          </Button>
        </div>
      </div>
    </div>
  );
}
