import { IoCarSport, IoSettingsSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link to="/" className={styles.logo}>
              <IoCarSport size="30px" className={ styles.logoIcon} />
        <p>CarBazaar</p>
      </Link>
      <ul className={styles.navigationList}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
        <li>
          <NavLink to="/my-profile">My profile</NavLink>
        </li>
      </ul>
      <Link>
              <IoSettingsSharp size="25px" color="#ff5c00" className={ styles.settingIcon} />
      </Link>
    </nav>
  );
}

export default Navigation;
