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
      des: "این وب‌سایت نسخه قبلی سایت فعلی من است که شامل چند مینی پروژه می‌شود: فروشگاه (Shop) برای مدیریت محصولات و پرداخت‌ها، لیست کارها (TodoList) برای مدیریت وظایف، و دریافت API (Refetch API) برای دریافت و به‌روزرسانی داده‌ها از API‌های مختلف.",
      tags: ["Next js ", "Ts"],
      imgClass: "bg-zahrarajabifarjad",
      color: "#75aeff",
      action: actionType.null,
    },
    {
      id: 2,
      title: "رزومه شخصی",
      des: "این وب‌سایت نسخه قبلی سایت فعلی من است که شامل چند مینی پروژه می‌شود: فروشگاه (Shop) برای مدیریت محصولات و پرداخت‌ها، لیست کارها (TodoList) برای مدیریت وظایف، و دریافت API (Refetch API) برای دریافت و به‌روزرسانی داده‌ها از API‌های مختلف.",
      tags: ["Next js ", "Ts"],
      imgClass: "bg-hamedrajabifarjad",
      color: "#9badff",
      action: actionType.null,
    },
    {
      id: 3,
      title: "سومین متن تستی ",
      des: "این وب‌سایت نسخه قبلی سایت فعلی من است که شامل چند مینی پروژه می‌شود: فروشگاه (Shop) برای مدیریت محصولات و پرداخت‌ها، لیست کارها (TodoList) برای مدیریت وظایف، و دریافت API (Refetch API) برای دریافت و به‌روزرسانی داده‌ها از API‌های مختلف.",
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
      des: "این وب‌سایت نسخه قبلی سایت فعلی من است که شامل چند مینی پروژه می‌شود: فروشگاه (Shop) برای مدیریت محصولات و پرداخت‌ها، لیست کارها (TodoList) برای مدیریت وظایف، و دریافت API (Refetch API) برای دریافت و به‌روزرسانی داده‌ها از API‌های مختلف.",
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
