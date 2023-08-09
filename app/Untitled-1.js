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

export default function Home() {
  const [data, Setdata] = useState("Skills");
  const [isLoading, setIsLoading] = useState(false);

  const onClickTop = () => {
    scroll.scrollToTop();
  };
  const onClickSend = () => {
    setIsLoading(true);
  };

  return (
    <main>
      <div className="h-screen w-full bg-[url('../public/bg.png')] bg-no-repeat bg-center bg-cover overflow-hidden">
        <div className="h-20 w-full flex fixed 	">
          <div className="h-20 w-1/2  flex items-end  justify-end ">
            <div className="h-12 w-10/12  ">
              <span className=" h-12 text-[#ed4956] text-5xl font-bold mt-4">
                A
              </span>
              <span className="text-4xl font-semibold">ditya.</span>
            </div>
          </div>
          <div className="flex h-20 w-1/2 items-end">
            <div className="h-12 w-4/5 ml-14 cursor-pointer">
              <ul className="flex justify-evenly items-center  h-12 cursor-pointer">
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

        <div id="homepage" className="h-5/6 w-full flex ">
          <div className="h-5/6 w-1/2  flex items-end justify-end ">
            <div className="h-96 w-10/12  flex flex-col items-start justify-center">
              <span className=" h-10 text-xl">UI/UX Designer</span>
              <span className=" h-6 text-5xl font-semibold">
                Hi, I'm{" "}
                <span className="text-[#ed4956] h-6 text-5xl font-semibold">
                  Aditya
                </span>
              </span>
              <span className="h-10 text-5xl font-semibold mt-7">
                Kumar from India
              </span>
            </div>
          </div>
          <div className="h-full w-1/2 items-end "></div>
        </div>
      </div>

      <div
        id="aboutpage"
        className=" flex h-screen flex justify-center items-center overflow-hidden"
      >
        <div className="h-full w-2/5  flex justify-end items-center">
          <div className="h-3/5 w-8/12 bg-[#363636] bg-[url('/what.jpg')] bg-no-repeat bg-center bg-cover "></div>
        </div>
        <div className="h-full w-4/5 flex justify-center items-center">
          <div className="h-3/5 w-10/12">
            <div className="h-1/6 p-4  flex items-center text-6xl font-semibold ">
              About Us
            </div>
            <div className="h-3.5/6 p-3 w-full">
              Hello! I'm Aditya, a passionate and driven third-year Btech ECE
              student. My journey in the world of technology has been nothing
              short of thrilling. My insatiable curiosity and knack for quickly
              learning new skills and programming languages have allowed me to
              make remarkable strides in the field of software development and
              problem-solving.
              <br />
              Throughout my academic journey, I've diligently honed my knowledge
              and skills in a wide range of technologies. Proficient in HTML,
              CSS, C++, React, Next.js, Tailwind CSS, and JavaScript, I've
              proven myself as a versatile and resourceful developer. My ability
              to grasp complex concepts and apply them in real-world scenarios
              has been instrumental in my academic achievements.
            </div>
            <div className="h-10 w-1/2 flex justify-evenly p-5">
              <ul className="flex h-10 w-full justify-between">
                <li>
                  <button
                    className="hover: font-bold transition duration-150 border-b-4 border-transparent hover:border-[#ed4956]"
                    onClick={() => Setdata("Skills")}
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    className="hover: font-bold transition duration-150 border-b-4 border-transparent hover:border-[#ed4956]"
                    onClick={() => Setdata("Experience")}
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button
                    className="hover: font-bold transition duration-150 border-b-4 border-transparent hover:border-[#ed4956]"
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
                    <li className="text-sl font-bold text-[#ed4956]">UI/UX</li>
                    <span className="text-xs">
                      Designing Web/App interfaces
                    </span>
                    <li className="text-sl font-bold text-[#ed4956]">
                      Web Development
                    </li>
                    <span className="text-xs">Web App Development</span>
                    <li className="text-sl font-bold text-[#ed4956]">C++</li>
                    <span className="text-xs">Intermediate</span>
                  </ul>
                </div>
              )}
              {data === "Experience" && (
                <div className="h-full w-full p-2">
                  <ul>
                    <li className="text-sl font-bold text-[#ed4956]">
                      AppZoTech Pvt Ltd
                    </li>
                    <span className="text-xs">Internship</span>
                    <p>Designed Web Pages At AppZoTech.com</p>
                  </ul>
                </div>
              )}
              {data === "Education" && (
                <div className="h-full w-full p-2">
                  <ul>
                    <li className="text-sl font-bold text-[#ed4956]">
                      Graduation
                    </li>
                    <p className="text-xs">2021-2025</p>
                    <span className="text-sl">B.Tech ECE</span>
                    <li className="text-sl font-bold text-[#ed4956]">School</li>
                    <p className="text-xs">2009-2021</p>
                    <span className="text-sl">
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
        className="h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <div className="h-3/4 w-full ">
          <div className="h-1/6 w-full flex items-center justify-center">
            <div className="h-full w-4/5">
              <div className="h-full w-full text-6xl font-semibold flex items-center">
                My Services
              </div>
            </div>
          </div>
          <div className="h-5/6 flex justify-center">
            <div className="h-full w-4/5 flex items-center justify-between ">
              <div className="h-4/5  w-80 rounded-2xl bg-[#363636] hover:bg-[#ed4956] delay-200">
                <div className="h-1/5 w-full flex item-center justify-center">
                  <div className="h-full w-4/5 flex items-center">
                    <img className=" h-16" src="aditya-unscreen.gif"></img>
                  </div>
                </div>
                <div className="h-4/5 w-full flex justify-center">
                  <div className="h-full w-4/5 ">
                    <div className="h-1/5 w-full  text-xl font-semibold flex items-center ">
                      Responsive Web Design
                    </div>
                    <div className="h-4/5 w-full text-xs font-semibold">
                      My skill lies in creating exceptional, responsive web
                      pages that captivate users across devices. I adeptly
                      combine design principles with coding expertise to ensure
                      seamless functionality and visual appeal. With a keen eye
                      for detail and a commitment to delivering an optimal user
                      experience, I bring websites to life that adapt flawlessly
                      to various screen sizes.
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-4/5 w-80 rounded-2xl bg-[#363636] hover:bg-[#ed4956] delay-200">
                <div className="h-1/5 w-full flex item-center justify-center">
                  <div className="h-full w-4/5 flex items-center">
                    <img className=" h-5/6" src="code.png"></img>
                  </div>
                </div>
                <div className="h-4/5 w-full flex justify-center">
                  <div className="h-full w-4/5">
                    <div className="h-1/5 w-full  text-xl font-semibold flex items-center">
                      Web development
                    </div>
                    <div className="h-4/5 w-full  text-xs font-semibold">
                      Mastery in web development is my forte. Armed with a
                      diverse skill set, I proficiently navigate through various
                      programming languages, frameworks, and design principles.
                      Crafting dynamic and user-centric websites is where my
                      passion converges with expertise. From conceptualization
                      to deployment, I ensure robust functionality and a
                      seamless user experience.
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-4/5 w-80 rounded-2xl bg-[#363636] hover:bg-[#ed4956] delay-200">
                <div className="h-1/5 w-full flex item-center justify-center">
                  <div className="h-full w-4/5 flex items-center">
                    <img className=" h-5/6" src="user-experience.png"></img>
                  </div>
                </div>
                <div className="h-4/5 w-full flex justify-center">
                  <div className="h-full w-4/5">
                    <div className="h-1/5 w-full text-xl font-semibold flex items-center">
                      UI/UX
                    </div>
                    <div className="h-4/5 w-full  text-xs font-semibold">
                      I possess a strong proficiency in UI/UX design, adeptly
                      creating interfaces that merge aesthetic appeal with
                      user-centric functionality. My meticulous attention to
                      detail ensures seamless navigation and a delightful user
                      experience. I excel in crafting designs that resonate,
                      optimizing digital interactions and leaving a positive,
                      lasting impact
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
        className="h-screen w-full flex items-center justify-center overflow-hidden "
      >
        <div className="h-3/4 w-full ">
          <div className="h-1/6 w-full flex items-center justify-center">
            <div className="h-full w-4/5">
              <div className="h-full w-full text-6xl font-semibold flex items-center">
                My Project
              </div>
            </div>
          </div>
          <div className="h-5/6 flex justify-center">
            <div className="h-full w-4/5 flex items-center justify-between ">
              <div className="h-4/5  w-80 rounded-2xl bg-[#363636] hover:bg-[#ed4956] delay-200">
                <div className="h-1/5 w-full flex item-center justify-center">
                  <div className="h-full w-4/5 flex items-center">
                    <img className=" h-5/6" src="favicon.png"></img>
                  </div>
                </div>
                <div className="h-4/5 w-full flex justify-center">
                  <div className="h-full w-4/5 ">
                    <div className="h-1/5 w-full  text-xl font-semibold flex items-center ">
                      AppZoTech
                    </div>
                    <div className="h-4/5 w-full text-xs font-semibold">
                      I played a pivotal role in designing web pages for various
                      websites, focusing on enhancing the responsiveness of
                      their service sections. My expertise primarily revolves
                      around React.js, Next.js, and CSS, enabling me to create
                      dynamic and engaging user interfaces. I strive to optimize
                      user experiences by blending design aesthetics with
                      technical proficiency, resulting in visually appealing and
                      seamlessly functional web pages.
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-4/5 w-80 rounded-2xl bg-[#363636] hover:bg-[#ed4956] delay-200">
                <div className="h-1/5 w-full flex item-center justify-center">
                  <div className="h-full w-4/5 flex items-center">
                    <img className=" h-5/6" src="netflix.png"></img>
                  </div>
                </div>
                <div className="h-4/5 w-full flex justify-center">
                  <div className="h-full w-4/5">
                    <div className="h-1/5 w-full  text-xl font-semibold flex items-center">
                      Netflix Clone
                    </div>
                    <div className="h-4/5 w-full  text-xs font-semibold">
                      I successfully developed a Netflix clone utilizing React,
                      Material UI, and custom CSS. By meticulously replicating
                      the design and functionality of the original Netflix
                      homepage, I showcased my proficiency in front-end
                      development. The result is a responsive and visually
                      appealing replica that closely emulates the user
                      experience of Netflix's official website.
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-4/5 w-80 rounded-2xl bg-[#363636] hover:bg-[#ed4956] delay-200">
                <div className="h-1/5 w-full flex item-center justify-center">
                  <div className="h-full w-4/5 flex items-center">
                    <img className=" h-5/6" src="spotify.png"></img>
                  </div>
                </div>
                <div className="h-4/5 w-full flex justify-center">
                  <div className="h-full w-4/5">
                    <div className="h-1/5 w-full text-xl font-semibold flex items-center">
                      Spotify Clone
                    </div>
                    <div className="h-4/5 w-full  text-xs font-semibold">
                      I successfully crafted a near-identical clone of the
                      Spotify web application, allowing users to play songs
                      seamlessly. The design closely emulates the original,
                      ensuring a familiar and immersive experience. Through
                      meticulous development and attention to detail, I've
                      achieved a platform that mirrors the functionality and
                      aesthetics of Spotify, providing users with a high-quality
                      alternative for enjoying their favorite music tracks.
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
        className="h-screen w-full flex items-center justify-center overflow-hidden "
      >
        <div className="h-3/4 w-full">
          <div className="h-full w-full flex justify-center ">
            <div className="h-full w-4/5 flex">
              <div className="h-full w-2/5 ">
                <div className="h-1/4 w-full flex items-center text-6xl font-semibold ">
                  Contact Me
                </div>
                <div className="h-20 w-full flex">
                  <div className="h-full w-11 flex items-center justify-center">
                    <AlternateEmailOutlinedIcon />
                  </div>
                  <div className="h-full w-5/6 flex items-center justify-start">
                    <a href="mailto:aditya2955singh@gmail.com">
                      aditya2955singh@gmail.com
                    </a>
                  </div>

                  <div></div>
                </div>
                <div className="h-20 w-full flex">
                  <div className="h-full w-11 flex  items-center justify-center ">
                    <CallIcon />
                  </div>
                  <div className="h-full w-5/6 flex items-center justify-start">
                    <a href="tel:9667984036">9667984036</a>
                  </div>
                </div>
                <div className="h-16 w-full flex justify-start mt-8">
                  <div className="h-full w-1/4 flex justify-between ml-3 item-end">
                    <div>
                      <a href="https://www.linkedin.com/in/aditya-kumar-b17aa61ab/">
                        <LinkedInIcon sx={{ fontSize: "1.8rem" }} />
                      </a>
                    </div>
                    <div>
                      <a href="https://www.instagram.com/adityasingh______/">
                        <InstagramIcon sx={{ fontSize: "1.8rem" }} />
                      </a>
                    </div>
                    <div>
                      <a href="https://www.facebook.com/profile.php?id=100044272484309">
                        <FacebookIcon sx={{ fontSize: "1.8rem" }} />
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/Aditya-Singh2955">
                        <GitHubIcon sx={{ fontSize: "1.8rem" }} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-4/6 w-2/5 ">
                <div className="h-2/6 w-full flex justify-start items-end ">
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
                        <CircularProgress size={20} sx={{ color: "white" }} />
                      ) : (
                        <SendIcon />
                      )
                    }
                  >
                    {isLoading ? " Loading...":"Send"  }
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-1/6 w-full flex justify-end items-end">
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
  );
}
