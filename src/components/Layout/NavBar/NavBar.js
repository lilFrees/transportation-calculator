import style from "./NavBar.module.css";
import Logo from "./Logo";

const NavBar = function () {
  return (
    <nav className={style.nav}>
      <div className={style.container}>
        <a href="/" className={style.logo}>
          <Logo />
        </a>
        <div className={style.links}>
          <a href="#how" className={style.link}>
            How it works
          </a>
          <a href="#" className={style.link}>
            Link 2
          </a>
          <a href="#" className={style.link}>
            Link 3
          </a>
        </div>
        <a href="#" className={style.call}>
          Call Us
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
