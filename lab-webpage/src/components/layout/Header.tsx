function Header() {
  return (
    <div>
      <div className="logo">
        <a href="/">
          <img src="#" alt="Logo" />
        </a>
      </div>
      <nav className="nav-bar">
        <ul className="menu">
          <li className="menu__parent">
            <a href="#">ABOUT</a>
          </li>
          <li className="menu__parent">
            <a href="#">PROJECT</a>
          </li>
          <li className="menu__parent">
            <a href="#">DEPARTMENT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
