import Logo from './Logo.png';

export default function App() {
    return (
        <>
            <Nav/>
            <MainLogo />
        </>
    );

    function Nav() {
        return (
            <nav className="w-full flex justify-between px-5 py-5">
                <span></span>
                <ul className="flex text-slate-100 font-league">
                    <li className="invisible md:visible flex-initial p-2 m-2 bg-[#62336b] rounded-full">EXPERIENCE</li>
                    <li className="invisible md:visible flex-initial p-2 m-2 bg-[#62336b] rounded-full">WORK</li>
                    <li className="invisible md:visible flex-initial p-2 m-2 bg-[#62336b] rounded-full">RESUME</li>
                    <li className="invisible md:visible flex-initial p-2 m-2 bg-[#62336b] rounded-full">CONTACT</li>
                </ul>
            </nav>
        )
    }

    function MainLogo(){
        return (
            <div className="md:my-[100px] md:flex justify-around">
                <div className='mx-auto'>
                    <img src={Logo} alt ='Logo' className="rounded-full mx-auto border-2"/>
                </div>
                <div className='my-[50px] text-center md: mx-auto '>
                    <h1 className="text-6xl md:text-9xl leading-loose font-league font-bold">Tyresz Brash</h1>
                    <h2 className='text-4xl font-league'>Full Stack Developer.</h2>
                </div>
            </div>

        );
    }
}


