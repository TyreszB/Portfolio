/* eslint-disable react/jsx-no-target-blank */
import Logo from "./Logo.png";
import FieldTripLabs from "./FieldTripLabs.png";
import WildOasis from "./WildOasis.png";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-scroll";

export default function App() {
  return (
    <>
      <Nav />
      <MainLogo />
      <Tools />
      <Work />
      <Contact />
      <Footer />
    </>
  );

  function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
      setIsOpen(!isOpen);
    }

    return (
      <div className="sticky top-0 w-full h-[80px] z-10 flex justify-between px-5">
        <button onClick={handleClick} className=" md:invisible">
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        {/*mobile nav*/}
        <ul
          className={
            !isOpen
              ? "hidden"
              : "fixed flex flex-col justify-center items-center h-screen w-screen text-slate-100 font-league z-[1000]"
          }
        >
          <li className="py-6 text-4xl">
            <Link to="tools" smooth={true} duration={500} offset={-50}>
              <a onClick={handleClick}>TOOLS</a>
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="work" smooth={true} duration={500} offset={-10}>
              <a onClick={handleClick}>WORK</a>
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1kcdZeL5oUJACxa7kGTrYGPDw7HaXcpj3Y6QLZRDd4W0/edit?usp=sharing"
            >
              RESUME
            </a>
          </li>
          <li className="py-6 text-4xl">
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <a onClick={handleClick}>CONTACT</a>
            </Link>
          </li>
        </ul>

        <ul className="flex text-slate-100 font-league invisible md:visible items-center">
          <li>
            <Link to="tools" smooth={true} duration={500} offset={-250}>
              <button className="transition ease-in-out duration-300 hover:bg-purple-300 hover:-translate-y-1 hover:scale-110 p-2 m-2 bg-[#62336b] rounded-full">
                TOOLS
              </button>
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500} offset={-200}>
              <button className=" transition duration-300 hover:bg-purple-300 hover:-translate-y-1 hover:scale-110 p-2 m-2 bg-[#62336b] rounded-full">
                WORK
              </button>
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1kcdZeL5oUJACxa7kGTrYGPDw7HaXcpj3Y6QLZRDd4W0/edit?usp=sharing"
            >
              <button className=" transition ease-in-out duration-300 hover:bg-purple-300 hover:-translate-y-1 hover:scale-110 p-2 m-2 bg-[#62336b] rounded-full">
                RESUME
              </button>
            </a>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              <button className=" transition duration-300 hover:bg-purple-300 hover:-translate-y-1 hover:scale-110 p-2 m-2 bg-[#62336b] rounded-full">
                CONTACT
              </button>
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  function MainLogo() {
    return (
      <div
        name="home"
        className="md:my-[100px] md:flex justify-around md:h-screen"
      >
        <div className="mx-auto">
          <img
            src={Logo}
            alt="Logo"
            className="rounded-full w-auto mx-auto border-2"
          />
        </div>
        <div className="my-[50px] text-center md: mx-auto ">
          <h1 className="text-6xl md:text-9xl leading-loose font-league font-bold">
            Tyresz Brash
          </h1>
          <h2 className="text-4xl font-league md:my-[30px]">
            Full Stack Developer.
          </h2>
          <div className="my-4 md:my-[150px] ">
            <SocialIcon
              url="https://linkedin.com/in/TyreszBrash"
              bgColor="#62336b"
              fgColor="#fff"
              className="border-2 rounded-full mx-5 md:mx-10 hover:scale-110 duration-500"
              style={{ height: 100, width: 100 }}
            />
            <SocialIcon
              url="https://github.com/TyreszB"
              bgColor="#62336b"
              fgColor="#fff"
              className="border-2 rounded-full mx-5 md:mx-10  hover:scale-110 duration-500"
              style={{ height: 100, width: 100 }}
            />
          </div>
        </div>
      </div>
    );
  }

  function About() {
    return (
      <div className="max-w-[400px] md:max-w-[1000px] mx-auto flex flex-col justify-center">
        <p className="font-league text-4xl">
          A versatile full-stack developer who brings ideas to life through
          elegant code. With a passion for crafting seamless user experiences
          and a knack for both front-end and back-end technologies, thriving in
          creating innovative digital solutions.
        </p>
      </div>
    );
  }

  function Work() {
    const [selectedImage, setSelectedImage] = useState(0);

    function handleSelection(imageIndex) {
      setSelectedImage(imageIndex);
    }

    return (
      <div className="flex flex-col md:h-screen">
        <h1
          name="work"
          className="invisible md:visible text-center text-6xl font-league font-bold md: mb-10"
        >
          Work
        </h1>
        <div className="flex-wrap md:flex">
          <div className="mx-auto h-4/5 w-4/5 mb-[100px] md:w-[500px] md:h-auto md:me-4">
            <a href="https://tyresz-wild-oasis.vercel.app" target="_blank">
              <img
                src={WildOasis}
                alt="Wild Oasis"
                onMouseEnter={() => handleSelection(0)}
                className={`rounded-3xl mx-auto shadow-lg shadow-cyan-500/50 hover:scale-110 duration-500 md:h-full md:w-full ${
                  selectedImage === 0
                    ? "opacity-100 hover:opacity-100"
                    : "opacity-50 hover:opacity-100"
                }`}
              />
            </a>
          </div>
          <div className="mx-auto h-4/5 w-4/5 mb-[100px] md:w-[500px] md:h-auto md:ms-4">
            <a
              href="https://github.com/FieldTrip-Brash-McPhatter-Varjan-Wyatt/FieldTripLabs"
              target="_blank"
            >
              <img
                src={FieldTripLabs}
                alt="FieldTripLabs"
                onMouseEnter={() => handleSelection(1)}
                className={`rounded-3xl mx-auto shadow-lg shadow-cyan-500/50 hover:scale-110 duration-500 md:h-full md:w-full ${
                  selectedImage === 1
                    ? "opacity-100 hover:opacity-100"
                    : "opacity-50 hover:opacity-100"
                }`}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }

  function Tools() {
    return (
      <div className="md:h-screen" name="tools">
        <h1 className="invisible md:visible text-center text-6xl font-league font-bold">
          Tools I Use
        </h1>
        <div className="columns-3 md:flex max-w-[1000px] mx-auto ">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="react logo"
            className="h-[100px] w-[100px] mx-auto md:my-12 hover:scale-110 duration-500"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            alt="tailwindcss logo"
            className="h-[100px] w-[100px] mx-auto my-12 hover:scale-110 duration-500"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="html5 logo"
            className="h-[100px] w-[100px] mx-auto my-12 hover:scale-110 duration-500"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="css3 logo"
            className="h-[100px] w-[100px] mx-auto my-12 hover:scale-110 duration-500"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="javascript logo"
            className="h-[100px] w-[100px] mx-auto my-12 rounded-3xl hover:scale-110 duration-500"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            alt="java logo"
            className="h-[100px] w-[100px] mx-auto my-12 hover:scale-110 duration-500"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
            alt="spring logo"
            className="h-[100px] w-[100px] mx-auto my-12 hover:scale-110 duration-500"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            alt="bootstrap logo"
            className="h-[100px] w-[100px] mx-auto my-12 hover:scale-110 duration-500"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="mysql logo"
            className="h-[100px] w-[100px] mx-auto my-12 hover:scale-110 duration-500"
          />
        </div>
        <About />
      </div>
    );
  }

  function Contact() {
    return (
      <div
        name="contact"
        className="w-full p-4 mx-auto md:h-screen flex justify-center items-center md:w-[600px]"
      >
        <form
          action="https://getform.io/f/bac73a8f-e612-4c24-8043-e2bcbcabd2db"
          method="POST"
          className="flex flex-col max-w[600px] w-full "
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline font-league border-b-4 border-[#62336b]">
              Contact
            </p>
            <p className="py-4">
              Submit the form below or shoot me an email - Tyreszbrash@gmail.com{" "}
            </p>
          </div>
          <input
            className=" rounded p-2 bg-slate-100 text-slate-600"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className=" rounded my-4 p-2 bg-slate-100 text-slate-600"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className=" rounded p-2 bg-slate-100 text-slate-600"
            name="message"
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>

          <button className=" transition ease-in-out duration-300 hover:bg-purple-300 hover:-translate-y-1 hover:scale-110 p-3 my-8 bg-[#62336b] rounded-full mx-auto flex items-center">
            Contact Me
          </button>
        </form>
      </div>
    );
  }

  function Footer() {
    return (
      <Link to="home" smooth={true} duration={500} offset={-150}>
        <button className="sticky bottom-0 rounded transition ease-in-out duration-300 hover:bg-purple-300 hover:-translate-y-1 hover:scale-110 p-3 my-8 bg-[#62336b] ">
          TOP
        </button>
      </Link>
    );
  }
}
