function Submenu({ currentMenu }: { currentMenu: string }) {
  return (
    <div className="w-full h-14 bg-white border-y-[1px] border-[#b6b6b6] z-40">
      <ul>
        <li className="float-left w-12 h-[54px] relative bg-white border-r border-[#b6b6b6] flex justify-center items-center">
          <a href="/">
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
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </a>
        </li>
        <li className="float-left w-36 h-[54px] relative bg-white border-r border-border flex justify-center items-center group">
          <a href="/about/Overview" className="">
            ABOUT
          </a>
          <ul className="left-[-1px] w-[145px] hidden absolute top-[54px] text-sm bg-white border-r border-l border-border group-hover:block">
            <li className="flex justify-center items-center h-[54px] border-b border-border hover:bg-border transition">
              <a href="/about/Overview">ABOUT</a>
            </li>
            <li className="flex justify-center items-center h-[54px] border-b border-border hover:bg-border transition">
              <a href="#">PROJECT</a>
            </li>
            <li className="flex justify-center items-center h-[54px] border-b border-border hover:bg-border transition">
              <a href="#">DEPARTMENT</a>
            </li>
          </ul>
        </li>
        <li className="float-left w-36 h-[54px] relative bg-white border-r border-border flex justify-center items-center group">
          <div>{currentMenu}</div>
          <ul className="left-[-1px] w-[145px] hidden absolute top-[54px] text-sm bg-white border-r border-l border-border group-hover:block hover:block">
            <li className="flex justify-center items-center h-[54px] border-b border-border hover:bg-border transition">
              <a href="/about/Overview">OVERVIEW</a>
            </li>
            <li className="flex justify-center items-center h-[54px] border-b border-border hover:bg-border transition">
              <a href="/about/Pi">PI</a>
            </li>
            <li className="flex justify-center items-center h-[54px] border-b border-border hover:bg-border transition">
              <a href="/about/Members">MEMBERS</a>
            </li>
            <li className="flex justify-center items-center h-[54px] border-b border-border hover:bg-border transition">
              <a href="/about/Location">Location</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Submenu;
