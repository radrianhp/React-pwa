/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Catalogs from "parts/Catalogs";

function urlB64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function subscribe() {
  const key =
    "BFsMSP1hpY6dk5G1LUKSDIdNJOjCSXI2pySSIdaqqQbBsWwrzo8T9WWI8Gvm9kkHKztl683eppAvvXrdhFirNbo";
  try {
    global.registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServeKey: urlB64ToUint8Array(key),
    });
    console.log("Subscribe!");
  } catch (error) {
    console.log("Cannot Subscribe");
  }
}

export default class LandingPage extends Component {
  componentDidMount() {
    document.title = "React - Webpack";
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <header>
          <div className="container">
            <div className="header-left">
              <img
                className="logo"
                src="https://prog-8.com/images/html/advanced/main_logo.png"
                alt=""
              />
            </div>
            <span className="fa fa-bars menu-icon"></span>

            <div className="header-right">
              <a href="#">Pelajaran</a>
              <a href="#">Daftar</a>
              <a href="#" className="login">
                Log in
              </a>
            </div>
          </div>
        </header>
        <div className="top-wrapper">
          <div className="container">
            <h1>BELAJAR CODING.</h1>
            <h1>BELAJAR MENJADI LEBIH KREATIF.</h1>
            <p>Progate adalah platform online untuk belajar coding.</p>
            <p>
              Kami menawarkan lingkungan pemograman yang lengkap untuk
              mempermudah Anda memulai.
            </p>
            <div className="btn-wrapper">
              <button href="#" className="btn signup">
                Daftar dengan Email
              </button>
              <p>atau</p>
              <button ttonhref="#" className="btn facebook">
                <span className="fa fa-facebook"></span>Daftar dengan Facebook
              </button>
              <button href="#" className="btn twitter">
                <span className="fa fa-twitter"></span>Daftar dengan Twitter
              </button>
            </div>
          </div>
        </div>
        <div className="lesson-wrapper">
          <div className="container">
            <div className="heading">
              <h2>Cari tau dari mana Anda mau memulai!</h2>
            </div>
            <div className="lessons">
              <div className="lesson">
                <div className="lesson-icon">
                  <img
                    src="https://prog-8.com/images/html/advanced/html.png"
                    alt=""
                  />
                  <p>HTML & CSS</p>
                </div>
                <p className="txt-contents">
                  Bahasa yang digunakan untuk membuat dan mendesain tampilan
                  situs web Anda.{" "}
                </p>
              </div>
            </div>
            <div className="lesson">
              <div className="lesson-icon">
                <img
                  src="https://prog-8.com/images/html/advanced/jQuery.png"
                  alt=""
                />
                <p>jQuery</p>
              </div>
              <p className="txt-contents">
                Library JavaScript yang cepat, kaya akan fitur, dan mudah
                digunakan yang menangani animasi dan permintaan Ajax.
              </p>
            </div>
            <div className="lesson">
              <div className="lesson-icon">
                <img
                  src="https://prog-8.com/images/html/advanced/ruby.png"
                  alt=""
                />
                <p>Ruby</p>
              </div>
              <p className="txt-contents">
                Bahasa dinamis, serba guna yang sederhana dan produktif. Ruby
                sering digunakan untuk membuat aplikasi web yang responsive.
              </p>
            </div>
            <div className="lesson">
              <div className="lesson-icon">
                <img
                  src="https://prog-8.com/images/html/advanced/php.png"
                  alt=""
                />
                <p>PHP</p>
              </div>
              <p className="txt-contents">
                Bahasa skrip open source yang dapat disematkan ke dalam HTML,
                dan cocok untuk pengembangan web.
              </p>
            </div>
            <div className="clear"></div>
          </div>
        </div>

        <Catalogs />

        <div className="message-wrapper">
          <div className="container">
            <div className="heading">
              <h2>Apakah Anda siap untuk menjadi programer yang handal?</h2>
              <h3>Ayo belajar coding, ayo belajar menjadi lebih kreatif!</h3>
            </div>
            <button className="btn message" onClick={subscribe}>
              Mulai Belajar
            </button>
          </div>
        </div>
        <footer>
          <div className="container">
            <img
              src="https://prog-8.com/images/html/advanced/footer_logo.png"
              alt=""
            />
            <p>Learn to code, learn to be creative.</p>
          </div>
        </footer>
      </>
    );
  }
}
