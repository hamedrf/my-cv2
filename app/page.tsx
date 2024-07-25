import Menu from "@/components/Menu";
import Image from "next/image";
import hamedrajabifarjad from "../public/images/hamed-rajabifarjad.png";
import TypeEffect from "@/components/TypeEffect";

const Home = () => {
  return (
    <>
      <header className="position-relative">
        <Menu />
        <div className=" position-absolute top-0 w-100 z-n1 svg-header-size">
          <div className="position-relative svg-separator w-100 h-100">
            <svg
              className="editorial "
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28 "
              preserveAspectRatio="none"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 
                58-18 88-18s
                58 18 88 18 
                58-18 88-18 
                58 18 88 18
                v44h-352z"
                />
              </defs>
              <g className="parallax1">
                <use xlinkHref="#gentle-wave" x="70" y="3" fill="#ede8f5" />
              </g>
              <g className="parallax2">
                <use xlinkHref="#gentle-wave" x="70" y="0" fill="#8697c4" />
              </g>
              <g className="parallax3">
                <use xlinkHref="#gentle-wave" x="70" y="9" fill="#3d52a0" />
              </g>
              <g className="parallax4">
                <use xlinkHref="#gentle-wave" x="70" y="6" fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
        <div className="d-flex justify-content-around align-items-center row flex-lg-row flex-column">
          <div className=" header-img-animation col-12 col-md-10 col-lg-6 col-xl-4 position-relative  d-flex justify-content-center">
            <Image
              src={hamedrajabifarjad}
              style={{
                width: "65%",
              }}
              className="  h-100"
              alt="حامد رجبی فرجاد"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="position-absolute bottom-0 z-n1"
              style={{ left: "0" }}
              version="1.0"
              width="100%"
              height="100%"
              viewBox="0 0 367 280"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stop-color="#7091e6" />
                  <stop offset="100%" stop-color="#3d52a0" />
                </linearGradient>
              </defs>
              <metadata>
                Created by potrace 1.10, written by Peter Selinger 2001-2011
              </metadata>
              <g
                transform="translate(0,319)  scale(0.1000,-0.1000)"
                fill="url(#grad1)"
                stroke="none"
              >
                <path d="M2304 2780 c-172 -45 -298 -136 -497 -360 -241 -270 -342 -362 -471 -427 -39 -20 -210 -83 -381 -140 -438 -146 -620 -238 -764 -384 -75 -76 -122 -149 -159 -247 -21 -56 -26 -89 -30 -203 -5 -152 12 -237 67 -347 176 -348 650 -554 1466 -637 341 -34 995 -47 1245 -24 507 46 777 211 867 529 15 55 18 102 18 315 -1 212 -4 270 -23 379 -136 788 -556 1435 -1007 1551 -82 21 -241 19 -331 -5z" />
              </g>
            </svg>
          </div>
          <div className="col-11 col-md-10 col-lg-6 col-xl-4 my-5">
            <h1 className="">
              <TypeEffect text="سلام اسم من حامد رجبی فرجاد هستش و خوش آ مدید به رزومه من" />
            </h1>
            <h5 className="header-text-des">
              اسم من حامد رجبی فرجاد هستش و خوش آ مدید به رزومه منسلام اسم من
              حامد رجبی فرجاد هستش و خوش آ مدید به رزومه من1111
            </h5>
          </div>
        </div>
      </header>
    </>
  );
};
export default Home;
