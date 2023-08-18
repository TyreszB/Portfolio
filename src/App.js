import Logo from './Logo.png';
import FieldTripLabs from './FieldTripLabs.png'
import {useState} from "react";
import {SocialIcon} from "react-social-icons";

export default function App() {
    return (
        <>
            <Nav />
            <MainLogo />
            <About />
            <Tools />
            <Work />
        </>
    );

    function Nav() {
        const [isOpen, setIsOpen] = useState(false);

        function handleClick() {
            setIsOpen(!isOpen);
        }


        return (
            <div className="w-full flex justify-between px-5 py-5">
                <button onClick={handleClick} className='z-10 md:invisible'>
                    {!isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                  stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    }
                </button>

                <ul className={!isOpen ? "hidden" : "absolute flex flex-col justify-center items-center w-full h-screen  text-slate-100 font-league"}>
                    <li className="py-6 text-4xl">TOOLS</li>
                    <li className="py-6 text-4xl">WORK</li>
                    <li className="py-6 text-4xl">RESUME</li>
                    <li className="py-6 text-4xl">CONTACT</li>
                </ul>


                <ul className="flex text-slate-100 font-league invisible md:visible items-center">
                    <li className=" flex-initial ">
                        <button className='transition ease-in-out duration-300 hover:bg-purple-300 hover:-translate-y-1 hover:scale-110 p-2 m-2 bg-[#62336b] rounded-full'>
                            TOOLS
                        </button>
                    </li>
                    <li className=" flex-initial">
                        <button className=' transition duration-300 hover:bg-purple-300 hover:-translate-y-1 hover:scale-110 p-2 m-2 bg-[#62336b] rounded-full'>
                            WORK
                        </button>
                    </li>
                    <li className=" flex-initial">
                        <button className=' transition ease-in-out duration-300 hover:bg-purple-300 hover:-translate-y-1 hover:scale-110 p-2 m-2 bg-[#62336b] rounded-full'>
                            RESUME
                        </button>
                    </li>
                    <li className=" flex-initial">
                        <button className='transition ease-in-out duration-300 hover:bg-purple-300 hover:-translate-y-1 hover:scale-110 p-2 m-2 bg-[#62336b] rounded-full'>
                            CONTACT
                        </button>
                    </li>
                </ul>
            </div>
        )
    }

    function MainLogo() {
        return (
            <div className="md:my-[100px] md:flex justify-around">
                <div className='mx-auto'>
                    <img src={Logo} alt='Logo' className="rounded-full mx-auto border-2"/>
                </div>
                <div className='my-[50px] text-center md: mx-auto '>
                    <h1 className="text-6xl md:text-9xl leading-loose font-league font-bold">Tyresz Brash</h1>
                    <h2 className='text-4xl font-league md:my-[30px]'>Full Stack Developer.</h2>
                    <div className='my-4 md:my-[150px] '>
                        <SocialIcon url="https://linkedin.com/in/TyreszBrash" bgColor="#62336b" fgColor="#fff"
                                    className='border-2 rounded-full mx-5 md:mx-10 hover:scale-110 duration-500' style={{height: 100, width: 100}}/>
                        <SocialIcon url="https://github.com/TyreszB" bgColor="#62336b" fgColor="#fff"
                                    className='border-2 rounded-full mx-5 md:mx-10 hover:scale-110 duration-500' style={{height: 100, width: 100}}/>
                    </div>
                </div>
            </div>

        );
    }

    function About() {
        return (
            <div className='max-w-[350px] mb-[300px] md:max-w-[1000px] mx-auto flex flex-col justify-center'>
                <p className='font-league text-2xl'>
                    A versatile full-stack developer who brings ideas to life through elegant code. With a passion for crafting seamless user experiences and a knack for both front-end and back-end technologies, thriving in creating innovative digital solutions.
                </p>
            </div>
        )
    }

    function Tools(){
        return (
            <div>
                <h1 className='invisible md:visible text-center text-6xl font-league font-bold'>Tools I Use</h1>
                <div className='columns-3 mb-[300px] md:flex max-w-[1000px] mx-auto'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"  alt="react logo" className='h-[100px] w-[100px] mx-auto md:my-12 hover:scale-110 duration-500' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwindcss logo" className='h-[100px] w-[100px] mx-auto my-12 hover:scale-110 duration-500' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html5 logo" className='h-[100px] w-[100px] mx-auto my-12 hover:scale-110 duration-500' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  alt="css3 logo" className='h-[100px] w-[100px] mx-auto my-12 hover:scale-110 duration-500' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript logo" className='h-[100px] w-[100px] mx-auto my-12 rounded-3xl hover:scale-110 duration-500' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="java logo" className='h-[100px] w-[100px] mx-auto my-12 hover:scale-110 duration-500' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="spring logo" className='h-[100px] w-[100px] mx-auto my-12 hover:scale-110 duration-500' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="bootstrap logo" className='h-[100px] w-[100px] mx-auto my-12 hover:scale-110 duration-500' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"  alt="mysql logo" className='h-[100px] w-[100px] mx-auto my-12 hover:scale-110 duration-500' />
                </div>
            </div>

        )
    }

    function Work() {
        return (
            <div className='flex justify-center items-center h-screen md: justify-around'>
                <div className='flex flex-col items-center md:w-[1000px] md:flex-row md:justify-around'>
                    <p className='invisible md:visible'>Field Trip Planner is a comprehensive travel planning platform that simplifies the process of organizing trips. This project was developed as part of the Capstone Project for FieldTripLabs at CodeUp. The platform utilizes the Google Places API to provide users with curated lists of nearby attractions and points of interest based on their chosen destination. Users can easily add these places to their personalized itineraries, create checklists, and access real-time weather updates to ensure they're well-prepared for their adventures.</p>
                    <img src={FieldTripLabs} alt='FieldTripLabs' className="rounded-3xl mx-auto h-4/5 w-4/5"/>
                    <a href="https://fieldtriplab.com" target="_blank" >
                        <button className='transition ease-in-out duration-300 hover:bg-purple-300 hover:-translate-y-1 hover:scale-110 p-2 m-2 bg-[#62336b] rounded-full'>Visit FieldTripLabs</button>
                    </a>
                </div>
            </div>
        );
    }



}


