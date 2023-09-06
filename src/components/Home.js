import React from "react";
import laundry from "../img/laundry.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <>
        <section className="alert alert-light text-center" role="alert">
          <h1>
            Welcome to your <span>Laundry</span>!
          </h1>
          <p></p>

          <br />
          <Link to="/"></Link>
          <br />
          <img src={laundry} alt="laundry" />
          <br />
        </section>
      </>
    </div>
  );
};

export default Home;
