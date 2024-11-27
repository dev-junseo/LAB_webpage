import { useEffect, useState } from "react";

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isLarge, setIsLarge] = useState(Boolean);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width >= 1024) {
      setIsLarge(true);
    } else {
      setIsLarge(false);
    }
  }, [width]);

  return (
    <div className="flex justify-between items-center lg:h-20 h-14 bg-white relative border-b border-border">
      <div className="ml-12">
        <a href="/">
          <img
            className="lg:w-20 lg:h-16 w-16 h-[54px] block m-auto"
            alt="lab logo"
            src="/images/lab-logo.png"
          />
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
                  <a href="/project/Project">PROJECT</a>
                </li>
                <li className="flex w-32 h-10 justify-center items-center">
                  <a href="/gallery/Gallery">GALLERY</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full hidden h-56 bg-white absolute top-[30px] right-0 z-20 peer-hover:block hover:block border-b border-border animate-[gotoDownLow_0.4s_ease-in-out_both] ">
            <nav>
              <ul className="flex justify-end mr-12">
                <li className="flex w-32 h-10 justify-center items-start">
                  <ul className="flex flex-col justify-center items-center">
                    <li className="flex justify-center items-center h-[54px]">
                      <a href="/about/Overview">OVERVIEW</a>
                    </li>
                    <li className="flex justify-center items-center h-[54px]">
                      <a href="/about/Pi">LEADER</a>
                    </li>
                    <li className="flex justify-center items-center h-[54px]">
                      <a href="/about/Members">MEMBERS</a>
                    </li>
                    <li className="flex justify-center items-center h-[54px]">
                      <a href="/about/Location">LOCATION</a>
                    </li>
                  </ul>
                </li>
                <li className="flex w-32 h-10 justify-center items-center">
                  <a href="/project/Project">PROJECT</a>
                </li>
                <li className="flex w-32 h-10 justify-center items-center">
                  <a href="/gallery/Gallery">GALLERY</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      ) : (
        <div className="">
          {/* 햄버거 버튼 */}
          <button className="mr-5" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* 사이드바 */}
          <div
            className={`fixed top-0 right-0 h-full bg-white z-50 transform transition-transform border-l border-border ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            } ${width <= 500 ? "w-full" : "w-[350px]"}`}
          >
            {/* 닫기 버튼 */}
            <button
              className="absolute top-5 right-5 text-xl"
              onClick={closeSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>

            <nav className="mt-14">
              <ul className="flex flex-col mt-10">
                <li className="py-4 border-y border-border">
                  <a href="/about/Overview" className="text-xl ml-5">
                    ABOUT
                  </a>
                  <ul className="ml-8">
                    <li className="mt-3">
                      <a href="/about/Overview">Overview</a>
                    </li>
                    <li className="mt-3">
                      <a href="/about/Pi">Leader</a>
                    </li>
                    <li className="mt-3">
                      <a href="/about/Members">Members</a>
                    </li>
                    <li className="mt-3">
                      <a href="/about/Location">Location</a>
                    </li>
                  </ul>
                </li>
                <li className="py-4 border-b border-border">
                  <a href="/project/Project" className="text-xl ml-5">
                    PROJECT
                  </a>
                </li>
                <li className="py-4 border-b border-border">
                  <a href="/gallery/Gallery" className="text-xl ml-5">
                    GALLERY
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
