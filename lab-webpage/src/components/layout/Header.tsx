import { useEffect, useState } from "react";

function Header() {

    const [width, setWidth] = useState(window.innerWidth);
    const [isLarge, setIsLarge] = useState(Boolean)

    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    const handleIsLarge = () => {
        if (width >= 1024) {
            setIsLarge(true)
          } else {
            setIsLarge(false)
          }
    }
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            // cleanup
            window.removeEventListener("resize", handleResize);
            handleIsLarge()
        };
    }, []);
    useEffect(() => {
        if (width >= 1024) {
            setIsLarge(true)
          } else {
            setIsLarge(false)
          }
    }, [width])
  return (
    <div className="flex justify-between items-center w-full lg:h-20 h-14 bg-white relative">
      <div className="ml-12">
            <a href="/">
                <img className="lg:w-20 lg:h-18 w-18 h-16 block m-auto" alt="" src="/images/lab-logo.png" />
            </a>
        </div>
        {isLarge ? (
            <div>
                <div className="peer h-20 flex items-center">
            <nav>
                <ul className="flex justify-end mr-12">
                    <li className="flex w-32 h-10 justify-center items-center">
                        <a href="/about/Overview">ABOUT</a>
                    </li>
                    <li className="flex w-32 h-10 justify-center items-center">
                        <a href="#">PROJECT</a>
                    </li>
                    <li className="flex w-32 h-10 justify-center items-center">
                        <a href="#">DEPARTMENT</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="w-full hidden h-56 bg-white absolute top-[30px] z-20 peer-hover:block hover:block border-b border-border animate-[gotoDownLow_0.4s_ease-in-out_both] ">
        <nav>
                <ul className="flex justify-end mr-12">
                    <li className="flex w-32 h-10 justify-center items-start">
                        <ul className="flex flex-col justify-center items-center">
                            <li className="flex justify-center items-center h-[54px]">
                              <a href="/about/Overview">OVERVIEW</a>
                            </li>
                            <li className="flex justify-center items-center h-[54px]">
                              <a href="/about/Pi">PI</a>
                            </li>
                            <li className="flex justify-center items-center h-[54px]">
                              <a href="/about/Members">MEMBERS</a>
                            </li>
                            <li className="flex justify-center items-center h-[54px]">
                              <a href="/about/Location">Location</a>
                            </li>
                        </ul>
                    </li>
                    <li className="flex w-32 h-10 justify-center items-center">
                        <a href="#">PROJECT</a>
                    </li>
                    <li className="flex w-32 h-10 justify-center items-center">
                        <a href="#">DEPARTMENT</a>
                    </li>
                </ul>
            </nav>
        </div>
            </div>
        ) : (
            <div className="mr-5">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

            </div>
        )}

    </div>
  );
}

export default Header;
