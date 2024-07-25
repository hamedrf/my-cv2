const test = () => {
  return (
    <div className="vh-100 vw-100 d-flex justify-content-center align-items-center bg-secondary-subtle">
      <div className="pedar d-flex justify-content-center align-items-center">
        <div className="cirle-animation"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="position-absolute top-0 z-2"
        >
          <circle
            transform="rotate(0)"
            transform-origin="center"
            fill="none"
            stroke="green"
            stroke-width="10"
            stroke-linecap="round"
            stroke-dasharray="100 1000"
            stroke-dashoffset="0"
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
    </div>
  );
};
export default test;
