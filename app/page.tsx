import Menu from "@/components/Menu";
import Image from "next/image";
import hamedrajabifarjad from "../public/images/hamed-rajabifarjad.png";

const Home = () => {
  return (
    <>
      <header className="position-relative">
        <Menu />
        <div className="d-flex justify-content-around align-items-center row">
          <div className="bg-danger col-3">1</div>
          <div className=" col-3">
            <Image
              src={hamedrajabifarjad}
              className=" w-100 h-100 "
              alt="حامد رجبی فرجاد"
            />
          </div>
        </div>
        <div
          className=" position-absolute top-0 w-100 z-n1"
          style={{ height: "40vh" }}
        >
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
      </header>
    </>
  );
};
export default Home;
