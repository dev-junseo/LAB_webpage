function Submenu() {
    return (
      <div className="w-full h-14 bg-white border-y-[1px] border-[#b6b6b6]">
        <ul>
            <li className="float-left w-12 h-[54.5px] relative bg-white border-r border-[#b6b6b6] flex justify-center items-center">
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                </a>
            </li>
            <li className="float-left w-36 h-[54.5px] relative bg-white border-r border-[#b6b6b6] flex justify-center items-center">
                <a href="/about/Overview">ABOUT</a>
                <ul className="left-[-1px] w-36 hidden absolute text-sm bg-white border-r border-l border-[#b6b6b6] group-hover:block">
                    <li className="border-b border-[#b6b6b6] hover:bg-[#b6b6b6] transition ease-in-out">
                        <a href="/about/Overview">ABOUT</a>
                    </li>
                    <li className="border-b border-[#b6b6b6] hover:bg-[#b6b6b6] transition ease-in-out">
                        <a href="#">PROJECT</a>
                    </li>
                    <li className="border-b border-[#b6b6b6] hover:bg-[#b6b6b6] transition ease-in-out">
                        <a href="#">DEPARTMENT</a>
                    </li>
                </ul>
            </li>
            <li className="float-left w-36 h-[54.5px] relative bg-white border-r border-[#b6b6b6] flex justify-center items-center">
                <a href="/about/Overview">OVERVIEW</a>
                <ul className="left-[-1px] w-36 hidden absolute text-sm bg-white border-r border-l border-[#b6b6b6]">
                    <li>
                        <a href="/about/Overview">OVERVIEW</a>
                    </li>
                    <li>
                        <a href="#">HISTORY</a>
                    </li>
                    <li>
                        <a href="#">LOCATION</a>
                    </li>
                </ul>
            </li>
        </ul>
      </div>
    );
  }
  
  export default Submenu;