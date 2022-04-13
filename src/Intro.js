import image1 from "./images/image1.png";
import GitHub from "./images/github.png";
import linkedin from "./images/linkedin.png";
import insta from "./images/insta.png";
import { IconButton, Button } from "@mui/material";
import cloudbg from "./images/cloudBg.png";
export function Intro() {
  return (
    <div className="intro" style={{ backgroundImage: `url(${cloudbg})` }}>
      <div className="intro-left">
        <h1>Hi, I am Hari</h1>
        <h1>Full Stack Developer</h1>
        <div>
          <IconButton
            size="large"
            onClick={() =>
              window.open("https://github.com/Harisudhan-Nagarajan", "_blank")
            }
          >
            <img src={GitHub} />
          </IconButton>
          <IconButton
            size="large"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/hari-sudhan-03693621a",
                "_blank"
              )
            }
          >
            <img src={linkedin} />
          </IconButton>
        </div>
        <Button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1P4oATeryFKaQqLF-3cw_PDSyDYdbFI0N/view?usp=sharing",
              "_blank"
            )
          }
          variant="contained"
          sx={{ width: "7rem", margin: "1rem" }}
          size="large"
        >
          RESUME
        </Button>
      </div>
      <img className="introimg" src={image1} />
    </div>
  );
}
