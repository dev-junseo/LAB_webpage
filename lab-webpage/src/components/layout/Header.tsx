function Header() {
  return (
    <div className="flex justify-between items-center w-full h-20 bg-none">
      <div className="ml-12">
            <a href="#">
                <img className="w-20 h-18 block m-auto" alt="" src="/lab-logo.png" />
            </a>
        </div>
        <nav className="">
            <ul className="flex justify-end mr-12">
                <li className="flex w-32 h-10 justify-center items-center">
                    <a href="#">ABOUT</a>
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
  );
}

export default Header;
