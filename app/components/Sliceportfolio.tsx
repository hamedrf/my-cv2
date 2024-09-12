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
      className={`${item.action} 
            d-flex justify-content-start align-items-center justify-content-lg-center flex-lg-row-reverse  flex-column row   vh-100 w-100
      `}
    >
      <div
        className={`bg-background-portfoliio bg-${item.imgClass} col-12 col-lg-6`}
      ></div>
      <div
        style={{ background: item.color }}
        className="col-11 col-lg-5 col-xl-4  col-xxl-3 d-flex justify-content-center  align-items-center content-portfolio-effect flex-column content-portfolio"
      >
        <h1 className="header-font my-3 ">{item?.title}</h1>
        <p className="m-lg-5 my-4 mx-2 des-font">{item?.des}</p>
        <div className="d-flex flex-wrap justify-content-center w-75">
          {item?.tags.map((e, index) => {
            return <Tag key={index} text={e} />;
          })}
        </div>
        {item.imgClass !== "hamedrajabifarjad" ? (
          <a href={`https://${item.imgClass}.ir`}>
            <button className="btn-animation my-4">دیدن صفحه</button>
          </a>
        ) : (
          <button
            className="btn-animation my-4"
            onClick={() => alert("این وب سایت نسخه قدیمی همین وب سایت هست")}
          >
            دیدن صفحه
          </button>
        )}
      </div>
    </div>
  );
};

export default SlicePortfolio;
