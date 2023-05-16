import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { SiHackerrank } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span className="EMAIL">poulami2516of@gmail.com</span>
        <div className="f-icons">
          {/* <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} /> */}
          <a
            href="https://www.linkedin.com/in/poulami-paul-69a988220/"
            target="_blank"
          >
            {" "}
            <GrLinkedin />
          </a>

          <a href="https://github.com/Poulami2515" target="_blank">
            {" "}
            <FaGithub />
          </a>
          {/* <a
            href="https://codeforces.com/profile/sectumsempra07"
            target="_blank"
          >
            {" "}
            <SiCodeforces />
          </a> */}
          <a href="https://leetcode.com/Poulami_Paul/" target="_blank">
            {" "}
            <SiLeetcode />
          </a>
          {/* <a
            href="https://www.codechef.com/users/sectumsempra07"
            target="_blank"
          >
            <SiCodechef />
          </a> */}
          {/* <a href="https://www.hackerrank.com/sectumsempra07" target="_blank">
            <SiHackerrank />
          </a>
          <a href="https://www.facebook.com/gourabmodak07/" target="_blank">
            {" "}
            <SiFacebook />
          </a> */}
          <a href="https://www.instagram.com/_lustre_1_/" target="_blank">
            {" "}
            <RiInstagramFill />
          </a>
          <a href="https://twitter.com/_Lustre_1_" target="_blank">
            {" "}
            <BsTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
