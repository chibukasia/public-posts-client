import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import TwitterIcon from "@mui/icons-material/Twitter";

function Contact() {
  return (
    <div>
      <div className="contact-div">
        <h2>Contact us</h2>
      </div>
      <div className="contact-details">
        <h2>Reach Us Via</h2>
        <a href="mailto: chibukasianelson@gmail.com">
          <h5>
            <MailIcon /> chibukasianelson@gmail.com
          </h5>
        </a>
        <h5>
          <PermPhoneMsgIcon /> +254710615728
        </h5>
        <a href="https://twitter.com/chibukasiaNelly">
          <h5>
            <TwitterIcon /> @chibukasiaNelly
          </h5>
        </a>
        <h5>Location</h5>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="100%"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>

            {/* <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style> */}
            {/* <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style> */}
          </div>
        </div>
      </div>
      <div className="footer">
        <p>
          &#169; 2022{" "}
          <a href="https://twitter.com/chibukasiaNelly">
          <i className="bi bi-twitter"></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
