import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../assets/landingPage.png";
import "./style.css";

function Home() {
  return (
    <div className="d-flex-row justify-content-center align-items-center text-center vh-100">
      <Header />
      <div style={{ backgroundColor: "#37517e" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="section-hero-kiri text-start">
                <h1
                  style={{ color: "white", fontSize: "40px", fontWeight: 700 }}
                >
                  Better Solutions For Your Business
                </h1>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#c7c7c7c7",
                  }}
                >
                  We are team of talented designers making websites with
                  Bootstrap
                </p>
                <button className="btn btn-info">Get Started</button>
                <button className="mx-3 btn btn-outline-warning">
                  Watch
                </button>{" "}
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="section-hero-kanan">
                <img src={Hero} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="join-our">
        <h1>Join Our Newsletter</h1>
        <p>
          Tamen quem nulla quae legam multos aute sint culpa legam noster magna
        </p>
        <form action="POST">
          <input type="text" className="input" />
          <button className="subscribe-button">Subscribe</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
