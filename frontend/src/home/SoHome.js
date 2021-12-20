import React, { useState, useEffect } from "react";
import {
  Clock,
  Telephone,
  GeoAlt,
  Envelope,
} from "react-bootstrap-icons";
import { Form as FormAntd, Button } from "antd";
import { isEmpty } from "lodash";
import { useHistory } from "react-router-dom";
// import "./Sohome.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import mainImage5 from "./mainImage5.png";
// import team from "../../assets/frontend/media/media/team.svg";
import Team from "./team.jsx";
import process from "./process.svg";
import report_analytics from "./report_analytics.svg";
import purchase from "./purchase.svg";
// import channels from "./sales_channel.svg";
import light_bg2 from "./light-bg2.png";
import NavbarInventoolyWebsite from "./NavbarInventoolyWebsite";
// import Footer from "../DashboardScreenComponents/Footer";
import { useTitle } from 'react-use';

const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const SoHome = () => {
  //navbar scroll when active state
  useTitle('Smart Laptop Store');
  const history = useHistory();
  const [navbar, setNavbar] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};
    if (!name) {
      err.error = "Please enter your name";
    }
    if (!email) {
      err.error = "Please enter your email";
    } else if (email) {
      if (!isValidEmail(email)) {
        err.email = "Please enter a valid email";
      }
    }
    if (!subject) {
      err.error = "Please enter subject";
    }
    if (!message) {
      err.error = "Please enter your message";
    }
    if (!isEmpty(err)) {
      setErrors(err);
      return false;
    } else {
      return true;
    }
  };
  const submitData = () => {
    // if (validate()) {
    //   let data = { name, email, subject, message };
    //   // dispatch(onContactForm(data));
    // }
    const link = 'https://formspree.io/f/xrgjgvez'

    return link
  }


  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <div
      className="fhomepage"
      style={{
        fontFamily: "Nunito, sans-serif",
        backgroundColor: "#fff",
        scrollBehavior: "smooth",
      }}
      id="top"
    >
      <NavbarInventoolyWebsite />
      <section
        className="d-flex banner-m align-items-center justify-content-centre"
        style={{
          height: "100vh",
          background: `url(${light_bg2}) top center no-repeat`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "60px 0px",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div
            className="row"
            style={{
              marginTop: "20px",
              background: "transparent",
              boxShadow: "0 0 0 0",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="col-lg-6 col-md-7 flex-column "
              style={{ padding: "30px" }}
            >
              <h1
                className="h1Main"
                style={{
                  margin: "0",
                  fontSize: "41px",
                  fontWeight: "bold",
                  color: "#012970",
                }}
              >
                SMARTER LAPTOP MANAGEMENT{" "}
              </h1>
              <h2
                className="h2Main"
                style={{
                  color: "#57646b",
                  margin: "15px 0 0 0",
                  fontSize: "24px",
                }}
              >
                Laptop management at your fingertips. Our store optimizes
                your stock levels and provides out-of-the-box supply chain
                management that creates a smooth, consistent cash flow.
              </h2>
              <a
                href="http://localhost:6565"
                className="btn  btnMain"
                style={{
                  marginTop: "20px",
                  lineHeight: "0",
                  padding: "25px 50px",
                  borderRadius: "4px",
                  transition: "0.5s",
                  color: "#fff ",
                  fontSize: "20px",
                  background: "#4154f1",
                  boxShadow: "0px 5px 30px rgb(65 84 241 / 40%)",
                }}
              >
                Visit Our Product
              </a>
            </div>
            <div className="col-lg-6 col-md-5">
              <img
                src={mainImage5}
                className="img-fluid"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="About"
        style={{ background: "#fff", padding: "60px 0px", overflow: "hidden" }}
      >
        <div className="container">
          <div className="row gx-0">
            <div
              className="col-md-6 mt-3 mb-3 textColumn"
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: "40px",
              }}
            >
              <div
                className="mainHeadingSmall"
                style={{
                  marginBottom: "10px",
                  textAlign: "start",
                  fontSize: "15px",
                  letterSpacing: "2px",
                  fontWeight: "700",
                  margin: "0",
                  color: "#4154f1",
                  textTransform: "uppercase",
                }}
              >
                WHO WE ARE
              </div>
              <h2
                className="h1Column"
                style={{
                  margin: "0",
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#071486",
                  lineHeight: "1.5",
                }}
              >
                What is Smart Laptop Store?
              </h2>
              <h2
                className="h2Column"
                style={{
                  color: "#57646b",
                  margin: "15px 0 0 0",
                  fontSize: "18px",
                  lineHeight: "1.5",
                }}
              >
                Our Store makes laptop management a breeze. Through
                powerful funtionalities, it optimizes your accounts and
                provides you with all the insights of your laptops, so that you
                never miss out any new arrivals. <p />
                {/* <button class="btn  btn-lg btnMain">Why Inventooly?</button> */}
                <a
                  href="http://localhost:6565"
                  className="btn  btnMain"
                  style={{
                    marginTop: "20px",
                    lineHeight: "0",
                    padding: "30px 50px",
                    borderRadius: "4px",
                    transition: "0.5s",
                    color: "#fff",
                    background: "#4154f1",
                    boxShadow: "0px 5px 30px rgb(65 84 241 / 40%)",
                  }}
                >
                  Visit Our Product
                </a>
              </h2>
            </div>
            <div className="col-md-6 text-center">
              <div className="teamSvg" style={{ height: "100%", width: "90%" }}>
                <Team />
              </div>
            </div>
          </div>
        </div>
      </section>
      <main>

        <section
          style={{
            background: "#fff",
            padding: "60px 0px",
            overflow: "hidden",
          }}
        >
          <div className="col-md-6 offset-md-3 text-align: center">
            <div
              className="mainHeadingSmall"
              style={{
                marginBottom: "10px",
                textAlign: "center",
                fontSize: "15px",
                letterSpacing: "2px",
                fontWeight: "700",
                margin: "0",
                color: "#4154f1",
                textTransform: "uppercase",
              }}
            >
              Solution
            </div>
            <p
              style={{
                color: "#072371",
                fontSize: "35px",
                fontWeight: 700,
                marginBottom: "40px",
                textAlign: "center",
              }}
            >
              Providing Best Features
            </p>
          </div>

          <div className="container">
            <div className="row gx-0">
              <div className="col-md-6 mt-3 mb-3 textColumn">
                <h2
                  className="h1Column"
                  style={{
                    margin: "0",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#071486",
                    lineHeight: "1.5",
                  }}
                >
                  Authentication
                </h2>
                <h2
                  className="h2Column"
                  style={{
                    color: "#57646b",
                    margin: "15px 0 0 0",
                    fontSize: "18px",
                    lineHeight: "1.5",
                  }}
                >
                  We provide Authentication using JWT, we used this in our web app for security purposes
                  to prevent stealing of data and accessing of unknown users.
                  Implementing authentication to help you keep track of
                  users and get them to intented pages. <p />
                  <a
                    href="http://localhost:6565"
                    className="btn btnMain"
                    style={{
                      marginTop: "20px",
                      lineHeight: "0",
                      padding: "30px 50px ",
                      borderRadius: "4px",
                      transition: "0.5s",
                      color: "#fff ",
                      background: "#4154f1",
                      boxShadow: "0px 5px 30px rgb(65 84 241 / 40%)",
                    }}
                  >
                    Visit Our Product
                  </a>
                </h2>
              </div>
              <div className="col-md-6 text-center content-vertical">
                <img src={process} style={{ width: "70%" }} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            background: "#fff",
            padding: "60px 0px",
            overflow: "hidden",
          }}
        >
          <div className="container">
            <div className="row gx-0">
              <div className="col-md-6 text-center content-vertical">
                <img src={report_analytics} style={{ width: "80%" }} alt="" />
              </div>
              <div className="col-md-6 mt-3 mb-3 textColumn">
                <h2
                  className="h1Column"
                  style={{
                    margin: "0",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#071486",
                    lineHeight: "1.5",
                  }}
                >
                  Product Recommendation{" "}
                </h2>
                <h2
                  className="h2Column"
                  style={{
                    color: "#57646b",
                    margin: "15px 0 0 0",
                    fontSize: "18px",
                    lineHeight: "1.5",
                  }}
                >
                  When users search for the product, we recommend the
                  related products to the user using a decision tree.
                  When the user searches one model all the related models
                  related to its specification are shown to the user. <p />
                  <a
                    href="http://localhost:6565"
                    className="btn btnMain"
                    style={{
                      marginTop: "20px",
                      lineHeight: "0",
                      padding: "30px 50px ",
                      borderRadius: "4px",
                      transition: "0.5s",
                      color: "#fff ",
                      background: "#4154f1 ",
                      boxShadow: "0px 5px 30px rgb(65 84 241 / 40%)",
                    }}
                  >
                    Visit Our Product
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            background: "#fff",
            padding: "60px 0px",
            overflow: "hidden",
          }}
        >
          <div className="container">
            <div className="row gx-0">
              <div className="col-md-6 mt-3 mb-3 textColumn">
                <h2
                  className="h1Column"
                  style={{
                    margin: "0",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#071486",
                    lineHeight: "1.5",
                  }}
                >
                  Payment Gateway
                </h2>
                <h2
                  className="h2Column"
                  style={{
                    color: "#57646b",
                    margin: "15px 0 0 0",
                    fontSize: "18px",
                    lineHeight: "1.5",
                  }}
                >
                  We used payment gateway technology to accept
                  debit or credit card purchases from our store. <p />
                  <a
                    href="http://localhost:6565"
                    className="btn btnMain"
                    style={{
                      marginTop: "20px",
                      lineHeight: "0",
                      padding: "30px 50px ",
                      borderRadius: "4px",
                      transition: "0.5s",
                      color: "#fff ",
                      background: "#4154f1 ",
                      boxShadow: "0px 5px 30px rgb(65 84 241 / 40%)",
                    }}
                  >
                    Visit Our Product
                  </a>
                </h2>
              </div>
              <div className="col-md-6 text-center content-vertical">
                <img src={purchase} style={{ width: "80%" }} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            background: "#fff",
            padding: "60px 0px",
            overflow: "hidden",
          }}
        >
          <div className="container">
            <div className="row gx-0">
              <div className="col-md-6 text-center content-vertical">
                <img src={process} style={{ width: "80%" }} alt="" />
              </div>
              <div className="col-md-6 mt-3 mb-3 textColumn">
                <h2
                  className="h1Column"
                  style={{
                    margin: "0",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#071486",
                    lineHeight: "1.5",
                  }}
                >
                  Image Search{" "}
                </h2>
                <h2
                  className="h2Column"
                  style={{
                    color: "#57646b",
                    margin: "15px 0 0 0",
                    fontSize: "18px",
                    lineHeight: "1.5",
                  }}
                >
                  Image Search algorithm is used for image recognition.
                  It is a real-time image detection through which a
                  user can get the detail of that image. <p />
                  <a
                    href="http://localhost:6565"
                    className="btn btnMain"
                    style={{
                      marginTop: "20px",
                      lineHeight: "0",
                      padding: "30px 50px ",
                      borderRadius: "4px",
                      transition: "0.5s",
                      color: "#fff ",
                      background: "#4154f1",
                      boxShadow: "0px 5px 30px rgb(65 84 241 / 40%)",
                    }}
                  >
                    Visit Our Product
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            background: "#fff",
            padding: "60px 0px",
            overflow: "hidden",
          }}
        >
          <div className="container">
            <div className="row gx-0">
              <div className="col-md-6 mt-3 mb-3 textColumn">
                <h2
                  className="h1Column"
                  style={{
                    margin: "0",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#071486",
                    lineHeight: "1.5",
                  }}
                >
                  Chat Support
                </h2>
                <h2
                  className="h2Column"
                  style={{
                    color: "#57646b",
                    margin: "15px 0 0 0",
                    fontSize: "18px",
                    lineHeight: "1.5",
                  }}
                >
                  A live chat feature is provided to the users and the admin
                  can directly answer their queries. When the admin is online
                  he can view all the online users and if some users makes
                  some queries he can directly answer the query through
                  the live chat feature. <p />
                  <a
                    href="http://localhost:6565"
                    className="btn btnMain"
                    style={{
                      marginTop: "20px",
                      lineHeight: "0",
                      padding: "30px 50px ",
                      borderRadius: "4px",
                      transition: "0.5s",
                      color: "#fff ",
                      background: "#4154f1 ",
                      boxShadow: "0px 5px 30px rgb(65 84 241 / 40%)",
                    }}
                  >
                    Visit Our Product
                  </a>
                </h2>
              </div>
              <div className="col-md-6 text-center content-vertical">
                <img src={purchase} style={{ width: "80%" }} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section
          id="Contact"
          style={{
            background: "#fff",
            padding: "60px 0px",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <div className="container">
            <p
              style={{
                color: "#072371",
                fontSize: "48px",
                fontWeight: 700,
              }}
            >
              Contact Us
            </p>
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div
                      className="info-box"
                      style={{
                        color: "#444444",
                        background: "#fafbff",
                        padding: "20px",
                        textAlign: "left",
                      }}
                    >
                      <GeoAlt
                        style={{
                          color: "#4154f1",
                          lineHeight: "0px",
                          fontSize: "38px",
                        }}
                      />
                      <h3
                        style={{
                          fontSize: "20px",
                          color: "#012970",
                          fontWeight: "700",
                          margin: "20px 0 10px 0",
                        }}
                      >
                        Address
                      </h3>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "#57646b",
                        }}
                      >
                        Bahria Town Phase 7, <br />
                        Islamabad.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className=" info-box"
                      style={{
                        color: "#444444",
                        background: "#fafbff",
                        padding: "20px",
                        textAlign: "left",
                      }}
                    >
                      <Telephone
                        style={{
                          color: "#4154f1",
                          lineHeight: "0px",
                          fontSize: "38px",
                        }}
                      />
                      <h3
                        style={{
                          fontSize: "20px",
                          color: "#012970",
                          fontWeight: "700",
                          margin: "20px 0 10px 0",
                        }}
                      >
                        Call Us
                      </h3>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "#57646b",
                        }}
                      >
                        {" "}
                        +92 (000) 000-000
                        <br />
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6" style={{ marginTop: "20px" }}>
                    <div
                      className=" info-box"
                      style={{
                        color: "#444444",
                        background: "#fafbff",
                        padding: "20px",
                        textAlign: "left",
                      }}
                    >
                      <Envelope
                        style={{
                          color: "#4154f1",
                          lineHeight: "0px",
                          fontSize: "38px",
                        }}
                      />
                      <h3
                        style={{
                          fontSize: "20px",
                          color: "#012970",
                          fontWeight: "700",
                          margin: "20px 0 10px 0",
                        }}
                      >
                        Email
                      </h3>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "#57646b",
                        }}
                      >
                        admin@smartlaptopstore.com
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6" style={{ marginTop: "20px" }}>
                    <div
                      className=" info-box"
                      style={{
                        color: "#444444",
                        background: "#fafbff",
                        padding: "20px",
                        textAlign: "left",
                      }}
                    >
                      <Clock
                        className="bi bi-envelope"
                        style={{
                          color: "#4154f1",
                          lineHeight: "0px",
                          fontSize: "38px",
                        }}
                      />
                      <h3
                        style={{
                          fontSize: "20px",
                          color: "#012970",
                          fontWeight: "700",
                          margin: "20px 0 10px 0",
                        }}
                      >
                        Open Hours
                      </h3>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "#57646b",
                        }}
                      >
                        Monday - Sunday <br />
                        24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 contact"
                style={{
                  background: "rgb(250, 251, 255)",
                  color: "#444444",
                  padding: "30px",
                }}
              >
                <form action="https://formspree.io/f/xrgjgvez" method="post">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                          setErrors({});
                        }}
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                          setErrors({});
                        }}
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="col-md-12" style={{ marginTop: "20px" }}>
                      <input
                        value={subject}
                        onChange={(event) => {
                          setSubject(event.target.value);
                          setErrors({});
                        }}
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="col-md-12" style={{ marginTop: "20px" }}>
                      <textarea
                        value={message}
                        onChange={(event) => {
                          setMessage(event.target.value);
                          setErrors({});
                        }}
                        className="form-control"
                        name="message"
                        rows={6}
                        placeholder="Message"
                        required
                        style={{
                          marginTop: "0px",
                          marginBottom: "0px",
                          height: "163px",
                        }}
                        defaultValue={""}
                      />
                    </div>
                    <div
                      className="col-md-12 text-center"
                      style={{ marginTop: "20px" }}
                    >
                      <Button
                        type="submit"
                        onClick={submitData}
                        style={{
                          background: "#4154f1",
                          border: "0",
                          padding: "6px 30px",
                          color: "#fff",
                          transition: "0.4s",
                          borderRadius: "4px",
                        }}
                      >
                        Send Message
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default SoHome
