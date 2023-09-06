import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer mt-auto py-3 bg-light">
        <ul className="d-flex justify-content-center  ">
          <li className="me-5">
            <FaFacebook />
          </li>
          <li className="me-5">
            <FaInstagram />
          </li>
          <li className="me-5">
            <FaLinkedin />
          </li>
        </ul>
        <div className="d-flex justify-content-center">
          <p>
            <span>Costs</span> &copy; 2023
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
