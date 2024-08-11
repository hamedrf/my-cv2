"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../stor";
import {
  nextPortfolio,
  PreviousPortfolio,
} from "../features/portfolio/portfolioSlice";
import SlicePortfolio from "./Sliceportfolio";

const Portfolio = () => {
  const dispatch = useDispatch<AppDispatch>();
  const portfolioItem = useSelector((state: RootState) => state.portfolio);
  return (
    <section className="position-relative  vh-100 overflow-hidden">
      <div
        className="round top-50 translate-middle-y  position-absolute z-3 arrow arrow--right"
        style={{ right: "20px" }}
        onClick={() => dispatch(PreviousPortfolio())}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className=" round round-2 top-50 translate-middle-y position-absolute z-3 arrow arrow--left"
        style={{ left: "20px" }}
        onClick={() => {
          dispatch(nextPortfolio());
          console.log(portfolioItem);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {portfolioItem.active.map((e, index) => (
        <SlicePortfolio item={e} key={index} />
      ))}
    </section>
  );
};

export default Portfolio;
