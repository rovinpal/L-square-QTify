import React from "react";
import { Link } from "react-router-dom";
import FeedBackButton from "../Button/Button";
import FeedBackModal from "../Modal/Modal";
import { useFeedback } from "../../context/FeedbackContext";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  const { openModal } = useFeedback();


  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/">
          <Logo />
        </Link>
        <Search
          placeholder="Search a song of your choice"
          searchData={searchData}
        />
        <FeedBackButton onClick={openModal}/>
      </nav>
      <FeedBackModal />
  </>
  );
}

export default Navbar;
