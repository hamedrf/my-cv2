"use client";
import Image from "next/image";
import hamedrajabifarjad from "../../public/images/hamedrajabifarjad2.webp";
import React, { useEffect, useState } from "react";
import { useShowModal } from "../context/ModalShow";
import { traceGlobals } from "next/dist/trace/shared";
import TypeEffect from "./TypeEffect";

const Modal = () => {
  const { showModal, toggleModal } = useShowModal();
  useEffect(() => {
    if (!showModal) {
      const intervalId = setTimeout(() => {
        toggleModal();
      }, 45000);
      return () => clearInterval(intervalId);
    }
  }, [showModal, toggleModal]);
  if (!showModal) return null;
  return (
    <div className="position-fixed bg-dark bg-opacity-50 z-3 bg-modal">
      <button
        className="position-absolute btn btn-danger z-1"
        onClick={() => toggleModal()}
        style={{ top: "20px", right: "20px" }}
      >
        X
      </button>
      <div className="modal position-fixed top-50  d-flex justify-content-evenly flex-column align-items-center z-0 py-5">
        <div className="modal-img d-flex justify-content-evenly align-items-center mt-3">
          <div className="cirle-animation">
            <Image
              src={hamedrajabifarjad}
              alt="حامدرجبی فرجاد"
              className="w-100 h-100 rounded rounded-circle"
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="position-absolute top-0 z-2"
          >
            <circle
              transform="rotate(0)"
              style={{ transformOrigin: "center" }}
              fill="none"
              stroke="green"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="100 1000"
              strokeDashoffset="0"
              cx="100"
              cy="100"
              r="92"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0"
                to="360"
                dur="2"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
          </svg>
        </div>
        <div className=" d-flex justify-content-evenly py-3 align-items-center flex-column px-3 px-md-4 flex-grow-1">
          <h2>از سایت‌های ساده و شیک خوشت میاد؟</h2>
          <TypeEffect
            text="اگه دنبال یه سایت ساده، شیک و کاربردی برای کسب‌وکارت هستی، همین الان
            دست به کار شو! با کلیک روی دکمه پایین، اولین قدم رو برای رشد
            کسب‌وکارت بردار."
            duration={20}
            delay={1300}
          />
          <a href="tel:+989012226411" className="mt-3">
            <button className="btn-animation bg-success bg-opacity-25 ">
              شروع کن
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
