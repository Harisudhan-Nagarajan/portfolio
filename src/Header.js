import { Button, SpeedDial } from "@mui/material";
import Link from "react-scroll/modules/components/Link";

export function Header() {
  const btnstyle = {
    backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
    fontSize: ".975rem",
    "&:hover": { backgroundColor: " rgb(59, 59, 201)", color: "white" },
  };
  function handleactive(to) {
    console.log(to);
  }
  return (
    <div>
      <div className="header">
        <Link to="intro" smooth={true}>
          <Button variant="text" sx={btnstyle}>
            Home
          </Button>
        </Link>
        <Link to="about" smooth={true}>
          <Button sx={btnstyle} variant="text">
            About
          </Button>
        </Link>
        <Link to="projects" smooth={true}>
          <Button sx={btnstyle} variant="text">
            Project
          </Button>
        </Link>
        <Link to="contact" smooth={true}>
          <Button sx={btnstyle} variant="text">
            contact
          </Button>
        </Link>
      </div>
      <div>
      
      </div>
    </div>
  );
}
