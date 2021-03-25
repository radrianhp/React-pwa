import React, { Component } from "react";

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
          </div>
        </div>
        <div className="message-wrapper">
          <div className="container">
            <div className="heading">
              <h2>Apakah Anda siap untuk menjadi programer yang handal?</h2>
              <h3>Ayo belajar coding, ayo belajar menjadi lebih kreatif!</h3>
            </div>
            <span className="btn message">Mulai Belajar</span>
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
