"use client";
import { useDispatch, useSelector } from "react-redux";
import Tag from "./Tag";
import { AppDispatch, RootState } from "../stor";
import { next1 } from "../features/portfolio/portfolioSlice";
import SlicePortfolio from "./Sliceportfolio";

const Portfolio = () => {
  const dispatch = useDispatch<AppDispatch>();
  const portfolioItem = useSelector((state: RootState) => state.portfolio);
  return (
    <section
      className=" d-flex justify-content-center align-items-center  flex-lg-row-reverse  row  "
      style={{ height: "100vh" }}
    >
      <SlicePortfolio item={portfolioItem.active[0]} />
    </section>
  );
};

export default Portfolio;
