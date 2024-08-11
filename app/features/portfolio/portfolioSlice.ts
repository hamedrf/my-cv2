import { createSlice } from "@reduxjs/toolkit";
export enum actionType {
  afterNext = "effect-after-next",
  beforNext = "effect-befor-next",
  afterPrevious = "effect-after-Previous",
  beforPrevious = "effect-befor-Previous ",
  null = "",
}
export interface portfolio {
  id: number;
  title: string;
  des: string;
  tags: string[];
  imgClass: string;
  color: string;
  action: actionType;
  effectClass?: { befor: string; after: string };
}
const initialState: { portfolio: portfolio[]; active: portfolio[] } = {
  portfolio: [
    {
      id: 1,
      title: "اولین متن تستی ",
      des: "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      tags: ["Next js ", "Ts"],
      imgClass: "bg-zahrarajabifarjad",
      color: "#75aeff",
      action: actionType.null,
    },
    {
      id: 2,
      title: "دومین متن تستی ",
      des: "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      tags: ["Next js ", "Ts"],
      imgClass: "bg-hamedrajabifarjad",
      color: "#9badff",
      action: actionType.null,
    },
    {
      id: 3,
      title: "سومین متن تستی ",
      des: "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      tags: ["Next js ", "Ts"],
      imgClass: "bg-arameshbadan",
      color: "#49c3cc",
      action: actionType.null,
    },
  ],
  active: [
    {
      id: 1,
      title: "اولین متن تستی ",
      des: "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      tags: ["Next js ", "Ts"],
      imgClass: "bg-zahrarajabifarjad",
      color: "#75aeff",
      action: actionType.afterNext,
    },
  ],
};
const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    nextPortfolio: (state) => {
      const newActive = state.active
        .filter(
          (obj) =>
            obj.action === actionType.afterNext ||
            obj.action === actionType.afterPrevious
        )
        .map((obj) => ({
          ...obj,
          action: actionType.beforNext,
        }));

      const newActionItem =
        state.portfolio[
          newActive[0].id < state.portfolio.length ? newActive[0].id : 0
        ];
      newActive.push({ ...newActionItem, action: actionType.afterNext });

      return { ...state, active: newActive };
    },
    PreviousPortfolio: (state) => {
      const newActive = state.active
        .filter(
          (obj) =>
            obj.action === actionType.afterNext ||
            obj.action === actionType.afterPrevious
        )
        .map((obj) => ({
          ...obj,
          action: actionType.beforPrevious,
        }));

      const newActionItem =
        state.portfolio[
          newActive[0].id > 1 ? newActive[0].id - 2 : state.portfolio.length - 1
        ];
      newActive.push({ ...newActionItem, action: actionType.afterPrevious });

      return { ...state, active: newActive };
    },
  },
});
export const { nextPortfolio, PreviousPortfolio } = portfolioSlice.actions;

export default portfolioSlice.reducer;
