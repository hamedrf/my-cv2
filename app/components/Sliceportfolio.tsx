import { portfolio } from "../features/portfolio/portfolioSlice";
import Tag from "./Tag";

interface SlicePortfolioProps {
  item: portfolio;
}

const SlicePortfolio: React.FC<SlicePortfolioProps> = ({ item }) => {
  return (
    <>
      <div className=" bg-zahrarajabifarjad col-11 col-lg-6   "></div>
      <div className="col-11 col-lg-5 col-xl-4 col-xxl-3 d-flex justify-content-center align-items-center flex-column content-portfolio">
        <h1 className="my-3">{item.title}</h1>
        <p className="my-3">{item.des}</p>
        <div className="my-3 d-flex flex-wrap w-75">
          {item.tags.map((e, index) => {
            return <Tag key={index} text={e} />;
          })}
        </div>
        <button className="my-3 btn btn-primary">دیدن از صفحه</button>
      </div>
    </>
  );
};

export default SlicePortfolio;
