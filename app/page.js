"use client";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TextField from "@mui/material/TextField";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import InstagramIcon from "@mui/icons-material/Instagram";
import React, { useState } from "react";
import NavigationIcon from "@mui/icons-material/Navigation";
import { animateScroll as scroll, Link } from "react-scroll";
import CircularProgress from "@mui/material/CircularProgress";
import useWindowSize from "../utils/useWindowSize";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

export default function Home() {
  const [data, Setdata] = useState("Skills");
  const [isLoading, setIsLoading] = useState(false);
  const windowSize = useWindowSize();
  const onClickTop = () => {
    scroll.scrollToTop();
  };
  const onClickSend = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/profile";
    }, 8000);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {windowSize.width >= 699 ? (
        <main>
          <div className="lg:h-screen lg:bg-black lg:w-full lg:bg-[url('../public/bg.png')] lg:bg-no-repeat lg:bg-center lg:bg-cover lg:overflow-hidden">
            <div className="lg:h-20 lg:w-full lg:flex lg:fixed ">
              <div className="lg:h-20 lg:w-1/2  lg:flex lg:items-end  lg:justify-end">
                <div className="lg:h-12 lg:w-10/12 ">
                  <span className=" lg:h-12 lg:text-[#ed4956] lg:text-5xl lg:font-bold lg:mt-4">
                    A
                  </span>
                  <span className="lg:text-4xl lg:text-white  lg:font-semibold">
                    ditya.
                  </span>
                </div>
              </div>
              <div className="lg:flex lg:text-white lg:h-20 lg:w-1/2 lg:items-end lg:text-white">
                <div className="lg:h-12 lg:w-4/5 lg:ml-14 lg:cursor-pointer lg:text-white">
                  <ul className="lg:flex lg:justify-evenly lg:items-center lg:text-white  lg:h-12 lg:cursor-pointer">
                    <Link to={"homepage"} smooth={true}>
                      {" "}
                      <li style={{ cursor: "pointer" }}>Home</li>
                    </Link>
                    <Link to={"aboutpage"} smooth={true}>
                      {" "}
                      <li style={{ cursor: "pointer" }}>About</li>
                    </Link>
                    <Link to={"servicespage"} smooth={true}>
                      <li style={{ cursor: "pointer" }}>Services</li>
                    </Link>
                    <Link to={"projectpage"} smooth={true}>
                      {" "}
                      <li style={{ cursor: "pointer" }}>Project</li>
                    </Link>

                    <Link to={"contactpage"} smooth={true}>
                      <li style={{ cursor: "pointer" }}>Contact</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>

            <div id="homepage" className="lg:h-5/6 lg:w-full lg:flex ">
              <div className="lg:h-5/6 lg:w-1/2  lg:flex lg:items-end lg:justify-end ">
                <div className="lg:h-96 lg:w-10/12  lg:flex lg:flex-col lg:items-start lg:justify-center">
                  <span className=" lg:h-10 lg:text-xl lg:text-white">
                    UI/UX Designer
                  </span>
                  <span className=" lg:h-6 lg:text-5xl lg:font-semibold lg:text-white">
                    Hi, I'm{" "}
                    <span className="lg:text-[#ed4956] lg:h-6 lg:text-5xl lg:font-semibold">
                      Aditya
                    </span>
                  </span>
                  <span className="lg:h-10 lg:text-white lg:text-5xl lg:font-semibold lg:mt-7">
                    Kumar from India
                  </span>
                </div>
              </div>
              <div className="lg:h-full lg:w-1/2 lg:items-end "></div>
            </div>
          </div>

          <div
            id="aboutpage"
            className=" lg:flex lg:bg-black lg:h-screen lg:flex lg:justify-center lg:items-center lg:overflow-hidden"
          >
            <div className="lg:h-full lg:w-2/5  lg:flex lg:justify-end lg:items-center">
              <div className="lg:h-3/5 lg:w-8/12 lg:bg-[#363636] lg:bg-[url('/what.jpg')] lg:bg-no-repeat lg:bg-center lg:bg-cover "></div>
            </div>
            <div className="lg:h-full lg:w-4/5 lg:flex lg:justify-center lg:items-center">
              <div className="lg:h-3/5 lg:w-10/12">
                <div className="lg:h-1/6 lg:p-4 lg:text-white  lg:flex lg:items-center lg:text-6xl lg:font-semibold ">
                  About Us
                </div>
                <div className="lg:h-3.5/6 lg:p-3 lg:w-full lg:text-white">
                  Hello! I'm Aditya, a passionate and driven third-year Btech
                  ECE student. My journey in the world of technology has been
                  nothing short of thrilling. My insatiable curiosity and knack
                  for quickly learning new skills and programming languages have
                  allowed me to make remarkable strides in the field of software
                  development and problem-solving.
                  <br />
                  Throughout my academic journey, I've diligently honed my
                  knowledge and skills in a wide range of technologies.
                  Proficient in HTML, CSS, C++, React, Next.js, Tailwind CSS,
                  and JavaScript, I've proven myself as a versatile and
                  resourceful developer. My ability to grasp complex concepts
                  and apply them in real-world scenarios has been instrumental
                  in my academic achievements.
                </div>
                <div className=" lg:text-white lg:h-10 lg:w-1/2 lg:flex lg:justify-evenly lg:p-5">
                  <ul className="lg:flex lg:h-10 lg:w-full lg:justify-between">
                    <li>
                      <button
                        className="lg:hover: font-bold transition lg:duration-150 lg:border-b-4 lg:border-transparent lg:text-white lg:hover:border-[#ed4956]"
                        onClick={() => Setdata("Skills")}
                      >
                        Skills
                      </button>
                    </li>
                    <li>
                      <button
                        className="lg:hover: font-bold transition lg:duration-150 lg:border-b-4 lg:border-transparent lg:text-white lg:hover:border-[#ed4956]"
                        onClick={() => Setdata("Experience")}
                      >
                        Experience
                      </button>
                    </li>
                    <li>
                      <button
                        className="lg:hover: font-bold lg:transition lg:duration-150 lg:border-b-4 lg:border-transparent lg:text-white lg:hover:border-[#ed4956]"
                        onClick={() => Setdata("Education")}
                      >
                        Education
                      </button>
                    </li>
                  </ul>
                </div>
                <div className=" lg:h-2/5 lg:w-full lg:p-3">
                  {data === "Skills" && (
                    <div className="lg:h-full lg:w-full lg:p-2">
                      <ul>
                        <li className="lg:text-sl lg:font-bold lg:text-[#ed4956]">
                          UI/UX
                        </li>
                        <span className="lg:text-xs lg:text-white">
                          Designing Web/App interfaces
                        </span>
                        <li className="lg:text-sl lg:font-bold lg:text-[#ed4956]">
                          Web Development
                        </li>
                        <span className="lg:text-xs lg:text-white">
                          Web App Development
                        </span>
                        <li className="lg:text-sl lg:font-bold lg:text-[#ed4956]">
                          C++
                        </li>
                        <span className="lg:text-xs lg:text-white">
                          Intermediate
                        </span>
                      </ul>
                    </div>
                  )}
                  {data === "Experience" && (
                    <div className="lg:h-full lg:w-full lg:p-2">
                      <ul>
                        <li className="lg:text-sl lg:font-bold lg:text-[#ed4956]">
                          AppZoTech Pvt Ltd
                        </li>
                        <span className="lg:text-xs lg:text-white">
                          Internship
                        </span>
                        <p className="lg:text-white">
                          Designed Web Pages At AppZoTech.com
                        </p>
                      </ul>
                    </div>
                  )}
                  {data === "Education" && (
                    <div className="lg:h-full lg:w-full lg:p-2">
                      <ul>
                        <li className="lg:text-sl lg:font-bold lg:text-[#ed4956]">
                          Graduation
                        </li>
                        <p className="lg:text-xs lg:text-white">2021-2025</p>
                        <span className="lg:text-sl lg:text-white">
                          B.Tech ECE
                        </span>
                        <li className="lg:text-sl lg:font-bold lg:text-[#ed4956]">
                          School
                        </li>
                        <p className="lg:text-xs lg:text-white">2009-2021</p>
                        <span className="lg:text-sl lg:text-white">
                          Kendriya Vidyalaya Faridabad,Harayana,India
                        </span>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            id="servicespage"
            className="lg:h-screen lg:bg-black lg:w-full lg:flex lg:items-center lg:justify-center lg:overflow-hidden"
          >
            <div className="lg:h-3/4 lg:w-full ">
              <div className="lg:h-1/6 lg:w-full lg:flex lg:items-center lg:justify-center">
                <div className="lg:h-full lg:w-4/5">
                  <div className="lg:h-full lg:w-full lg:text-white lg:text-6xl lg:font-semibold lg:flex lg:items-center">
                    My Services
                  </div>
                </div>
              </div>
              <div className="lg:h-5/6 lg:flex lg:justify-center">
                <div className="lg:h-full lg:w-4/5 lg:flex lg:items-center lg:justify-between ">
                  <div className="lg:h-4/5  lg:w-80 lg:rounded-2xl lg:bg-[#363636] lg:hover:bg-[#ed4956] lg:delay-200">
                    <div className="lg:h-1/5 lg:w-full lg:flex lg:item-center lg:justify-center">
                      <div className="lg:h-full lg:w-4/5 lg:flex lg:items-center">
                        <img
                          className=" lg:h-16"
                          src="aditya-unscreen.gif"
                        ></img>
                      </div>
                    </div>
                    <div className="lg:h-4/5 lg:w-full lg:flex lg:justify-center">
                      <div className="lg:h-full lg:w-4/5 ">
                        <div className="lg:h-1/5 lg:w-full lg:text-white  lg:text-xl lg:font-semibold lg:flex lg:items-center ">
                          Responsive Web Design
                        </div>
                        <div className="lg:h-4/5 lg:w-full lg:text-xs lg:text-white lg:font-semibold">
                          My skill lies in creating exceptional, responsive web
                          pages that captivate users across devices. I adeptly
                          combine design principles with coding expertise to
                          ensure seamless functionality and visual appeal. With
                          a keen eye for detail and a commitment to delivering
                          an optimal user experience, I bring websites to life
                          that adapt flawlessly to various screen sizes.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:h-4/5 lg:w-80 lg:rounded-2xl lg:bg-[#363636] lg:hover:bg-[#ed4956] lg:delay-200">
                    <div className="lg:h-1/5 lg:w-full lg:flex lg:item-center lg:justify-center">
                      <div className="lg:h-full lg:w-4/5 lg:flex lg:items-center">
                        <img className=" lg:h-5/6" src="code.png"></img>
                      </div>
                    </div>
                    <div className="lg:h-4/5 lg:w-full lg:flex lg:justify-center">
                      <div className="lg:h-full lg:w-4/5">
                        <div className="lg:h-1/5 lg:w-full lg:text-white  lg:text-xl lg:font-semibold lg:flex lg:items-center">
                          Web development
                        </div>
                        <div className="lg:h-4/5 lg:w-full lg:text-white lg:text-xs lg:font-semibold">
                          Mastery in web development is my forte. Armed with a
                          diverse skill set, I proficiently navigate through
                          various programming languages, frameworks, and design
                          principles. Crafting dynamic and user-centric websites
                          is where my passion converges with expertise. From
                          conceptualization to deployment, I ensure robust
                          functionality and a seamless user experience.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:h-4/5 lg:w-80 lg:rounded-2xl lg:bg-[#363636] lg:hover:bg-[#ed4956] lg:delay-200">
                    <div className="lg:h-1/5 lg:w-full lg:flex lg:item-center lg:justify-center">
                      <div className="lg:h-full lg:w-4/5 lg:flex lg:items-center">
                        <img
                          className=" lg:h-5/6"
                          src="user-experience.png"
                        ></img>
                      </div>
                    </div>
                    <div className="lg:h-4/5 lg:w-full lg:flex lg:justify-center">
                      <div className="lg:h-full lg:w-4/5">
                        <div className="lg:h-1/5 lg:w-full lg:text-white lg:text-xl lg:font-semibold lg:flex lg:items-center">
                          UI/UX
                        </div>
                        <div className="lg:h-4/5 lg:text-white lg:w-full  lg:text-xs lg:font-semibold">
                          I possess a strong proficiency in UI/UX design,
                          adeptly creating interfaces that merge aesthetic
                          appeal with user-centric functionality. My meticulous
                          attention to detail ensures seamless navigation and a
                          delightful user experience. I excel in crafting
                          designs that resonate, optimizing digital interactions
                          and leaving a positive, lasting impact
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="projectpage"
            className="lg:h-screen lg:bg-black lg:w-full lg:flex lg:items-center lg:justify-center lg:overflow-hidden  "
          >
            <div className="lg:h-3/4 lg:w-full ">
              <div className="lg:h-1/6 lg:w-full lg:flex lg:items-center lg:justify-center">
                <div className="lg:h-full lg:w-4/5">
                  <div className="lg:h-full lg:text-white lg:w-full lg:text-6xl lg:font-semibold lg:flex lg:items-center">
                    My Project
                  </div>
                </div>
              </div>
              <div className="lg:h-5/6 lg:flex lg:justify-center">
                <div className="lg:h-full lg:w-4/5 lg:flex lg:items-center lg:justify-between ">
                  <div className="lg:h-4/5  lg:w-80 lg:rounded-2xl lg:bg-[#363636] lg:hover:bg-[#ed4956] lg:delay-200">
                    <div className="lg:h-1/5 lg:w-full lg:flex lg:item-center lg:justify-center">
                      <div className="lg:h-full lg:w-4/5 lg:flex lg:items-center">
                        <img className=" lg:h-5/6" src="favicon.png"></img>
                      </div>
                    </div>
                    <div className="lg:h-4/5 lg:w-full lg:flex lg:justify-center">
                      <div className="lg:h-full lg:w-4/5 ">
                        <div className="lg:h-1/5 lg:w-full lg:text-white lg:text-xl lg:font-semibold lg:flex lg:items-center ">
                          AppZoTech
                        </div>
                        <div className="lg:h-4/5 lg:w-full lg:text-xs lg:text-white lg:font-semibold">
                          I played a pivotal role in designing web pages for
                          various websites, focusing on enhancing the
                          responsiveness of their service sections. My expertise
                          primarily revolves around React.js, Next.js, and CSS,
                          enabling me to create dynamic and engaging user
                          interfaces. I strive to optimize user experiences by
                          blending design aesthetics with technical proficiency,
                          resulting in visually appealing and seamlessly
                          functional web pages.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:h-4/5 lg:w-80 lg:rounded-2xl lg:bg-[#363636] lg:hover:bg-[#ed4956] lg:delay-200">
                    <div className="lg:h-1/5 lg:w-full lg:flex lg:item-center lg:justify-center">
                      <div className="lg:h-full lg:w-4/5 lg:flex lg:items-center">
                        <img className=" lg:h-5/6" src="netflix.png"></img>
                      </div>
                    </div>
                    <div className="lg:h-4/5 lg:w-full lg:flex lg:justify-center">
                      <div className="lg:h-full lg:w-4/5">
                        <div className="lg:h-1/5 lg:w-full lg:text-white  lg:text-xl lg:font-semibold lg:flex lg:items-center">
                          Netflix Clone
                        </div>
                        <div className="lg:h-4/5 lg:w-full lg:text-white  lg:text-xs lg:font-semibold">
                          I successfully developed a Netflix clone utilizing
                          React, Material UI, and custom CSS. By meticulously
                          replicating the design and functionality of the
                          original Netflix homepage, I showcased my proficiency
                          in front-end development. The result is a responsive
                          and visually appealing replica that closely emulates
                          the user experience of Netflix's official website.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:h-4/5 lg:w-80 lg:rounded-2xl lg:bg-[#363636] lg:hover:bg-[#ed4956] lg:delay-200">
                    <div className="lg:h-1/5 lg:w-full lg:flex lg:item-center lg:justify-center">
                      <div className="lg:h-full lg:w-4/5 lg:flex lg:items-center">
                        <img className=" lg:h-5/6" src="spotify.png"></img>
                      </div>
                    </div>
                    <div className="lg:h-4/5 lg:w-full lg:flex lg:justify-center">
                      <div className="lg:h-full lg:w-4/5">
                        <div className="lg:h-1/5 lg:w-full lg:text-white lg:text-xl lg:font-semibold lg:flex lg:items-center">
                          Spotify Clone
                        </div>
                        <div className="lg:h-4/5 lg:w-full lg:text-white  lg:text-xs lg:font-semibold">
                          I successfully crafted a near-identical clone of the
                          Spotify web application, allowing users to play songs
                          seamlessly. The design closely emulates the original,
                          ensuring a familiar and immersive experience. Through
                          meticulous development and attention to detail, I've
                          achieved a platform that mirrors the functionality and
                          aesthetics of Spotify, providing users with a
                          high-quality alternative for enjoying their favorite
                          music tracks.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="contactpage"
            className="lg:h-screen lg:bg-black lg:w-full lg:flex lg:items-center lg:justify-center lg:overflow-hidden h-full bg-black w-full flex items-center justify-center   "
          >
            <div className="lg:h-3/4 lg:w-full h-96  w-full">
              <div className="lg:h-full lg:w-full lg:flex lg:justify-center h-full w-full flex justify-center  ">
                <div className="lg:h-full lg:w-4/5 lg:flex h-full w-full">
                  <div className="lg:h-full lg:w-2/5 h-full w-full  ">
                    <div className="lg:h-1/4 lg:w-full lg:text-white lg:flex lg:items-center lg:text-6xl lg:font-semibold h-1/6 p-5 w-full text-white flex items-center text-4xl  font-semibold  ">
                      Contact Me
                    </div>
                    <div className="lg:h-20 lg:w-full lg:flex h-20 p-5 w-full flex">
                      <div className="lg:h-full lg:w-11 lg:flex lg:text-white lg:items-center lg:justify-center h-full w-11 flex text-white items-center justify-center">
                        <AlternateEmailOutlinedIcon />
                      </div>
                      <div className="lg:h-full lg:text-white lg:w-5/6 lg:flex lg:items-center lg:justify-start h-full text-white w-5/6 flex items-center justify-start">
                        <a href="mailto:aditya2955singh@gmail.com">
                          aditya2955singh@gmail.com
                        </a>
                      </div>

                      <div></div>
                    </div>
                    <div className="lg:h-20 lg:w-full lg:flex h-20 p-5 w-full flex">
                      <div className="lg:h-full lg:w-11 lg:flex lg:text-white lg:items-center lg:justify-center h-full w-11 flex text-white items-center justify-center">
                        <CallIcon />
                      </div>
                      <div className="lg:h-full lg:w-5/6 lg:flex lg:text-white lg:items-center lg:justify-start h-full w-5/6 flex text-white items-center justify-start">
                        <a href="tel:9667984036">9667984036</a>
                      </div>
                    </div>
                    <div className="lg:h-16 lg:w-full lg:flex lg:justify-start lg:mt-8 h-16 w-full flex justify-center ">
                      <div className="lg:h-full lg:w-1/4 lg:flex lg:justify-between lg:ml-3 lg:text-white lg:item-end h-full  w-4/5 flex justify-evenly  text-white items-center">
                        <div className="lg:text-white text-white">
                          <a href="https://www.linkedin.com/in/aditya-kumar-b17aa61ab/">
                            <LinkedInIcon sx={{ fontSize: "1.8rem" }} />
                          </a>
                        </div>
                        <div className="lg:text-white text-white">
                          <a href="https://www.instagram.com/adityasingh______/">
                            <InstagramIcon sx={{ fontSize: "1.8rem" }} />
                          </a>
                        </div>
                        <div className="lg:text-white text-white">
                          <a href="https://www.facebook.com/profile.php?id=100044272484309">
                            <FacebookIcon sx={{ fontSize: "1.8rem" }} />
                          </a>
                        </div>
                        <div className="lg:text-white text-white">
                          <a href="https://github.com/Aditya-Singh2955">
                            <GitHubIcon sx={{ fontSize: "1.8rem" }} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:h-4/6 lg:w-2/5 h-full w-full mt ">
                    <div className="lg:h-2/6 lg:w-full lg:flex lg:justify-start lg:items-end h-/5 w-4/5 ml-12 flex justify-center ">
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Enter Your Mail"
                        multiline
                        maxRows={4}
                        sx={{
                          width: "100%",
                          color: "white",
                          backgroundColor: "#363636",
                        }}
                        style={{
                          hover: "1px solid white",
                          color: "red",
                          borderRadius: "10px",
                        }}
                        InputLabelProps={{
                          style: { color: "#fff" },
                        }}
                        InputProps={{
                          style: { color: "white", borderColor: "white" },
                        }}
                        inputProps={{
                          style: { color: "white", borderColor: "white" },
                        }}
                      />
                    </div>
                    <div className="lg:h-2/6 lg:w-full lg:flex lg:items-end h-2/6 w-4/5 ml-12 flex items-end">
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Enter your Name"
                        multiline
                        maxRows={4}
                        sx={{
                          width: "100%",
                          backgroundColor: "#363636",
                          borderRadius: "10px",
                        }}
                        style={{ borderColor: "white" }}
                        InputLabelProps={{
                          style: { color: "#fff" },
                        }}
                        InputProps={{
                          style: { color: "white" },
                        }}
                      />
                    </div>
                    <div className="lg:h-3/6 lg:w-full lg:flex lg:justify-start lg:items-end lg:rounded-lg h-3/6 w-5/6 ml-10 flex justify-start items-end rounded-lg">
                      <TextField
                        id="outlined-multiline-static"
                        label="Type Your Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{
                          width: "100%",
                          backgroundColor: "#363636",
                          borderRadius: "10px",
                        }}
                        InputLabelProps={{
                          style: { color: "#fff" },
                        }}
                        InputProps={{
                          style: { color: "white" },
                        }}
                      />
                    </div>
                    <div className="lg:h-1/6 lg:w-full lg:flex lg:justify-center  lg:items-center h-1/6 w-full flex justify-center  items-center">
                      <Button
                        onClick={() => onClickSend()}
                        style={{ backgroundColor: "#ed4956" }}
                        variant="contained"
                        endIcon={
                          isLoading ? (
                            <CircularProgress
                              size={20}
                              sx={{ color: "white" }}
                            />
                          ) : (
                            <SendIcon />
                          )
                        }
                      >
                        {isLoading ? " Loading..." : "Send"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" lg:h-1/6 lg:w-full lg:flex lg:justify-end lg:items-end h-1/5 w-full">
                <NavigationIcon
                  onClick={() => onClickTop()}
                  style={{
                    fontSize: "50px",
                    backgroundColor: "#ed4956",
                    borderRadius: "50px",
                  }}
                />
              </div>
            </div>
          </div>
        </main>
      ) : (
        <main className="">
          <div className="h-screen bg-black w-full bg-[url('../public/bg.png')] bg-no-repeat bg-center bg-fit overflow-hidden">
            <div className="h-20 w-full flex fixed 	">
              <div className="h-20 w-1/2  flex items-end  justify-end ">
                <div className="h-12 w-10/12  ">
                  <span className=" h-12 text-[#ed4956] text-5xl font-bold">
                    A
                  </span>
                  <span className="text-4xl text-white  font-semibold">
                    ditya.
                  </span>
                </div>
              </div>
              {windowSize.width >= 699 ? (
                <div className="flex text-white h-20 w-1/2 items-end text-white">
                  <div className="h-12 w-4/5 ml-14 cursor-pointer text-white">
                    <ul className="flex justify-evenly items-center text-white  h-12 cursor-pointer">
                    <Link to={"homepage"} smooth={true}>
                      {" "}
                      <li style={{ cursor: "pointer" }}>Home</li>
                    </Link>
                    <Link to={"aboutpage"} smooth={true}>
                      {" "}
                      <li style={{ cursor: "pointer" }}>About</li>
                      </Link>
                      <Link to={"aboutpage"} smooth={true}>
                      {" "}
                      <li style={{ cursor: "pointer" }}>Services</li>
                      </Link>
                      <Link to={"aboutpage"} smooth={true}>
                      {" "}
                      <li style={{ cursor: "pointer" }}>Project</li>
                      </Link>
                      <Link to={"aboutpage"} smooth={true}>
                      {" "}
                      <li style={{ cursor: "pointer" }}>Contact</li>
                      </Link>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className=" flex h-full  w-2/5 justify-end items-end">
                  <MenuIcon sx={{ fontSize: "36px" }} onClick={handleClick} />
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem
                      className=" text-white bg-[#ed4956] font-bold"
                      onClick={handleClose}
                    >
                      Home
                    </MenuItem>
                    <MenuItem
                      className="text-white bg-[#ed4956] font-bold"
                      onClick={handleClose}
                    >
                      About{" "}
                    </MenuItem>
                    <MenuItem
                      className="text-white bg-[#ed4956]  font-bold"
                      onClick={handleClose}
                    >
                      Services
                    </MenuItem>
                    <MenuItem
                      className="text-white bg-[#ed4956]  font-bold"
                      onClick={handleClose}
                    >
                      Project
                    </MenuItem>
                    <MenuItem
                      className="text-white bg-[#ed4956]  font-bold"
                      onClick={handleClose}
                    >
                      Contact
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </div>

            <div id="homepage" className="h-5/6 w-full flex overflow-hidden ">
              <div className="h-5/6 w-1/2  flex items-end justify-end ">
                <div className="h-96 w-10/12  flex flex-col items-start justify-center">
                  <span className=" h-10 flex items-end text-sm text-white">
                    UI/UX Designer
                  </span>
                  <span className=" h-10 w-80 text-3xl font-semibold text-white">
                    Hi, I'm{" "}
                    <span className="text-[#ed4956]  h-6 w-80 text-4xl font-semibold">
                      Aditya
                    </span>
                  </span>
                  <span className="h-10 text-white w-80 text-3xl font-semibold mt-2">
                    Kumar from India
                  </span>
                </div>
              </div>
              <div className="h-full w-1/2 items-end "></div>
            </div>
          </div>

          <div
            id="aboutpage"
            className="h-full flex flex-col justify-center items-center overflow-hidden"
          >
            <div className=" h-screen w-full  flex justify-center items-center ">
              <div className="  h-3/5 w-4/5 bg-red-600 bg-[url('/what.jpg')] bg-no-repeat bg-center bg-cover "></div>
            </div>
            <div className="  mt-[-1  0rem] h-full full  flex justify-center items-center">
              <div className="  h-3/5 w-full  p-5">
                <div className=" h-1/6 text-white  flex items-center text-6xl font-semibold ">
                  About Us
                </div>
                <div className="h-3.5/6 p-3 w-full text-white">
                  Hello! I'm Aditya, a passionate and driven third-year Btech
                  ECE student. My journey in the world of technology has been
                  nothing short of thrilling. My insatiable curiosity and knack
                  for quickly learning new skills and programming languages have
                  allowed me to make remarkable strides in the field of software
                  development and problem-solving.
                  <br />
                  Throughout my academic journey, I've diligently honed my
                  knowledge and skills in a wide range of technologies.
                  Proficient in HTML, CSS, C++, React, Next.js, Tailwind CSS,
                  and JavaScript, I've proven myself as a versatile and
                  resourceful developer. My ability to grasp complex concepts
                  and apply them in real-world scenarios has been instrumental
                  in my academic achievements.
                </div>
                <div className=" text-white h-10 w-full flex justify-between p-5">
                  <ul className="flex h-10 w-full justify-between">
                    <li>
                      <button
                        className="hover: font-bold transition duration-150 border-b-4 border-transparent text-white hover:border-[#ed4956]"
                        onClick={() => Setdata("Skills")}
                      >
                        Skills
                      </button>
                    </li>
                    <li>
                      <button
                        className="hover: font-bold transition duration-150 border-b-4 border-transparent text-white hover:border-[#ed4956]"
                        onClick={() => Setdata("Experience")}
                      >
                        Experience
                      </button>
                    </li>
                    <li>
                      <button
                        className="hover: font-bold transition duration-150 border-b-4 border-transparent text-white hover:border-[#ed4956]"
                        onClick={() => Setdata("Education")}
                      >
                        Education
                      </button>
                    </li>
                  </ul>
                </div>
                <div className=" h-2/5 w-full p-3">
                  {data === "Skills" && (
                    <div className="h-full w-full p-2">
                      <ul>
                        <li className="text-sl font-bold text-[#ed4956]">
                          UI/UX
                        </li>
                        <span className="text-xs text-white">
                          Designing Web/App interfaces
                        </span>
                        <li className="text-sl font-bold text-[#ed4956]">
                          Web Development
                        </li>
                        <span className="text-xs text-white">
                          Web App Development
                        </span>
                        <li className="text-sl font-bold text-[#ed4956]">
                          C++
                        </li>
                        <span className="text-xs text-white">Intermediate</span>
                      </ul>
                    </div>
                  )}
                  {data === "Experience" && (
                    <div className="h-full w-full p-2">
                      <ul>
                        <li className="text-sl font-bold text-[#ed4956]">
                          AppZoTech Pvt Ltd
                        </li>
                        <span className="text-xs text-white">Internship</span>
                        <p className="text-white">
                          Designed Web Pages At AppZoTech.com
                        </p>
                      </ul>
                    </div>
                  )}
                  {data === "Education" && (
                    <div className="h-full w-full p-2">
                      <ul>
                        <li className="text-sl font-bold text-[#ed4956]">
                          Graduation
                        </li>
                        <p className="text-xs text-white">2021-2025</p>
                        <span className="text-sl text-white">B.Tech ECE</span>
                        <li className="text-sl font-bold text-[#ed4956]">
                          School
                        </li>
                        <p className="text-xs text-white">2009-2021</p>
                        <span className="text-sl text-white">
                          Kendriya Vidyalaya Faridabad,Harayana,India
                        </span>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            id="servicespage"
            className="h-screen bg-black w-full flex items-center justify-center"
          >
            <div className="h-full w-full  ">
              <div className="h-1/6 w-full flex  items-center justify-center">
                <div className="h-full w-full flex flex-col">
                  <div className="h-full w-full p-6  text-white text-5xl font-semibold flex items-center">
                    My Services
                  </div>
                </div>
              </div>
              <div className=" mt-8 flex justify-center">
                <div className="h-full w-4/5 flex flex-col   items-center justify-evenly ">
                  <div className="h-full w-80 rounded-2xl bg-[#363636] hover:bg-[#ed4956] delay-200">
                    <div className="h-1/5 w-full flex item-center justify-center">
                      <div className="h-full w-4/5 flex items-center">
                        <img className=" h-16" src="aditya-unscreen.gif"></img>
                      </div>
                    </div>
                    <div className="h-96 w-full flex justify-center">
                      <div className="h-full w-4/5 ">
                        <div className="h-1/5 w-full text-white  text-xl font-semibold flex items-center ">
                          Responsive Web Design
                        </div>
                        <div className=" w-full text-xs text-white font-semibold">
                          My skill lies in creating exceptional, responsive web
                          pages that captivate users across devices. I adeptly
                          combine design principles with coding expertise to
                          ensure seamless functionality and visual appeal. With
                          a keen eye for detail and a commitment to delivering
                          an optimal user experience, I bring websites to life
                          that adapt flawlessly to various screen sizes.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-full mt-8 w-80 rounded-2xl bg-[#363636] hover:bg-[#ed4956] delay-200">
                    <div className="h-1/5 w-full    flex item-center justify-center">
                      <div className="h-full w-4/5  flex items-center">
                        <img className=" h-16" src="code.png"></img>
                      </div>
                    </div>
                    <div className="h-96 w-full flex justify-center">
                      <div className="h-full w-4/5">
                        <div className="h-1/5 w-full text-white  text-xl font-semibold flex items-center">
                          Web development
                        </div>
                        <div className=" w-full text-white text-xs font-semibold">
                          Mastery in web development is my forte. Armed with a
                          diverse skill set, I proficiently navigate through
                          various programming languages, frameworks, and design
                          principles. Crafting dynamic and user-centric websites
                          is where my passion converges with expertise. From
                          conceptualization to deployment, I ensure robust
                          functionality and a seamless user experience.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-full w-80 mt-8 rounded-2xl bg-[#363636] hover:bg-[#ed4956] delay-200">
                    <div className="h-1/5 w-full flex item-center justify-center">
                      <div className="h-full w-4/5 flex items-center">
                        <img className=" h-16" src="user-experience.png"></img>
                      </div>
                    </div>
                    <div className="h-96 w-full flex justify-center">
                      <div className="h-full w-4/5">
                        <div className="h-1/5 w-full text-white text-xl font-semibold flex items-center">
                          UI/UX
                        </div>
                        <div className=" text-white w-full  text-xs font-semibold">
                          I possess a strong proficiency in UI/UX design,
                          adeptly creating interfaces that merge aesthetic
                          appeal with user-centric functionality. My meticulous
                          attention to detail ensures seamless navigation and a
                          delightful user experience. I excel in crafting
                          designs that resonate, optimizing digital interactions
                          and leaving a positive, lasting impact
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="projectpage"
            className="mt-[50rem] h-screen bg-black w-full flex items-center justify-center"
          >
            <div className="h-full w-full ">
              <div className="mb-80 w-full flex  items-center justify-center ">
                <div className="h-full w-full flex flex-col">
                  <div className="h-full w-full p-6  text-white text-5xl font-semibold flex items-center">
                    My Project
                  </div>
                </div>
              </div>
              <div className=" mt-[20rem] h-screen mt-8 flex justify-center">
                <div className="h-full w-4/5 flex flex-col   items-center justify-evenly ">
                  <div className="h-full w-80 rounded-2xl bg-[#363636] hover:bg-[#ed4956] delay-200">
                    <div className="h-1/5 w-full flex item-center justify-center">
                      <div className="h-full w-4/5 flex items-center">
                        <img className=" h-16" src="aditya-unscreen.gif"></img>
                      </div>
                    </div>
                    <div className="h-96 w-full flex justify-center">
                      <div className="h-full w-4/5 ">
                        <div className="h-1/5 w-full text-white  text-xl font-semibold flex items-center ">
                          AppZoTech
                        </div>
                        <div className=" w-full text-xs text-white font-semibold">
                          I played a pivotal role in designing web pages for
                          various websites, focusing on enhancing the
                          responsiveness of their service sections. My expertise
                          primarily revolves around React.js, Next.js, and CSS,
                          enabling me to create dynamic and engaging user
                          interfaces. I strive to optimize user experiences by
                          blending design aesthetics with technical proficiency,
                          resulting in visually appealing and seamlessly
                          functional web pages.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-full mt-8 w-80 rounded-2xl bg-[#363636] hover:bg-[#ed4956] delay-200">
                    <div className="h-1/5 w-full    flex item-center justify-center">
                      <div className="h-full w-4/5  flex items-center">
                        <img className=" h-16" src="code.png"></img>
                      </div>
                    </div>
                    <div className="h-96 w-full flex justify-center">
                      <div className="h-full w-4/5">
                        <div className="h-1/5 w-full text-white  text-xl font-semibold flex items-center">
                          Netflix Clone
                        </div>
                        <div className=" w-full text-white text-xs font-semibold">
                          I successfully developed a Netflix clone utilizing
                          React, Material UI, and custom CSS. By meticulously
                          replicating the design and functionality of the
                          original Netflix homepage, I showcased my proficiency
                          in front-end development. The result is a responsive
                          and visually appealing replica that closely emulates
                          the user experience of Netflix's official website.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-full w-80 mt-8 rounded-2xl bg-[#363636] hover:bg-[#ed4956] delay-200">
                    <div className="h-1/5 w-full flex item-center justify-center">
                      <div className="h-full w-4/5 flex items-center">
                        <img className=" h-16" src="user-experience.png"></img>
                      </div>
                    </div>
                    <div className="h-96 w-full flex justify-center">
                      <div className="h-full w-4/5">
                        <div className="h-1/5 w-full text-white text-xl font-semibold flex items-center">
                          Spotify Clone
                        </div>
                        <div className=" text-white w-full  text-xs font-semibold">
                          I successfully crafted a near-identical clone of the
                          Spotify web application, allowing users to play songs
                          seamlessly. The design closely emulates the original,
                          ensuring a familiar and immersive experience. Through
                          meticulous development and attention to detail, I've
                          achieved a platform that mirrors the functionality and
                          aesthetics of Spotify, providing users with a
                          high-quality alternative for enjoying their favorite
                          music tracks.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="contactpage"
            className="mt-[50rem] bg-black w-full flex items-center justify-center overflow-hidden"
          >
            <div className=" h-[50rem] w-full">
              <div className="  w-full flex justify-center ">
                <div className="  h-full w-full  ">
                  <div className="  h-full full ">
                    <div className="  h-1/6 p-5 w-full text-white flex items-center text-4xl  font-semibold ">
                      {" "}
                      Contact Me
                    </div>
                    <div className="h-20 p-5 w-full flex">
                      <div className="h-full w-11 flex text-white items-center justify-center">
                        <AlternateEmailOutlinedIcon />
                      </div>
                      <div className="h-full text-white w-5/6 flex items-center justify-start">
                        <a href="mailto:aditya2955singh@gmail.com">
                          aditya2955singh@gmail.com
                        </a>
                      </div>

                      <div></div>
                    </div>
                    <div className="h-20 p-5 w-full flex">
                      <div className="h-full w-11 flex text-white items-center justify-center ">
                        <CallIcon />
                      </div>
                      <div className="h-full w-5/6 flex text-white items-center justify-start">
                        <a href="tel:9667984036">9667984036</a>
                      </div>
                    </div>
                    <div  className="h-16 w-full flex justify-center  ">
                      <div className="h-full  w-4/5 flex justify-evenly  text-white items-center">
                        <div className="text-white">
                          <a href="https://www.linkedin.com/in/aditya-kumar-b17aa61ab/">
                            <LinkedInIcon sx={{ fontSize: "1.8rem" }} />
                          </a>
                        </div>
                        <div className="text-white">
                          <a href="https://www.instagram.com/adityasingh______/">
                            <InstagramIcon sx={{ fontSize: "1.8rem" }} />
                          </a>
                        </div>
                        <div className="text-white">
                          <a href="https://www.facebook.com/profile.php?id=100044272484309">
                            <FacebookIcon sx={{ fontSize: "1.8rem" }} />
                          </a>
                        </div>
                        <div className="text-white">
                          <a href="https://github.com/Aditya-Singh2955">
                            <GitHubIcon sx={{ fontSize: "1.8rem" }} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-screen w-full">
                <div className="h-3/5 w-full flex justify-center ">
                  <div className="h-96 w-4/5 ">
                    <div className="  ">
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Enter Your Mail"
                        multiline
                        maxRows={4}
                        sx={{
                          width: "100%",
                          color: "white",
                          backgroundColor: "#363636",
                        }}
                        style={{
                          hover: "1px solid white",
                          color: "red",
                          borderRadius: "10px",
                        }}
                        InputLabelProps={{
                          style: { color: "#fff" },
                        }}
                        InputProps={{
                          style: { color: "white", borderColor: "white" },
                        }}
                        inputProps={{
                          style: { color: "white", borderColor: "white" },
                        }}
                      />
                    </div>
                    <div className="h-2/6 w-full flex items-end">
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Enter your Name"
                        multiline
                        maxRows={4}
                        sx={{
                          width: "100%",
                          backgroundColor: "#363636",
                          borderRadius: "10px",
                        }}
                        style={{ borderColor: "white" }}
                        InputLabelProps={{
                          style: { color: "#fff" },
                        }}
                        InputProps={{
                          style: { color: "white" },
                        }}
                      />
                    </div>
                    <div className="h-3/6 w-full flex justify-start items-end rounded-lg">
                      <TextField
                        id="outlined-multiline-static"
                        label="Type Your Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{
                          width: "100%",
                          backgroundColor: "#363636",
                          borderRadius: "10px",
                        }}
                        InputLabelProps={{
                          style: { color: "#fff" },
                        }}
                        InputProps={{
                          style: { color: "white" },
                        }}
                      />
                    </div>
                    <div className="h-1/6 w-full flex justify-center  items-center">
                      <Button
                        onClick={() => onClickSend()}
                        style={{ backgroundColor: "#ed4956" }}
                        variant="contained"
                        endIcon={
                          isLoading ? (
                            <CircularProgress
                              size={20}
                              sx={{ color: "white" }}
                            />
                          ) : (
                            <SendIcon />
                          )
                        }
                      >
                        {isLoading ? " Loading..." : "Send"}
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-[-13rem] h-1/5 w-full ">
                  <div className=" h-full w-full flex justify-end items-end  ">
                    <NavigationIcon
                      onClick={() => onClickTop()}
                      style={{
                        fontSize: "50px",
                        backgroundColor: "#ed4956",
                        borderRadius: "50px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
