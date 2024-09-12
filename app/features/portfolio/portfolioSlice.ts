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
      title: "سایت خانم زهرا رجبی فرجاد",
      des: "یک سایت زیبا و ساده برای معرفی و ارائه خدمات تحصیلی است که با هدف ایجاد تجربه‌ای روان و کاربرپسند طراحی شده است. این سایت با استفاده از تکنولوژی‌های پیشرفته مانند Next.js، TypeScript و jQuery و... توسعه یافته و به کاربران امکان می‌دهد به راحتی با خدمات و منابع آموزشی مختلف آشنا شوند",
      tags: ["Next js ", "Ts", "JQUERY", "Redux"],
      imgClass: "zahrarajabifarjad",
      color: "#75aeff",
      action: actionType.null,
    },
    {
      id: 2,
      title: "رزومه شخصی",
      des: "این وب‌سایت نسخه قبلی سایت فعلی من است که شامل چند مینی پروژه می‌شود: فروشگاه (Shop) برای مدیریت محصولات و پرداخت‌ها، لیست کارها (TodoList) برای مدیریت وظایف، و دریافت API (Refetch API) برای دریافت و به‌روزرسانی داده‌ها از API‌های مختلف.",
      tags: ["React", "Ts", "JQuery", "redux", "react-query"],
      imgClass: "hamedrajabifarjad",
      color: "#9badff",
      action: actionType.null,
    },
    {
      id: 3,
      title: "آرامش بدن",
      des: "یک پروژه ساده، آرامش‌بخش و زیبا است که به درخواست مشتری برای علاقه‌مندان به یوگا طراحی شده است. هدف اصلی از این وب‌سایت ایجاد فضایی دلنشین برای معرفی خدمات یوگا و ایجاد ارتباط با علاقه‌مندان به این ورزش بود.",
      tags: ["Wordpress", "WooCommerce", "Elementor"],
      imgClass: "arameshebadan",
      color: "#49c3cc",
      action: actionType.null,
    },
  ],
  active: [
    {
      id: 1,
      title: "سایت خانم زهرا رجبی فرجاد",
      des: "یک سایت زیبا و ساده برای معرفی و ارائه خدمات تحصیلی است که با هدف ایجاد تجربه‌ای روان و کاربرپسند طراحی شده است. این سایت با استفاده از تکنولوژی‌های پیشرفته مانند Next.js، TypeScript و jQuery و... توسعه یافته و به کاربران امکان می‌دهد به راحتی با خدمات و منابع آموزشی مختلف آشنا شوند",
      tags: ["Next js ", "Ts", "JQUERY", "Redux"],
      imgClass: "zahrarajabifarjad",
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
