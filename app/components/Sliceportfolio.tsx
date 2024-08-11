"use client";
import { portfolio } from "../features/portfolio/portfolioSlice";
import Tag from "./Tag";
interface SlicePortfolioProps {
  item: portfolio;
}
const SlicePortfolio: React.FC<SlicePortfolioProps> = ({ item }) => {
  return (
    <div
      id="portfolio"
      key={item.id}
      style={{ left: "50%" }}
      className={`${item.action} 
            d-flex justify-content-center align-items-center  flex-lg-row-reverse  row  h-100 position-absolute top-0   w-100
      `}
    >
      <div
        className={`bg-background-portfoliio ${item.imgClass} col-12 col-lg-6`}
      ></div>
      <div
        style={{ background: item.color }}
        className="col-11 col-lg-5 col-xl-4 col-xxl-3 d-flex justify-content-center align-items-center content-portfolio-effect flex-column content-portfolio"
      >
        <h1 className="header-font">{item?.title}</h1>
        <p className="m-5 des-font">{item?.des}</p>
        <div className="d-flex flex-wrap justify-content-center w-75">
          {item?.tags.map((e, index) => {
            return <Tag key={index} text={e} />;
          })}
        </div>
        <button className="my-3 btn  btn-primary">دیدن از صفحه</button>
      </div>
    </div>
  );
};

export default SlicePortfolio;
