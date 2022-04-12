import { Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p style={{ fontSize: "2rem", marginBottom: "3rem" }}>
        If you want to know more about me, send me a message. I'd love to hear
        from you.{" "}
      </p>
      <div className="contact-div">
        <button
          className="contact-btn"
          onClick={() =>
            window.open("mailto:harisudhan1008@gmail.com", "_blank")
          }
          variant="contained"
        >
          <MailOutlineIcon /> harisudhan1008@gmail.com
        </button>
        <button
          className="contact-btn"
          onClick={() => window.open("tel:+919786352542")}
        >
          <PhoneIcon />
          +91 9791749054
        </button>
        <button className="contact-btn" variant="contained">
          <LocationOnIcon />
          Perambalur, Tamil Nadu
        </button>
      </div>
    </div>
  );
}
