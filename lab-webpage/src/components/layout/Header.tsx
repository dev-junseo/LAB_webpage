function Header() {
  return (
    <div className="flex justify-between items-center w-full h-20 bg-white relative">
      <div className="ml-12">
            <a href="/">
                <img className="w-20 h-18 block m-auto" alt="" src="/images/lab-logo.png" />
            </a>
        </div>
        <div className="group peer h-20 flex items-center">
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
                <div className="w-full hidden h-52 bg-border absolute top-[30px] z-20 group-hover:block hover:block animate-[gotoDownLow_0.4s_ease-in-out_both]">

                </div>
            </nav>
        </div>
        <div className="w-full hidden h-52 bg-border absolute top-[30px] z-20 peer-hover:block hover:block animate-[gotoDownLow_0.4s_ease-in-out_both]">

        </div>
        <div className="w-full hidden h-[80vh] bg-borderA absolute top-[208px] z-20 peer-hover:block animate-[appear_0.4s_ease-in-out_both]">

        </div>

    </div>
  );
}

export default Header;
