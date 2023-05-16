import React, { useContext } from "react";

import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.jpeg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Codeforces from "../../img/codeforces.png";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hola! Its</span>
          <span>Poulami Paul Didi</span>
          <span>
            Scholar @ NXP WIT 2022 | IEEE Student Branch JGEC | Machine Learning
            and Deep Learning Enthusiast
          </span>
        </div>

        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
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
          {/* <img src={Github} className="social-image" alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
          <img src={Codeforces} alt="" />
          <img src={Instagram} alt="" /> */}
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-54%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "15%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Scholar @ NXP" text2="WIT" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv
            img={thumbup}
            text1="Machine Learning Deep Learning Enthusiast"
            text2=""
          />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
