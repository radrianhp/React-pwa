/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Catalogs from "parts/Catalogs";

import image1 from "assets/images/image1.jpg";
import image2 from "assets/images/image2.jpg";
import image3 from "assets/images/image3.jpg";
import image4 from "assets/images/image4.jpg";

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
              <span className="logo">KramedGroup</span>
            </div>
            <span className="fa fa-bars menu-icon"></span>

            <div className="header-right">
              <a href="#">About</a>
              <a href="#">Katalog</a>
              <a href="#" className="login">
                Log in
              </a>
            </div>
          </div>
        </header>
        <div className="top-wrapper">
          <div className="container">
            <h1>E-commerce Elektronik</h1>
            <h1>Tempat Belanja Paling Nyaman</h1>
            <p>Kebutuhan barang-barang elektronik tinggal pesan disini aja!</p>
            <p>
              Kami menawarkan berbagai merek dan harga yang terjangkau hanya di
              tempat kami
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
              <h2>Barang Rekomendasi Tahun Ini</h2>
            </div>
            <div className="lessons">
              <div className="lesson">
                <div className="lesson-icon">
                  <img src={image1} alt="" />
                  <p>HTML & CSS</p>
                </div>
                <p className="txt-contents">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequuntur saepe nostrum pariatur odio molestias quod
                  doloribus voluptatum, dicta magnam recusandae quia repudiandae
                  voluptates officiis iusto laudantium rem facere. Consectetur,
                  ipsum!
                </p>
              </div>
            </div>
            <div className="lesson">
              <div className="lesson-icon">
                <img src={image2} alt="" />
                <p>jQuery</p>
              </div>
              <p className="txt-contents">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur saepe nostrum pariatur odio molestias quod
                doloribus voluptatum, dicta magnam recusandae quia repudiandae
                voluptates officiis iusto laudantium rem facere. Consectetur,
                ipsum!
              </p>
            </div>
            <div className="lesson">
              <div className="lesson-icon">
                <img src={image3} alt="" />
                <p>Ruby</p>
              </div>
              <p className="txt-contents">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur saepe nostrum pariatur odio molestias quod
                doloribus voluptatum, dicta magnam recusandae quia repudiandae
                voluptates officiis iusto laudantium rem facere. Consectetur,
                ipsum!
              </p>
            </div>
            <div className="lesson">
              <div className="lesson-icon">
                <img src={image4} alt="" />
                <p>PHP</p>
              </div>
              <p className="txt-contents">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur saepe nostrum pariatur odio molestias quod
                doloribus voluptatum, dicta magnam recusandae quia repudiandae
                voluptates officiis iusto laudantium rem facere. Consectetur,
                ipsum!
              </p>
            </div>
            <div className="clear"></div>
          </div>
        </div>

        <Catalogs />

        <div className="message-wrapper">
          <div className="container">
            <div className="heading">
              <h2>Lorem ipsum dolor sit amet consectetur</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                itaque vero, sed pariatur velit enim necessitatibus omnis dicta
                iure laboriosam officia facilis placeat impedit incidunt sequi,
                fugiat ipsa nostrum neque.
              </h3>
            </div>
            <button className="btn message" onClick={subscribe}>
              Mulai Belajar
            </button>
          </div>
        </div>
        <footer>
          <div className="container">
            <p>@Copyright 2021 Krakatau Media Group</p>
          </div>
        </footer>
      </>
    );
  }
}
